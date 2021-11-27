print("Welcome to GPA calculator")
print("Please enter all your letter up_grades, one per line")
print("Enter a blank line to designate the end")

points = {"A+":4.0, "A":4.0, "A-":3.67, "B+":3.33, "B":3.0, "B-":2.67,
"C+":2.33, "C":2.0, "D+":1.33, "D":1, "F":0.0}

done = False
total_points = 0
total_Cource = 0

while not done:
	grade = input("Enter your grade here: ")
	up_grade = grade.upper()
	if up_grade == "":
		done = True
	elif up_grade not in points:
		print("Unknown entry {0}".format(up_grade))
	else:
		total_Cource += 1
		total_points += points[up_grade]

if total_Cource>0:
	print("Your GPA is {0:.2}".format(total_points/total_Cource))


