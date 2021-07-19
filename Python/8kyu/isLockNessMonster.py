# A Strange Trip to the Market
# https://www.codewars.com/kata/55ccdf1512938ce3ac000056

# My code
def is_lock_ness_monster(string):
    return ("3.50" in string or "tree fiddy" in string or "three fifty" in string)

# Best code
# def is_lock_ness_monster(s):
#     return any(i in s for i in ('tree fiddy', 'three fifty', '3.50'))