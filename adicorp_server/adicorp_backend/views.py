

# Create your views here.

from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all() # Limit the query to the first 5 projects
    serializer_class = ProjectSerializer

