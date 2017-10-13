from django.contrib.auth.signals import user_logged_in, user_logged_out
from django.utils import timezone
from django.shortcuts import render

import datetime

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, exceptions, generics
from knox.models import AuthToken

from .utils import phone_regex, otp_regex, send_otp, verify_otp
from .models import *
from .serializers import *

class SendOTP(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        phone = request.data.get("phone", "")
        if not phone_regex.regex.match(phone):
            raise exceptions.ParseError({
                "success":False,
                "message":"Phone number not valid",
            })
        user, created = User.objects.get_or_create(phone=phone)

        if not send_otp(phone):
            raise exceptions.ParseError({
                "success":False,
                "message":"Sending OTP failed",
            })
        return Response({
            "success":True,
            "message":"OTP sent successfully",
            "user_id":user.id
        })

class VerifyOTP(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        name = request.data.get("name", "")
        phone = request.data.get("phone", "")
        otp = request.data.get("otp", "")
        user_id = request.data.get("user_id","")
        if not name:
            raise exceptions.ParseError({
                "success":False,
                "message": "Name not found",
            })
        if not phone_regex.regex.match(phone):
            raise exceptions.ParseError({
                "success":False,
             	"message" : "Phone number format not valid",
            })
        if not otp_regex.regex.match(otp):
            raise exceptions.ParseError({
                "success":False,
                "message":"OTP format not valid",
            })
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            raise exceptions.ParseError({
                "success":False,
                "message":"User does not exist",
            })
        if not user.phone == phone:
            raise exceptions.ParseError({
                "success":False,
                "message":"Phone number not valid",
            })
        if not verify_otp(phone, otp):
            raise exceptions.ParseError({
                "success":False,
                "message":"OTP incorrect",
            })
        user.name = name
        user.save()
        token = AuthToken.objects.create(user);
        user_logged_in.send(sender=user.__class__, request=request, user=user)
        return Response({
            "success":True,
            "message":"Verified successfully",
            "token":token
        })

class CheckLoginState(APIView):
    def post(self, request):
        return Response({"success":True})
 
class ListCities(generics.ListAPIView):
    queryset = City.objects.filter(active=True)
    serializer_class = CitySerializer

class ListAreas(generics.ListAPIView):
    serializer_class = AreaSerializer
    def get_queryset(self):
        try:
            city_id = self.request.GET.get('city_id')
            return Area.objects.filter(city=city_id, active=True)
        except Exception as e:
            raise exceptions.ParseError({"success":False, "message":str(e)})  

class ListReviews(generics.ListAPIView):
    serializer_class = ReviewSerializer
    def get_queryset(self):
        try:
            area_id = self.request.GET.get('area_id')
            return Review.objects.filter(area=area_id, active=True) 
        except Exception as e:
            raise exceptions.ParseError({"success":False, "message":str(e)})  
   
class AddReview(APIView):
    def post(self, request):
        try: 
            user = self.request.user
            area = Area.objects.get(id=request.data.get("area_id"))
            review, created = Review.objects.get_or_create(user=user, area=area)
            review.well_lit = request.data.get("well_lit")
            review.transport = request.data.get("transport")
            review.crowded = request.data.get("crowded")
            review.comment = request.data.get("comment")
            review.save()
            return Response({
                "success":True,
                "message" : "Review created successfully"
            })
        except Exception as e:
            raise exceptions.ParseError({"success":False, "message": str(e)})
