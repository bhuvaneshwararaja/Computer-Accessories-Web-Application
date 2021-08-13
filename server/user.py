# Import needed libraries
import flask
from flask import jsonify
from user_mongo import UserMongo
from random import randint
import smtplib

class User:
    def __init__(self):
        pass

    @staticmethod
    def sign_up():
        try:
            userDetails = flask.request.json
            print(userDetails)
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during user signup"})

        try:
            UserMongo.add_user(userDetails['newUser'])
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in mongo user signup creation"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success"})

    @staticmethod
    def email_verification():
        try:
            mailVerify = flask.request.json
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error in json object receive during email verification"})

        otp = randint(100000, 999999)
        try:
            text = f"Hi {mailVerify['emailVerify']['name']},\n\nYour OTP is {otp}.\nValid only for 5 minutes.\n\nWith Love,\ncKart Team"
            subject = "cKart Email Verification - reg"
            message = 'Subject: {}\n\n{}'.format(subject, text)
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login("lovebreaker007@gmail.com", "loveandsex")
            server.sendmail("lovebreaker007@gmail.com", mailVerify['emailVerify']['email'], message)
        except:
            return jsonify({"ReplyCode": "0", "ReplyMessage": "Error. Email verification failed"})

        return jsonify({"ReplyCode": "1", "ReplyMessage": "Success", "otp": otp})

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