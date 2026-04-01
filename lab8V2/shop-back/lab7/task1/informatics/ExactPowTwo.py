N = int(input())
i = 0
while i < N:
    if 2 ** i == N:
        print("YES")
        break
    i += 1
else:
    print("NO")