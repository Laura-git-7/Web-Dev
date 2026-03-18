x = input()
reverse=""
for i in range(len(x)-1, -1,-1):
    reverse+=x[i]
print(int(reverse))