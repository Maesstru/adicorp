
from .IRepo import IRepo
from ..models import Project

class DBRepo(IRepo):

    @staticmethod
    def get_all() -> list:
        """
            functie care returneaza toate entitatile
        """
        return Project.objects.all()

    @staticmethod
    def find_by_id(pid: int):
        """
            functie care returneaza un element cu id-ul id, None altfel
        """
        return Project.objects.get(id=pid)
        