from rest_framework import serializers
from .models import *

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name')

class AreaSerializer(serializers.ModelSerializer):
    well_lit = serializers.StringRelatedField()
    transport = serializers.StringRelatedField()
    crowded = serializers.StringRelatedField()
    class Meta:
        model = Area
        fields = ('id', '__str__', 'longitude', 'latitude', 'well_lit', 'transport', 'crowded')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name')

class ReviewSerializer(serializers.ModelSerializer):
    area = AreaSerializer()
    user = UserSerializer() 
    class Meta:
        model = Review
        fields = ('id', 'area', 'user', 'well_lit', 'transport', 'crowded', 'comment')
