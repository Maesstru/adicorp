
from ..repo import DBRepo

class Service:

    @staticmethod
    def get_all():
        return DBRepo.get_all()
    
    @staticmethod
    def find_by_id(id: int):
        return DBRepo.find_by_id(id)