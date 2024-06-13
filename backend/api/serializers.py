from rest_framework import serializers
from .models import Project, Tag, ProjectImage, About


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["id", "title", "description", "tags", "link", "created_at"]


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name", "image_link"]


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ["id", "title", "description"]


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ["id", "project", "image"]
