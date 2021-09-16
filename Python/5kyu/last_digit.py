# Last digit of a large number
# https://www.codewars.com/kata/5511b2f550906349a70004e1

# My code
def last_digit(n1, n2):
    return 1 if n2 == 0 else ((n1%10)**((n2%4)+4))%10

# Best code
# def last_digit(n1, n2):
#     return pow( n1, n2, 10 )