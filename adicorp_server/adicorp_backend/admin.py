from django.contrib import admin
from .models import Project, ProjectImage

# Register your models here.

class ImageInLine(admin.StackedInline):
    model=ProjectImage
    extra=1

class ProjectAdmin(admin.ModelAdmin):
    inlines=[ImageInLine]

admin.site.register(Project,ProjectAdmin)
