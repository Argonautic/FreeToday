from django.db import models
from datetime import datetime, timedelta

def oneHourFromNow():
    return datetime.now() + timedelta(hours=2)

class Event(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateTimeField(default=datetime.now())
    end_date = models.DateTimeField(default=(oneHourFromNow()))
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lon = models.DecimalField(max_digits=9, decimal_places=6)
    owner = models.ForeignKey('auth.User', related_name='events', on_delete=models.CASCADE)

    class Meta:
        ordering = ('start_date',)

    def __str__(self):
        return self.name

