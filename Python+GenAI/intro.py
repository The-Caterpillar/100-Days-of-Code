# Intro to python class
# if-elis-else
# string manipulation, string slicing
# args

# Exercise: import a csv file into your python code for scores of 50 people.
# Calculate all their grades using a grade method and print them.

print("Hello World")

def grade(score):
    """Return grade based on score"""
    if(score >= 90):
        return 'A'
    elif(score>=80):
        return 'B'
    elif score>=70:
        return 'C'
    elif score>=60:
        return 'D'
    else:
        return 'F'

grade = grade(90)
print("The grade is: ",grade)