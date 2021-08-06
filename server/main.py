# Import needed libraries
import flask
from flask import Flask, render_template, jsonify
from flask_restful import Api, Resource
import pymongo
from bson.objectid import ObjectId

app = Flask(__name__)
api = Api(app)
@app.route('/test', methods=['GET'])  # Method for testing purpose
def test():
    working = "yes"
    return render_template('./Admin/dashboard.html', working=working)

class AdminMongo:
    def __init__(self):
        pass
    
    @staticmethod
    def credential():
        (USER_NAME, PASSWORD, DB_NAME) = ("admin", "admin", "ComputerAccessories")  # Credentials for mongodb atlas connection with database name
        CONNECTION_URL = f"mongodb+srv://{USER_NAME}:{PASSWORD}@admin.7iagg.mongodb.net/{DB_NAME}?ssl=true&ssl_cert_reqs=CERT_NONE"
        client = pymongo.MongoClient(CONNECTION_URL)  # Establish connection with mongodb server
        dataBase = client[DB_NAME]  # Create DB / Use existing database
        return dataBase
    
    @staticmethod
    def create_collection(product_details):
        dataBase = AdminMongo.credential()
        collection = dataBase["Products"]
        collection.insert_one(product_details)

    @staticmethod
    def view_collections():
        products = {}
        dataBase = AdminMongo.credential()
        for category in dataBase.list_collection_names():
            products[category] = {}
            for product in enumerate(dataBase[category].find({})):
                products[category][str(product[1].pop('_id'))] = product[1]
        return products

    @staticmethod
    def remove_collection(product_ids):
        dataBase = AdminMongo.credential()
        collection = dataBase["Products"]
        for ids in product_ids:
            collection.delete_one({"_id": ObjectId(ids)})

class Admin(Resource):
    def __init__(self):
        pass

    @staticmethod
    def add_product():
        try:
            product = flask.request.json
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during add product"})

        try:
            AdminMongo.create_collection(product['test'])
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo collection creation"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})

    @staticmethod
    def view_product():
        try:
            product = AdminMongo.view_collections()
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo collection retrieval"})

        return jsonify(product)

    @staticmethod
    def remove_product():
        try:
            product = flask.request.json
            print(product)
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during delete product"})

        try:
            AdminMongo.remove_collection(product['test']['productId'])
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo collection deletion"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})



class User(Resource):
    def __init__(self):
        pass


app.add_url_rule('/admin/add/', view_func=Admin.add_product, methods=['POST'])
app.add_url_rule('/admin/view/', view_func=Admin.view_product, methods=['GET'])
app.add_url_rule('/admin/remove/', view_func=Admin.remove_product, methods=['POST'])


if __name__ == '__main__':
    app.run(debug=True)