# Import needed libraries
from flask import Flask, render_template
from flask_restful import Api, Resource
import pymongo

app = Flask(__name__)
api = Api(app)
@app.route('/test', methods=['GET'])  # Method for testing purpose
def test():
    working = "yes"
    return render_template('./Admin/dashboard.html', working=working)

class AdminMongo:
    def __init__(self):
        pass

    # mongodb+srv://admin:<password>@admin.7iagg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    
    @staticmethod
    def credential():
        (USER_NAME, PASSWORD, DB_NAME) = ("admin", "admin", "Products")  # Credentials for mongodb atlas connection with database name
        CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@admin.7iagg.mongodb.net/{DB_NAME}?ssl=true&ssl_cert_reqs=CERT_NONE"
        client = pymongo.MongoClient(CONNECTION_URL)  # Establish connection with mongodb server
        dataBase = client[DB_NAME]  # Create DB / Use existing database
        return dataBase
    
    @staticmethod
    def create_collection(product_name, product_details):
        dataBase = AdminMongo.credential()
        collection = dataBase[product_name]
        collection.insert_one(product_details)


class Admin(Resource):
    def __init__(self):
        pass

    @staticmethod
    def add_product(product):
        temp = eval(product)
        AdminMongo.create_collection(temp['name'], temp)
        return {"ReplyMessage": "Product added successfully"}

class User(Resource):
    def __init__(self):
        pass


app.add_url_rule('/admin/add', view_func=Admin.add_product, methods=['POST'])

if __name__ == '__main__':
    app.run(debug=True)