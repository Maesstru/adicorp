from django.db import models
from django.core.files import File
from io import BytesIO
from PIL import Image

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
    project = models.ForeignKey(
        'Project', 
        on_delete=models.CASCADE, 
        related_name='images'
    )
    image = models.ImageField(upload_to='project_images/')
    order = models.PositiveIntegerField(default=0)
    
    class Meta:
        verbose_name = "Project Image"
        verbose_name_plural = "Project Images"
        ordering = ['order']

    def save(self, *args, **kwargs):
        # Process the image before saving to WebP format
        if self.image:
            # Open the image file
            img = Image.open(self.image)

            max_size = 1200
            if img.width > max_size or img.height > max_size:
                img.thumbnail((max_size, max_size))
            
            # Convert the image to WebP format in memory
            webp_image = BytesIO()
            img.save(webp_image, format='WebP', quality=80)  # You can adjust quality here
            
            # Save the WebP image to a File-like object and attach it to the image field
            webp_image.seek(0)
            self.image = File(webp_image, name=f"{self.image.name.split('.')[0]}.webp")
        
        # Now save the model instance
        super(ProjectImage, self).save(*args, **kwargs)

    def __str__(self):
        return f"Image for {self.project.title}"

    


