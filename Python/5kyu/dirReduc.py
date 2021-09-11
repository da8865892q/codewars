# Directions Reduction
# https://www.codewars.com/kata/550f22f4d758534c1100025a

# My code
def dirReduc(arr):
    def check(arr):
        for i in range(len(arr)-1):
            if (arr[i]=='NORTH' and arr[i+1]=='SOUTH' or
                arr[i]=='SOUTH' and arr[i+1]=='NORTH' or
                arr[i]=='EAST' and arr[i+1]=='WEST' or
                arr[i]=='WEST' and arr[i+1]=='EAST'):
                return check(arr[0:i]+arr[i+2:])
        return(arr)
    return check(arr)

# Best code
# def dirReduc(arr):
#     dir = " ".join(arr)
#     dir2 = dir.replace("NORTH SOUTH",'').replace("SOUTH NORTH",'').replace("EAST WEST",'').replace("WEST EAST",'')
#     dir3 = dir2.split()
#     return dirReduc(dir3) if len(dir3) < len(arr) else dir3