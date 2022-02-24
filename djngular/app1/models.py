from django.db import models

class User(models.Model):
    firstName = models.CharField(max_length=30, blank=False, default='')
    lastName = models.CharField(max_length=30, blank=False, default='')
    age = models.IntegerField()
    designation = models.CharField(max_length=30, blank=False, default='')

# Create your models here.
