# #1 Matrices : Making an Alternating Sum
# https://www.codewars.com/kata/5720eb05e8d6c5b24a0014c5

# My code
def score_matrix(matrix):
    score = 0
    for i in range(len(matrix)):
        sumOdd = sum(matrix[i][::2])
        sumEven = sum(matrix[i][1::2])
        score += sumOdd - sumEven if i % 2 == 0 else sumEven - sumOdd
    return score

# Best code
# def score_matrix(matrix):
#     return sum((-1) ** (i+j) * matrix[i][j] for i in range(len(matrix)) for j in range(len(matrix[i])))