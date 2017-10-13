from rest_framework import serializers
from .models import *

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name')

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ('id', '__str__', 'longitude', 'latitude')

class ReviewSerializer(serializers.ModelSerializer):
    area = AreaSerializer() 
    class Meta:
        model = Review
        fields = ('id', 'area', 'well_lit', 'transport', 'crowded', 'comment')
