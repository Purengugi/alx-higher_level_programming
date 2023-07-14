#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for m in range(len(matrix)):
        for x in range(len(matrix[m])):
            if x != 0:
                print(" ", end='')
            print("{:d}".format(matrix[m][x]), end='')
        print()
