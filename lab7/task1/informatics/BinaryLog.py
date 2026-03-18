N = int(input())
i = 0
while i <= N:
    if 2 ** i >= N:
        print(i)
        break
    i+= 1
    