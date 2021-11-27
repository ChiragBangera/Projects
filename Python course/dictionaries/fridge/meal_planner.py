from smart_fridge import pantry, recipes



# Storing the recipes in a dictionary with numbers enumerate
display_dict = {}
for index,key in enumerate(recipes):
    display_dict[str(index + 1)] = key

def storage(data: dict, item: str, quant: int):
    # if item in data:
    #     data[item] += quant
    # else:
    #     data[item] = quant
    data[item] = data.setdefault(item, 0) + quant

shopping_list = {}

while True:
    #displaying the menu of recipes we know how to cook
    print("Please choose a recipe")
    print("------------------------")
    for key, value in display_dict.items():
        print(key, value)
    choice = input("Enter your selection here: ")

    if choice == "0":
        break

    elif choice in display_dict:
        selected_item = display_dict[choice]
        print("You have selected {}".format(selected_item))
        print("These are the ingredients for {}".format(selected_item))
        meal_ingredients = recipes[selected_item]
        print(*meal_ingredients, sep=", ")
        
        for food_item, req_quant in meal_ingredients.items():
            quantity_available = pantry.get(food_item, 0)
            if req_quant <= quantity_available:
                print("{} Yes".format(food_item))
            else:
                to_buy = req_quant - quantity_available
                print("You need to buy {0} of {1}".format(to_buy, food_item))
                storage(shopping_list, food_item, to_buy)
            
for things in shopping_list.items():
    print(things)






