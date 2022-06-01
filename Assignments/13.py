#Part A
myList=[1,2,3,4,"Hello"]

myList2 = [None]* 4
for i in range(1, len(myList)):

    myList2[i-1] = myList[i]

print(myList2)

myList2.append("new Item")
print(myList2)

myList2.pop(2)

print(myList2)


#Part B
isalpha()  #checks to see if all characters are letters
isdigit()  #checks to see if all characters are numbers
islower()  #checks to see if all characters are lowercase
isspace()  #checks for spaces
istitle()  #checks for title
isupper()  #checks to see if all characters are uppercase
join()     #takes all items in iterable and joins into one string
lower()    #returns lowercased string from given string

replace(old,new[,count])             #replaces value in an array
split([sep[,maxsplit]])              #split string into list where each word is list item
splitlines([keepends])               #splits characters at line breaks
startswith(prefix[,start[,end]])     #returns start of array
strip([chars])                       #removes spaces at beginning and end of string
upper()                              #returns string with all uppercase characters
