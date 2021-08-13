# Import needed libraries
import pymongo
from bson.objectid import ObjectId

class UserMongo:
    def __init__(self):
        pass

    @staticmethod
    def credential():
        client = pymongo.MongoClient(
            f"mongodb+srv://admin:admin@admin.7iagg.mongodb.net/ComputerAccessories?ssl=true&ssl_cert_reqs=CERT_NONE")
        dataBase = client["ComputerAccessories"]
        return dataBase

    @staticmethod
    def add_user(user_details):
        dataBase = UserMongo.credential()
        collection = dataBase["UserDetails"]
        collection.insert_one(user_details)

    @staticmethod
    def check_user_existence(mail):
        dataBase = UserMongo.credential()
        collection = dataBase["UserDetails"]
        for i in enumerate(collection.find({"email": mail})):
            return 0
        return 1