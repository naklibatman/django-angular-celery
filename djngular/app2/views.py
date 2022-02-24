from django.http import JsonResponse
from django.shortcuts import render
from .tasks import waiting_time 

def index(request):
    task = waiting_time.delay(1)
    # print(task.task_id)
    progress_index = {
        "index": task.task_id,
    }
    # return render(request, 'app2/index.html', {'task_id': task.task_id})
    # json_payload = {
    #     "message": "Hello World!"
    # }
    # waiting_time.delay()
    # sleep takes the parameter second
    #sleep(10)
    # return JsonResponse(json_payload)
    return JsonResponse(progress_index)


