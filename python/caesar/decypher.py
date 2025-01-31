def decypher(text,shift):
    encrypt = []
    alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    try:
        shift = int(shift)
        if shift>=1 and shift<=25:
            for i in text:
                if i.isalpha():
                    if ((chr(ord(i)-shift)).lower() in alpha) and (i.islower()==chr(ord(i)-shift).islower() or i.isupper()==chr(ord(i)-shift).isupper()):
                        encrypt.append(chr(ord(i)-shift))
                    else:
                        if i.islower():
                            if chr((ord('z') - shift + (ord(i)-ord('a')))+1).isalpha():
                                encrypt.append(chr((ord('z') - shift + (ord(i)-ord('a'))+1)))
                        if i.isupper():
                            if chr((ord('Z') - shift + (ord(i)-ord('A')))+1).isalpha():
                                encrypt.append(chr((ord('Z') - shift + (ord(i)-ord('A'))+1)))
                else:
                    encrypt.append(i)
        else:
            return -1 #Invalid range of numbers
    except ValueError:
        return -2 #Invalid input, not a number
    return encrypt

if __name__ == "__main__":
     print("".join(decypher("Ifmmp Xpsme!",1))) #Expected result 'Hello World!'