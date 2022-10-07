
class MyStringList:
    def __init__(self):
        self.list = []

    def add(self, word):
        self.list.append(word)
        return f'{word} has been added'

    def findInList(self, word):
        foundString = self.list.index(word)
        return f'{word} was found at index {foundString}'
    def getList(self):
        return self.list
