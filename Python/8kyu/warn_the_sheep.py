# A wolf in sheep's clothing
# https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

# My code
def warn_the_sheep(queue):
    position = len(queue)-(queue.index('wolf')+1)
    return 'Pls go away and stop eating my sheep' if (position == 0) else 'Oi! Sheep number %d! You are about to be eaten by a wolf!'%position

# Best code
# def warn_the_sheep(queue):
#     n = len(queue) - queue.index('wolf') - 1
#     return f'Oi! Sheep number {n}! You are about to be eaten by a wolf!' if n else 'Pls go away and stop eating my sheep'