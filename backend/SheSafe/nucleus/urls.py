from django.conf.urls import url, include

from . import views
from django.conf import settings

urlpatterns = [
  url(r'^sendOtp/$', views.SendOTP.as_view(), name='sendOtp'),
  url(r'^verifyOtp/$', views.VerifyOTP.as_view(), name='verifyOtp'),
  url(r'^checkLoginState/$', views.CheckLoginState.as_view(), name='checkLoginState'),
  url(r'^addContacts/$', views.AddContacts.as_view(), name='addContacts'),
  url(r'^listContacts/$', views.ListContacts.as_view(), name='listContacts'),
  url(r'^alertContacts/$', views.AlertContacts.as_view(), name='alertContacts'),
  url(r'^sendImage/$', views.SendImage.as_view(), name='sendImage'),
  url(r'^listCities/$', views.ListCities.as_view(), name='listCities'),
  url(r'^listAreas/$', views.ListAreas.as_view(), name='listAreas'),
  url(r'^listReviews/$', views.ListReviews.as_view(), name='listReviews'),
  url(r'^addReview/$', views.AddReview.as_view(), name='addReview'),
  url(r'^contactUs/$', views.Contact.as_view(), name='contactUs'),
]
