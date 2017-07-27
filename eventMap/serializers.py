from rest_framework import serializers
from .models import Event
from django.contrib.auth.models import User

class EventSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Event
        fields = ('url', 'id', 'owner', 'name', 'description', 'lat', 'lon', 'start_date', 'end_date')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    events = serializers.HyperlinkedRelatedField(many=True, view_name='event-detail', read_only=True)

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'events', 'first_name', 'last_name',)
