from django.urls import path
from . import views

urlpatterns = [
    path('projects/',views.ProjectListView.as_view(), name='hello'),
    path('post/<int:id>/',views.PostDetailView.as_view(), name='postare')
]