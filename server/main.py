# Import needed libraries
import flask
from flask import Flask, jsonify
from flask_restful import Api, Resource
import pymongo
from bson.objectid import ObjectId
from admin import Admin

app = Flask(__name__)
api = Api(app)

class UserMongo(Resource):
    def __init__(self):
        pass

class User(Resource):
    def __init__(self):
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


app.add_url_rule('/admin/add/', view_func=Admin.add_product, methods=['POST'])
app.add_url_rule('/admin/view/', view_func=Admin.view_product, methods=['GET'])
app.add_url_rule('/admin/remove/', view_func=Admin.remove_product, methods=['POST'])

app.add_url_rule('/user/signup/', view_func=User.sign_up, methods=['GET'])
app.add_url_rule('/user/signin/', view_func=User.sign_in, methods=['GET'])
app.add_url_rule('/user/order/', view_func=User.order_products, methods=['GET'])
app.add_url_rule('/user/cancel/', view_func=User.order_cancel, methods=['GET'])
app.add_url_rule('/user/track/', view_func=User.order_track, methods=['GET'])


if __name__ == '__main__':
    app.run(debug=True)