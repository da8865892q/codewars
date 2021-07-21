# "Center yourself", says the monk.
# https://www.codewars.com/kata/596b8a3fc4cb1de46b000001

# My code
import math
def center(strng, width, fill=' '):
    if (width <= len(strng)):
        return strng
    else:
        return fill * math.ceil((width - len(strng)) / 2) + strng + fill * math.floor((width - len(strng)) / 2)

# Best code
# def center(string, width, fill=' '):
#     d = max(width - len(string), 0)
#     return fill * ((d + 1) // 2) + string + fill * (d // 2)