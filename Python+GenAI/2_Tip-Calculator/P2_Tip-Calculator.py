print("\n\nWelcome to the tip calculator!!\n")
total = float(input("What was the total bill? $"))
tipPercent = float(input("What % tip would you like to give? 10, 12, 15? $"))
people = int(input("How many people to split the bill? "))
totalWithTip = (total + (total/100)*tipPercent)/people
print("Each person should pay: $", (round(totalWithTip, 2)))