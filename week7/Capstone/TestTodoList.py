import pytest

from todoList import MyTodoList


# def testCanGetList():
#     item = MyTodoList()
#     item.add('Hello')
#     item.add(1)
#     item.add({"Name": "Kelci"})
#     item.add(True)
#     assert item.getList() == ['Hello', 1, {"Name": "Kelci"}, True]
#
# def testCanAddToList():
#     item = MyTodoList()
#     assert item.add('Jump') == "Jump has been added"
#
# def testCanAddMultiItemToList():
#     item = MyTodoList()
#     item.add('Hello')
#     item.add(1)
#     item.add({"Name": "Kelci"})
#     item.add(True)
#     assert item.addMulti([False, 2, "Dragon"]) == ['Hello', 1, {"Name": "Kelci"}, True, False, 2, "Dragon"]
#
#
# def testCanRemoveFirstFromList():
#     item = MyTodoList()
#     item.add('Hello')
#     item.add(1)
#     item.add({"Name": "Kelci"})
#     item.add(True)
#     assert item.removeFirst() == [1, {"Name": "Kelci"}, True]
#
#
# def testCanRemoveLastFromList():
#     item = MyTodoList()
#     item.add('Hello')
#     item.add(1)
#     item.add({"Name": "Kelci"})
#     item.add(True)
#     assert item.removeLast() == ["Hello", 1, {"Name": "Kelci"}]
#
#
# def testCanRemoveSpecificWordFromList():
#     item = MyTodoList()
#     item.add('Hello')
#     item.add(1)
#     item.add({"Name": "Kelci"})
#     item.add(True)
#     assert item.removeSpecific({"Name": "Kelci"}) == ["Hello", 1, True]
#

@pytest.fixture
def item():
    item = MyTodoList()
    item.add('Hello')
    item.add(1)
    item.add({"Name": "Kelci"})
    item.add(True)
    return item


def testCanGetList(item):
    assert item.getList() == ['Hello', 1, {"Name": "Kelci"}, True]


def testCanAddToList(item):
    assert item.add('Jump') == "Jump has been added"


def testCanAddMultiItemToList(item):
    assert item.addMulti([False, 2, "Dragon"]) == ['Hello', 1, {"Name": "Kelci"}, True, False, 2, "Dragon"]


def testCanRemoveFirstFromList(item):
    assert item.removeFirst() == [1, {"Name": "Kelci"}, True]


def testCanRemoveLastFromList(item):
    assert item.removeLast() == ["Hello", 1, {"Name": "Kelci"}]


def testCanRemoveSpecificWordFromList(item):
    assert item.removeSpecific({"Name": "Kelci"}) == ["Hello", 1, True]

