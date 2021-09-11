# Greed is Good
# https://www.codewars.com/kata/5270d0d18625160ada0000e4

# My code
def score(dice):
    sum = 0
    dc = [0,0,0,0,0,0]
    tdr = [1000,200,300,400,500,600]
    sdr = [100,0,0,0,50,0]
    for i in range(5):
        dc[dice[i]-1] += 1
    for j in range (6):
        sum += (tdr[j] if dc[j] >= 3 else 0) + sdr[j] * (dc[j] % 3)
    return sum

# Best code
# def score(dice): 
#     sum = 0
#     counter = [0,0,0,0,0,0]
#     points = [1000, 200, 300, 400, 500, 600]
#     extra = [100,0,0,0,50,0]
#     for die in dice: 
#         counter[die-1] += 1
#     for (i, count) in enumerate(counter):
#         sum += (points[i] if count >= 3 else 0) + extra[i] * (count%3)
#     return sum 