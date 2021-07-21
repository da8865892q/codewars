# Baby shark lyrics generator
# https://www.codewars.com/kata/5d076515e102162ac0dc514e

# My code
def baby_shark_lyrics():
    member = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"]
    str = ''
    for i in member:
        str += (i + ',' + ' doo' * 6 + '\n') * 3 + i + '!\n'
    return str+'Run away,…'

# Best code
# def baby_shark_lyrics():
#     a = [f"{w} shark" for w in "Baby Mommy Daddy Grandma Grandpa".split()] + ["Let's go hunt"]
#     b = [f"{s},{' doo' * 6}\n" * 3 + f"{s}!\n" for s in a]
#     return "".join(b) + "Run away,…"