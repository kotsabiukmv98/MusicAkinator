from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from backend.views import main

urlpatterns = [
    path('', main),
    path('admin/', admin.site.urls),
    path('recognizer/', include('recognizer.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
