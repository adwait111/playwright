# logical operator 
# and 

#  true   and   true    -------> true 
#  false  and   true    -------> false
#  true   and   false   -------->false
#  false  and   false   -------->false

print(5 == 5  and 6 == 6 )
print(6 != 6 and 5 == 5 )
print(4 == 4 and 6 == 7)
print(7 == 8 and 9 == 7 )
# or
# true    or    true   ===> true
# false   or    true   ===> true 
# true    or    false  ===> true 
# false   or    false  ===> false

print(6 == 6 or 8 == 8)
print(7 == 7 or 9 == 8)
print(7 != 7 or 8 == 8)
print(9 == 7 or 9 == 6 )

# not operator

# not True  ----> False
# not False ----> True
print(not 7 == 7)
print(not 8 == 8)
print(not 7 == 6)

# conditional statements 

# one and multiple outcomes
# numT > 0 and numT <= 5  --- 10 % discount
# numT > 5 and numT <= 10 --- 20 % discount
# numT > 10               --- 30 % discount

# if condition:
#     statements

# program 1
#  cheak all condition if first cond is true
numT = 5

if numT > 0 and numT <= 5:
    print("10 % discount")
if numT > 5 and numT <= 10:
    print("20 % discount")
if numT > 10:
    print("30 % discount")

# program 2
# if first condition is true so do not cheack next condition 
numT2 =  5
if numT2 >= 0 and numT2 <= 5:
    print("5 % discount")
elif numT2 > 5 and numT2 <= 10:
    print("10 % discount")
elif numT2 > 10:
    print("20 % discounr")
else:
    print("incorrect input")

# program 3
# if first condition is true so  cheack next condition 
marks = 92
if marks > 90:
    print("Grade A")
if marks >= 75:
    print("Grade B")
if marks >= 65:
    print("Grade C")

# program 4
    # if condition is true so do not cheack next condition 
if marks > 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 65:
    print("Grade C")
else:
    print("try again ...!")

# program 5 
a = 10 
b = 50

if a > b:
    print("a is greater")
else:
    print("b is greater")

# program 6 
    
x1 = 10
x2 = 50
x3 = 56

if x1 > x2 and x1 > x3:
    print("x1 is greater")
elif x2 > x1 and x2 > x3:
    print("x2 is greater")
else:
    print("x3 is greater")