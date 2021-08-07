# Import needed libraries
import flask
from flask import Flask, jsonify
from flask_restful import Api, Resource
import pymongo
from bson.objectid import ObjectId

app = Flask(__name__)
api = Api(app)

class AdminMongo:
    def __init__(self):
        pass
    
    @staticmethod
    def credential():
        client = pymongo.MongoClient(f"mongodb+srv://admin:admin@admin.7iagg.mongodb.net/ComputerAccessories?ssl=true&ssl_cert_reqs=CERT_NONE")
        dataBase = client["ComputerAccessories"]
        return dataBase
    
    @staticmethod
    def create_record(product_details):
        dataBase = AdminMongo.credential()
        collection = dataBase["Products"]
        collection.insert_one(product_details)

    @staticmethod
    def view_records():
        products = {'products': {}}
        dataBase = AdminMongo.credential()
        for product in enumerate(dataBase["Products"].find({})):
            products["products"][str(product[1].pop('_id'))] = product[1]
        return products

    @staticmethod
    def remove_records(product_ids):
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
            AdminMongo.create_record(product['test'])
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo data insertion"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})

    @staticmethod
    def view_product():
        try:
            product = AdminMongo.view_records()
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo data retrieval"})

        return jsonify(product)

    @staticmethod
    def remove_product():
        try:
            product = flask.request.json
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during remove product"})

        try:
            AdminMongo.remove_records(product['test']['productId'])
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo data deletion"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})

class UserMongo(Resource):
    def __init__(self):
        pass

class User(Resource):
    def __init__(self):
        pass

    @staticmethod
    def home_page():
        pass

    @staticmethod
    def sign_up():
        pass

    @staticmethod
    def sign_in():
        pass

    @staticmethod
    def order_products():
        pass

    @staticmethod
    def order_cancel():
        pass

    @staticmethod
    def order_track():
        pass


app.add_url_rule('/admin/add/', view_func=Admin.add_product(), methods=['POST'])
app.add_url_rule('/admin/view/', view_func=Admin.view_product(), methods=['GET'])
app.add_url_rule('/admin/remove/', view_func=Admin.remove_product(), methods=['POST'])

app.add_url_rule('/user/home/', view_func=User.home_page(), methods=['GET'])
app.add_url_rule('/user/signup/', view_func=User.sign_up(), methods=['GET'])
app.add_url_rule('/user/signin/', view_func=User.sign_in(), methods=['GET'])
app.add_url_rule('/user/order/', view_func=User.order_products(), methods=['GET'])
app.add_url_rule('/user/cancel/', view_func=User.order_cancel(), methods=['GET'])
app.add_url_rule('/user/track/', view_func=User.order_track(), methods=['GET'])


if __name__ == '__main__':
    app.run(debug=True)