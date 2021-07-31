from flask import Flask,render_template,jsonify

app = Flask(__name__)
@app.route('/test',methods=['GET']) #This is for testing purpose 
def Test():
    working = "yes"
    return render_template('./Admin/dashborad.html',working=working);

if __name__ == '__main__':
    app.run();