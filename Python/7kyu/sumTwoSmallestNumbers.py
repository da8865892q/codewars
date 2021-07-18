# Sum of two lowest positive integers
# https://www.codewars.com/kata/558fc85d8fd1938afb000014

# My code
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

# Best code
# def sum_two_smallest_numbers(numbers):
#     return sum(sorted(numbers)[:2])