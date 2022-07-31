from flask import (
    Flask, render_template
)

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # index page
    @app.route('/', methods=('GET', 'POST'))
    def index():
        return render_template('game.html')

    return app
