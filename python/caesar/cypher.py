def cypher(text,shift):
    encrypt = []
    try:
            shift = int(shift)
            if shift>=1 and shift<=25:
                for i in text:
                    if i.isalpha():
                        if i.isupper():
                            encrypt.append(chr((ord(i) - ord('A') + shift)%26 + ord('A')))
                        if i.islower():
                             encrypt.append(chr((ord(i) -ord('a')+ shift)%26 + ord('a')))
                    else:
                        encrypt.append(i)
                return encrypt
            else:
                return -1 #Invalid range of numbers
    except ValueError:
            return -2 #Invalid input, not a number
if __name__ == "__main__":
     print("".join(cypher("Hello World!",1))) #Expected result 'Ifmmp Xpsme!'
