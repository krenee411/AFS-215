import pytest

from MyClass import MyStringList

# def testCanAddSting():
#     strings = MyStringList()
#     assert strings.add('Hello') == "Hello has been added"
#
# def testCanLookForString():
#     strings = MyStringList()
#     strings.add('Hello')
#     assert strings.findInList('Hello') == 'Hello was found at index 0'
#
# def testCanGetList():
#     strings = MyStringList()
#     strings.add('Hello')
#     strings.add('World')
#     strings.add('String')
#     assert strings.getList() == ['Hello', 'World', 'String']


@pytest.fixture
def strings():
    strings = MyStringList()
    strings.add("Hello")
    strings.add('World')
    strings.add('String')
    return strings


def testCanAddSting(strings):
    assert strings.add('Hello') == "Hello has been added"


def testCanLookForString(strings):
    assert strings.findInList('Hello') == 'Hello was found at index 0'


def testCanGetList(strings):
    assert strings.getList() == ['Hello', 'World', 'String']