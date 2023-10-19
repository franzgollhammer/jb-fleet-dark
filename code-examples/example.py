# Function Definition
def add(a, b):
    """
    Add two numbers together
    :param a: The first number to add
    :param b: The second number to add
    :return: The sum of the two numbers
    """
    return a + b


# Variables
message = "Hello, World!"
count = 10


# Class Definition
class Person:
    def __init__(self, name, age):
        """
        Initialize the Person object
        :param name: The name of the person
        :param age: The age of the person
        """
        self.name = name
        self.age = age

    def greet(self):
        """
        Greet from the person
        """
        print(f"{self.name} says Hello!")


# Creating an object and calling a method
person = Person("Alice", 30)
person.greet()


# F-String (formatted string literal)
greeting = f"My name is {person.name} and I am {person.age} years old."
print(greeting)


# List comprehension
squares = [x**2 for x in range(10)]
print(squares)


# Async Example (Python 3.7 and above)
import asyncio


async def fetchData():
    await asyncio.sleep(2)
    print("Data fetched!")


asyncio.run(fetchData())
