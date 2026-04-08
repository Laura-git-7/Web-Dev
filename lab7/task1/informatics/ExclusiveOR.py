def Xor(x,y):
    return x != y
x, y = map(int, input().split())
print(int(Xor(bool(x),bool(y))))