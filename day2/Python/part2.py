import re
with open("input.txt", "r") as file:
    contents = file.read()
line_array = re.split("\n",contents) 
horizontal = 0
depth = 0
aim = 0
for line in line_array:
    array = re.split(" ",line)
    direction = array[0]
    num = int(array[1])
    if direction == "forward":
        horizontal += num
        depth += aim * num
    elif direction == "down":
        aim += num
    elif direction == "up":
        aim -= num
print(f"Total is {horizontal * depth}")    
