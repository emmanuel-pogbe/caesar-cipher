def cypher(text,shift):
    decrypt = []
    try:
            shift = int(shift)
            if shift>=1 and shift<=25:
                for i in text:
                    if i.isalpha():
                        if chr(ord(i)+shift).isalpha() and (i.islower()==chr(ord(i)+shift).islower() or i.isupper()==chr(ord(i)+shift).isupper()):
                            decrypt.append(chr(ord(i)+shift))
                        else:
                            if i.islower():
                                if chr((ord('a') + shift - (ord('z')-ord(i)))-1).isalpha():
                                    decrypt.append(chr((ord('a') + shift - (ord('z')-ord(i)))-1))
                            if i.isupper():
                                if chr((ord('A') + shift - (ord('Z')-ord(i)))-1).isalpha():
                                    decrypt.append(chr((ord('A') + shift - (ord('Z')-ord(i)))-1))
                    else:
                        decrypt.append(i)
                return decrypt
            else:
                return -1 #Invalid range of numbers
    except ValueError:
            return -2 #Invalid input, not a number
if __name__ == "__main__":
     print("".join(cypher("Hello World!",1))) #Expected result 'Ifmmp Xpsme!'
