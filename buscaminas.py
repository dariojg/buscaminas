# The classic game minesweeper
# Date: 27/12/17
# Author: Dario J. Grinberg

from random import randrange

from flask import Flask
from flask_restful import Resource, Api
from flask.ext.cors import CORS


class Board:
    """
    The game board, configure matrix with mines and numbers
    """
    
    def __init__(self, size=8, amount_mines=20, *args, **kwargs):
        self.HEIGHT = size
        self.WIDTH = size
        self.AMOUNT_MINES = amount_mines
        self.generate_matrix()
        self.load_mines_in_matrix()

    def generate_matrix(self):
        """
        Generate empty matrix, with zeros
        """
        self.matrix = [[0 for x in range(self.HEIGHT)] for y in range(self.WIDTH)]
     
    def load_mines_in_matrix(self):
        """
        load aleatory mines in the matrix , a mine == -1
        """
        for i in range(self.AMOUNT_MINES):
            random_row = randrange(0, self.HEIGHT)
            random_col = randrange(0, self.WIDTH)
            if not self.matrix[random_row][random_col] == -1:  # TODO: if it is already == -1, look for another cell
                self.matrix[random_row][random_col] = -1

    # TODO:
    def load_number_around_mines(self):
        pass


app = Flask(__name__)
CORS(app)
api = Api(app)


class RestBoardDefault(Resource):
    """
    Rest service for load a default game board
    """
    def get(self):
        return {'matrix': Board().matrix}
   

api.add_resource(RestBoardDefault, '/start_buscaminas/')
    
if __name__ == '__main__':
    app.run(port=8000)



