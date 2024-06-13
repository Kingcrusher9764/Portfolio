from django.urls import path
from . import views

urlpatterns = [
    path("projects/", views.ProjectList.as_view(), name="projects"),
    path(
        "project/<int:pk>",
        views.ProjectRetrieveUpdateDestroy.as_view(),
        name="project",
    ),
    path("tags/", views.TagList.as_view(), name="tags"),
    path("about/", views.AboutList.as_view(), name="about"),
]
