from flask import Flask,render_template

app = Flask(__name__)
@app.route('/test',methods=['GET']) #This is for testing purpose 
def Test():
    return render_template('./Admin/dashborad.ejs');

if __name__ == '__main__':
    app.run();