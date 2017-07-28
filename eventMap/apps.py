from django.apps import AppConfig


class EventmapConfig(AppConfig):
    name = 'eventMap'

    def ready(self):
        from . import signals