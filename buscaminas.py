# The classic game minesweeper
# Date: 27/12/17
# Author: Dario J. Grinberg

from random import randrange


class Board:
    """
    The game board, configure matrix with mines and numbers
    """
    HEIGHT = 8
    WIDTH = 8
    matrix = [[]]
    AMOUNT_MINES = 20

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


