from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('api/users', views.user_list, name="userlist")
    # path('api/users', views.user_list, name="userlist")
    # path('api/users', views.user_list, name="userlist")
    # url(r'^api/users$', views.user_list),
    # url(r'^api/users/(?P<pk>[0-9]+)$', views.user_detail),
    # url(r'^api/users/designation$', views.user_list_designation),
]
