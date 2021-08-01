# Import needed libraries
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/test', methods=['GET'])  # This is for testing purpose
def test():
    working = "yes"
    return render_template('./Admin/dashboard.html', working=working)


if __name__ == '__main__':
    app.run()