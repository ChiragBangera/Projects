travel_mode = {"1": "Car", "2": "Plane"}

items = {
    "can opener",
    "jumper",
    "knife",
    "matches",
    "razor blade",
    "razor",
    "scissors",
    "shampoo",
    "shaving cream",
    "shirts (3)",
    "shorts",
    "sleeping bag(s)",
    "soap",
    "socks",
    "stove",
    "tent",
    "mug",
    "toothbrush",
    "towel",
    "underwear",
    "water carrier",
}

restricted_items = {
    "catapult",
    "fuel",
    "gun",
    "knife",
    "razor blade",
    "scissors",
    "shampoo",
}

print("Please choose your mode of travel: ")
for key, value in travel_mode.items():
    print("{0}: {1}".format(key, value))

mode = "-"
while mode not in travel_mode:
    mode = input("----->>> ")

if mode == "2":
    for thing in restricted_items:
        items.discard(thing)



print("For your trip you need to pack:")
for things in items:
    print(things)
