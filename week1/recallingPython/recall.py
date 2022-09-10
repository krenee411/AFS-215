class Datatypes():
    def __init__(self):
        self.types = []

    def add(self, type):
        self.types.append(type)

    def addNum(self, num):
        self.add(num)

    def addString(self,string):
        self.add(string)

    def addDict(self, dict):
        self.add(dict)

    def addtuple(self, tup):
        self.add(tuple(tup))
    
    def getDatatypes(self):
        return self.types


printTypes = Datatypes() 

printTypes.addNum(5)
printTypes.addString("Hello")
printTypes.addDict(['a','b', 1, 2 ])
printTypes.addtuple("World")

print(printTypes.getDatatypes())
