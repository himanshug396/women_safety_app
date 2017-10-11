from django.conf.urls import url, include

from . import views
from django.conf import settings

urlpatterns = [
  url(r'^sendOtp/$', views.SendOTP.as_view(), name='sendOtp'),
  url(r'^verifyOtp/$', views.VerifyOTP.as_view(), name='verifyOtp'),
  url(r'^checkLoginState/$', views.CheckLoginState.as_view(), name='checkLoginState'),
]
