
class MyTodoList:
    def __init__(self):
        self.list = []
        self.length = 0

    def getList(self):
        return self.list

    def add(self, word):
        self.list.append(word)
        self.length+1
        return f'{word} has been added'

    def addMulti(self, words):
        self.list.extend(words)
        self.length+1
        return self.list

    def removeFirst(self):
        del self.list[0]
        self.length-1
        return self.list

    def removeLast(self):
        del self.list[-1]
        self.length-1
        return self.list

    def removeSpecific(self, word):
        found = self.list.index(word)
        del self.list[found]
        self.length-1
        return self.list
