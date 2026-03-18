N = int(input())
cnt = 0
for _ in range(N):
    if int(input()) == 0:
        cnt+=1
print(cnt)