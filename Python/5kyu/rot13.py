# Rot13
# https://www.codewars.com/kata/530e15517bc88ac656000716

# My code
def rot13(message):
    result = ""
    for v in message:
        c = ord(v)
        if v.islower(): c = c + 13 if c < ord('n') else c - 13
        elif v.isupper(): c = c + 13 if c < ord('N') else c - 13
        result += chr(c)
    return result

# Best code
# def rot13(message):
#     abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
#     cba = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
#     mytable = message.maketrans(abc, cba)
#     return message.translate(mytable)