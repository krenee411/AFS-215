# def testFizzBuzzFunction():
#     fizzbuzz()
#


from PepsiCoke import fizzbuzz

def test1():
    assert fizzbuzz(1) == "1"

def test2():
    assert fizzbuzz(2) == "2"

def test3():
    assert fizzbuzz(3) == "Pepsi"

def test5():
    assert fizzbuzz(5) == "Coke"

def test6():
    assert fizzbuzz(6) == "Pepsi"

def test10():
    assert fizzbuzz(10) == "Coke"

def test15():
    fizzbuzz(15) == "PepsiCoke"