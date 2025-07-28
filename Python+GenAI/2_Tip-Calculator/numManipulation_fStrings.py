bmi = 34.122913798242180
print("\nHere:\n")
print(bmi)

print(int(bmi))
print(round(bmi))
print(round(bmi, 2)) # Rounding to 2 decimal places

# f-Strings
print(f"Your BMI is: {bmi}")
print(f"Your BMI rounded to the nearest whole number is: {round(bmi)}")
print(f"Your BMI rounded to 2 decimal places is: {round(bmi, 2)}")
# f-strings are a way to format strings in Python,
# allowing you to embed expressions inside string
# literals using curly braces.