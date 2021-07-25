# Simple Pig Latin
# https://www.codewars.com/kata/520b9d2ad5c005041100000f

# My code
import re
def pig_it(text):
    s = ''
    for i in text.split():
        s += i[1:] + i[0] + 'ay ' if re.match('[a-z,A-Z]', i) else i + ' '
    return s[:-1]

# Best code
# def pig_it(text):
#     lst = text.split()
#     return ' '.join( [word[1:] + word[:1] + 'ay' if word.isalpha() else word for word in lst])