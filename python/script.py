x = 10
print(x)
x =100
print(x)

# program 1
# Arithmetic operation 
# addition - +
# Substraction - -
# Multiplication - *
# Division - /
# Reminder - %

l = 9
t = 3

print(l+t)
print(l-t)
print(l*t)
print(l/t)
print(l%t)

a = 8
b = 4
print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a%b)

def Calculator(x,y):
    print(x+y)
    print(x-y)
    print(x*y)
    print(x/y)
    print(x%y)

Calculator(12,3)
Calculator(12,4)

# program 3
# function without parameter and without return type

def addA():
    print(9+9)
addA()
addA()
addA()
addA()

# function with parameter and without return type
def addB(x,y):
    print(x,y)

addB(12,3)
addB(12,3)
addB(12,3)

# function with parameter and with return 
def addC(x,y):
    return x + y
q = addC(24,5)
print(q)
print(q+q)
print(q*q)




