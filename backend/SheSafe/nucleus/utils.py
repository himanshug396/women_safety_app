from django.core.validators import RegexValidator

phone_regex = RegexValidator(regex=r'^[789]\d{9}$',
    message="Phone number format not valid")

otp_regex = RegexValidator(regex=r'^\d{4}$',
    message="Phone number format not valid")
