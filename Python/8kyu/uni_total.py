# ASCII Total
# https://www.codewars.com/kata/572b6b2772a38bc1e700007a

# My code
def uni_total(s):
    sum = 0
    for i in range (len(s)):
        sum = sum + ord(s[i])
    return sum

# Best code
# def uni_total(string):
#     return sum(map(ord, string))