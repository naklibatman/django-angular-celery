from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer
from rest_framework.parsers import JSONParser
from rest_framework import status

@api_view(['GET', 'POST', 'DELETE'])
def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        firstName = request.query_params.get('firstName', None)
        if firstName is not None:
            users = users.filter(firstName__icontains=firstName)
        users_serializer = UserSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)

    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = User.objects.all().delete()
        return JsonResponse({'message': '{} Tutorials were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

def user_detail(request):
    pass

def user_list_designation(request):
    pass

# Create your views here.
