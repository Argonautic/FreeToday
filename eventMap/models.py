from django.db import models
import datetime

def oneHourFromNow():
    return datetime.datetime.now() + datetime.timedelta(hours=1)

class Event(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    startDate = models.DateTimeField(default=datetime.datetime.now())
    endDate = models.DateTimeField(default=(oneHourFromNow()))
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    owner = models.ForeignKey('auth.User', related_name='events', on_delete=models.CASCADE)

    class Meta:
        ordering = ('startDate',)

    def __str__(self):
        return self.name

