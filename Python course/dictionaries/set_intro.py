# # farm_animals = {"Sheep", "Hen", "Cow", "Goat", "Horse"}

# # print(farm_animals)
# # for animal in farm_animals:
# #     print(animal)

# numbers = set()
# print(numbers, type(numbers))

smal_ints = set(range(22))
print(smal_ints)

smal_ints.discard(10)
smal_ints.remove(12)
print(smal_ints)

smal_ints.discard(90)
print(smal_ints)

smal_ints.remove(99)
print(smal_ints)