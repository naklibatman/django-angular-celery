from time import sleep
from celery import shared_task
from celery_progress.backend import ProgressRecorder

@shared_task(bind=True)
def waiting_time(self, duration):
    Progress_recorder = ProgressRecorder(self)
    for i in range(30):
        sleep(duration)
        Progress_recorder.set_progress(i + 1, 30, f'On Iteration {i}')
    return "Bhaiya Mero Sexy"
