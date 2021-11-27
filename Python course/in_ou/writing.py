data = [
    "Andromeda - Shrub",
    "Bellflower - Flower",
    "Daffodil - Flower",
    "Evening Primrose - Flower",
    "French Marigold - Flower",
    "Hydrangea - Shrub",
    "Iris - Flower",
    "Japanese Camellia - Shrub",
    "Lavender - Shrub",
    "Lilac - Shrub",
    "Peony - Shrub",
]

plants_filename = "Plants_text.txt"
# 
# with open(plants_filename, 'w') as plants:
#     for plant in data:
#         print(plant, file=plants)
#
# new_list = []
# with open(plants_filename) as plants:
#     for plant in plants:
#         new_list.append(plant.rstrip())
#
# print(new_list)

with open(plants_filename, 'w') as plants:
    for plant in data:
        plants.write(plant)
