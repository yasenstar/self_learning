class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 26)
print(person.name, 'is', person.age, "years old.")