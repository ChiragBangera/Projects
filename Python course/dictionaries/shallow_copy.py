data = [
    ("apple", "Very sweet and juicy"),
    ("orange", "Sometimes very sweet and sometimes very sour"),
    ("banana", "you peel off and eat"),
]


keys = [""] * 10
values = keys.copy()

def hash_creater(k: str):
    h = ord(k[0])
    return h % 10

def get_value(s:str):
    create_key = hash_creater(s)
    if values[create_key]:
        return values[create_key]
    else:
        return None


for key, value in data:
    hash_key = hash_creater(key)
    print(key, hash_key)
    keys[hash_key] = key
    values[hash_key] = value

new = get_value("orange")
print(new)

