import re
with open("input.txt", "r") as file:
    contents = file.read()

arr = re.split(r'\r?\n',contents)
count = 0

for i in range(3,len(arr)):
    if (int(arr[i]) + int(arr[i-1]) + int(arr[i-2])) > (int(arr[i-1]) + int(arr[i-2]) + int(arr[i-3])):
         count+=1

print(count)
