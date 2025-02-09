def decypher(text,shift):
    decrypt = []
    try:
        shift = int(shift)
        if shift>=1 and shift<=25:
            for i in text:
                if i.isalpha():
                    if i.isupper():
                         decrypt.append(chr((ord(i)-ord('A')-shift)%26 + ord('A')))
                    if i.islower():     
                         decrypt.append(chr((ord(i)-ord('a')-shift)%26 + ord('a')))
                else:
                    decrypt.append(i)
        else:
            return -1 #Invalid range of numbers
    except ValueError:
        return -2 #Invalid input, not a number
    return decrypt
if __name__ == "__main__":
     print("".join(decypher("Ifmmp Xpsme!",1))) #Expected result 'Hello World!'