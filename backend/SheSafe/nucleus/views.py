from django.contrib.auth.signals import user_logged_in, user_logged_out
from django.utils import timezone
from django.shortcuts import render

import datetime

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, exceptions, generics

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
        user_logged_in.send(sender=user.__class__, request=request, user=user)
        return Response({
            "success":True,
            "message":"Verified successfully",
        })

class CheckLoginState(APIView):
    def post(self, request):
        return Response({"success":True})


