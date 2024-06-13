from django.shortcuts import render
from .models import Project, Tag, About
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProjectSerializer, TagSerializer, AboutSerializer


# Create your views here.
class ProjectList(APIView):
    def get(self, request, format=None):
        projects = Project.objects.filter()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class TagList(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class ProjectRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = "pk"


class AboutList(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
