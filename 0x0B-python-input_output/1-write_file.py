#!/usr/bin/python3
"""
Module calls write_file function to write to a
text file.
"""


def write_file(filename="", text=""):
    """
    Writes a string to a text file (UTF8)
    and returns the number of characters written:
    """
    with open(filename, 'w') as f:
        f.write(text)
        num_chars = len(text)
        return num_chars
