# Detect Pangram
# https://www.codewars.com/kata/545cedaa9943f7fe7b000048

# My code
def is_pangram(s):
    char = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ')
    for i in char:
        if (i not in s.lower()): return False
    return True

# Best code
# import string
# def is_pangram(s):
#     return set(string.lowercase) <= set(s.lower())