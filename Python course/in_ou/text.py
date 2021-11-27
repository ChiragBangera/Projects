# with open('sample1.txt', 'r') as samp:
# 	# for line in samp:
# 	# 	print(line, end = '')
# 	lines = samp.readlines()

# print(lines)

file_name = "country_info.txt"

with open(file_name) as country:
	lines = country.readlines()
	print(lines, end = '')