from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.schemas import get_schema_view
from login import views as login_views

schema_view = get_schema_view(title='Pastebin API')

urlpatterns = [
    url(r'^schema', schema_view),
    url(r'^admin', admin.site.urls),
    url(r'^oauth/', include('social_django.urls', namespace='social')),
    url(r'^user_login', login_views.user_login, name='user_login'),
    url(r'^user_logout', login_views.user_logout, name='user_logout'),
    url(r'^login_successful', login_views.login_successful, name='login_successful'),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^', include('eventMap.urls')),
]
