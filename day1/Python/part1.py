import re
with open("input.txt", "r") as file:
    contents = file.read()

arr = re.split(r'\r?\n',contents)
counter = 0
for i,val in enumerate(arr):
    if i == 0 or val > arr[i-1]:
        counter+=1
print(counter)