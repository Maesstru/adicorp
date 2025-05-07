

# Create your views here.

from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer
from .service import Service
from django.http import Http404

class ProjectListView(generics.ListAPIView):
    queryset = Service.get_all() # Limit the query to the first 5 projects
    serializer_class = ProjectSerializer

class PostDetailView(generics.RetrieveAPIView):
    serializer_class = ProjectSerializer

    def get_object(self):
        project_id = self.kwargs.get('id')
        project = Service.find_by_id(id=project_id)
        if not project:
            raise Http404("Project not found!")
        return project

