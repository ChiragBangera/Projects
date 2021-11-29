input_file_name = "country_info.txt"

countries = {}

with open(input_file_name) as country:
    country.readline()
    for row in country:
        data = row.strip('\n').split('|')
        countryname, capital, code, code3, dialing, timezone, currency = data
        # print(countryname, capital, code, code3, dialing, timezone, currency, sep = '\n\t')
        country_dict = {
            'Country_name': countryname,
            'Capital': capital,
            'country_code': code,
            'cc3': code3,
            'Dialing_code': dialing,
            'Timezone': timezone,
            'Currency': currency,
        }
        # print(country_dict)
        countries[countryname.casefold()] = country_dict

choice = "-"
while choice:
    print("Select a country to know its capital")
    # print(new_country(country_key))
    choice = input("Enter here: ").casefold()
    if choice == "0":
        break
    else:
        if choice in countries:
            data = countries[choice]
            print(data['Capital'])
