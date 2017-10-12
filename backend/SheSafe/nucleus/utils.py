from django.core.validators import RegexValidator
from django.conf import settings

phone_regex = RegexValidator(regex=r'^[789]\d{9}$',
    message="Phone number format not valid")

otp_regex = RegexValidator(regex=r'^\d{4}$',
    message="Phone number format not valid")

def send_otp(phone):
    if settings.DEBUG:
        return True
    else: 
        """
           The code for integrating messaging service 
           for production goes here.
        """

def verify_otp(phone, otp):
    if settings.DEBUG:
        if(otp=="1234"):
            return True
        else:
            return False
    else:
        """
          The code for verifying the otp sent via 
          service goes here.
        """
     
