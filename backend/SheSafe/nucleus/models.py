from django.db import models
from django.conf import settings
from django.utils import timezone

from django.contrib.auth.models import AbstractBaseUser,\
    BaseUserManager, PermissionsMixin
from .utils import phone_regex                        
import nucleus.constants as constants                  

class UserManager(BaseUserManager):
    def create_user(self, name, phone, **extra_fields):
        time_now = timezone.now()
        is_staff = extra_fields.pop("is_staff", False)
        is_superuser = False
        if not name:
            raise ValueError('Name is not provided')
        if not phone:
            raise ValueError('Phone is not provided')
        is_active = extra_fields.pop("is_active", True)
        user = self.model(name=name, phone=phone, is_staff=is_staff, is_active=is_active,
            is_superuser=is_superuser, last_login=time_now,
            date_joined=time_now,**extra_fields)
        user.set_password(settings.MASTER_PASSWORD)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, phone, password, **extra_fields):
        time_now = timezone.now()
        is_staff = True
        is_superuser = True
        if not phone:
            raise ValueError('Phone is not provided')
        is_active = extra_fields.pop("is_active", True)
        user = self.model(phone=phone, is_staff=is_staff, is_active=is_active,
            is_superuser=is_superuser, last_login=time_now,
            date_joined=time_now,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

class AbstractUser(AbstractBaseUser, PermissionsMixin):
    class Meta:
        abstract = True
    name = models.CharField(max_length=100)
    phone = models.CharField(validators=[phone_regex],
        max_length=10, unique=True)
    is_staff = models.BooleanField('Staff status', default=False)
    is_superuser = models.BooleanField('Superuser status', default=False)
    is_active = models.BooleanField('Active', default=True)
    date_joined = models.DateTimeField('Date joined', default=timezone.now)

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.phone+" ("+self.phone+")"

class User(AbstractUser):
    objects = UserManager()

    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'
    def __str__(self):
        return self.name+" ("+self.phone+")"

class BaseModel(models.Model):
    active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, blank=False)
    last_updated = models.DateTimeField(auto_now=True, blank=False)

    class Meta:
        abstract=True

class City(BaseModel):
    name = models.CharField(max_length=50, db_index=True)
    state = models.CharField(max_length=50, choices = constants.STATE_CHOICES)
    def __str__(self):
        return self.name+', '+ self.get_state_display()

class Area(BaseModel):
    name = models.CharField(max_length=100, db_index=True)
    city = models.ForeignKey(City)
    longitude = models.DecimalField(max_digits=12, decimal_places=9)
    latitude = models.DecimalField(max_digits=12, decimal_places=9)
    
    @property
    def well_lit(self):
        reviews = Review.objects.filter(area = self)
        count=0
        rating=0.0
        for review in reviews:
            if(review.well_lit>0):
                rating+=float(review.well_lit)
                count+=1
        if(count!=0):
            rating = float(rating/count)
        return round(rating, 1)
    
    @property
    def transport(self):
        reviews = Review.objects.filter(area = self)
        count=0
        rating=0.0
        for review in reviews:
            if(review.transport>0):
                rating+=float(review.transport)
                count+=1
        if(count!=0):
            rating = float(rating/count)
        return round(rating, 1)
    
    @property
    def crowded(self):
        reviews = Review.objects.filter(area = self)
        count=0
        rating=0.0
        for review in reviews:
            if(review.crowded>0):
                rating+=float(review.crowded)
                count+=1
        if(count!=0):
            rating = float(rating/count)
        return round(rating, 1)

    def __str__(self):
        return self.name+', '+str(self.city.name)

class Review(BaseModel):
    area = models.ForeignKey(Area)
    user = models.ForeignKey(User)
    well_lit = models.IntegerField(default=0)
    transport = models.IntegerField(default=0)
    crowded = models.IntegerField(default=0)
    comment = models.CharField(max_length=500, null=True, blank=True)
    def __str__(self):
        return str(self.user)+', '+str(self.area)

