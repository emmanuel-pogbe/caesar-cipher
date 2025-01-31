# The Caesar Cypher
from caesar import cypher
from caesar import decypher
option = 'e'
option = input("Do you want to encrypt or decrypt (default is encrypt) (e,d): ")
if option.strip().lower() != 'e' and option.strip().lower() != 'd':
    option = 'e'
text = input("Enter a string of text: ")
shift = input("Enter a shift value between 1 and 25: ")
if option.lower() == 'e':
    result = cypher.cypher(text,shift)
elif option.lower() == 'd':
    result = decypher.decypher(text,shift)
if result == -1:
        print("Invalid range of numbers, input between 1 and 25")
elif result == -2:
        print("You were supposed to input a number!")
else:
        print("".join(result))