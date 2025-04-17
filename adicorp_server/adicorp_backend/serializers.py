from rest_framework import serializers
from .models import Project, ProjectImage

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'order']  # List any fields you want to include

class ProjectSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True)  # Include related images

    class Meta:
        model = Project
        fields = ['id', 'title', 'scope', 'location', 'description', 'images']
