availabble_parts = {
	'1' : "Computer Case",
	'2' : "Monitor",
	'3' : "Keyboard",
	'4' : "HDMI Cable",
	'5' : "Speakers",
	'6' : "Hard Drive",
}
cart = []
current_choice = None

while current_choice != "0":
	if current_choice in availabble_parts:
		chosen_part = availabble_parts[current_choice]
		if chosen_part in cart:
			cart.remove(chosen_part)
			print("Removing {0}".format(chosen_part))

		else:
			print("Adding {0}".format(chosen_part))
			cart.append(chosen_part)
		print("----------------")
		for index,item in enumerate(cart):
			index += 1
			print(index,item)
		print("----------------")
	else:
		print("Please select from options Shown below")
		for key,value in availabble_parts.items():
			print(key,value, sep=", ")
	
	current_choice = input("Select a part you want add to your cart: ")

print("----------------")
if len(cart) > 0:
	for i in sorted(cart):
		print(" {} ".format(i))
else:
	print("Your Cart is empty :(")
print("----------------")
	