# def kata():
#     userInput = input("Please enter a number between 1 and 5:  ")
#     makeNum = int(userInput)
#     if makeNum == 1:
#         return 1
#     elif makeNum == 2:
#         return 2
#     elif makeNum == 3:
#         return "Pepsi"
#     elif makeNum == 4:
#         return
#     elif makeNum == 5:
#         return "Coke"


# print(kata()):



def kata1():
    userInput = input("Please choose ONE of the following numbers [1,2,3,5,6,10,15]: ")
    makeNum = int(userInput)
    if makeNum == 1:
        return 1
    elif makeNum == 2:
        return 2
    elif makeNum % 3 == 0 and not makeNum % 5 == 0:
        return "Pepsi"
    elif makeNum % 5 == 0 and not makeNum % 3 == 0:
        return "Coke"
    elif makeNum % 3 ==0 and makeNum % 5 == 0 :
        return "PepsiCoke"

print(kata1())
