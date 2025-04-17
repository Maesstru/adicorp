from django.db import models

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    scope = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"


class ProjectImage(models.Model):
    """Model for storing multiple images related to a Project"""
    project = models.ForeignKey(
        Project, 
        on_delete=models.CASCADE, 
        related_name='images'
    )
    image = models.ImageField(upload_to='project_images/')
    order = models.PositiveIntegerField(default=0)
    
    class Meta:
        verbose_name = "Project Image"
        verbose_name_plural = "Project Images"
        ordering = ['order']


