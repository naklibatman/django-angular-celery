# Generated by Django 4.0.2 on 2022-02-16 05:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(default='', max_length=30)),
                ('lastName', models.CharField(default='', max_length=30)),
                ('age', models.IntegerField()),
                ('designation', models.CharField(default='', max_length=30)),
            ],
        ),
    ]
