# Import needed libraries
import flask
from flask import jsonify
from user_mongo import UserMongo

class User:
    def __init__(self):
        pass

    @staticmethod
    def sign_up():
        try:
            userDetails = flask.request.json
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during user signup"})

        try:
            UserMongo.add_user(userDetails['newUser'])
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo user signup creation"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})

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