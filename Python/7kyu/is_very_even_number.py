# "Very Even" Numbers.
# https://www.codewars.com/kata/58c9322bedb4235468000019

# My code
def is_very_even_number(n):
    return True if n == 0 else -n % 9 % 2 == 1

# Best code
# def is_very_even_number(n):
#     return n == 0 or (n - 1) % 9 % 2