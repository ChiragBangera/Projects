import hashlib

python_program = """for i in range(10):
print(i)"""

print(python_program)

original_hash = hashlib.sha256(python_program.encode("utf8"))
print("SHA256: {}".format(original_hash.hexdigest()))

