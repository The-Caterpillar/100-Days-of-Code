print('''
                    ____...------------...____
               _.-"` /o/__ ____ __ __  __ \o\_`"-._
             .'     / /                    \ \     '.
             |=====/o/======================\o\=====|
             |____/_/________..____..________\_\____|
             /   _/ \_     <_o#\__/#o_>     _/ \_   \
             \_________\####/_________/
              |===\!/========================\!/===|
              |   |=|          .---.         |=|   |
              |===|o|=========/     \========|o|===|
              |   | |         \() ()/        | |   |
              |===|o|======{'-.) A (.-'}=====|o|===|
              | __/ \__     '-.\\uuu/.-'    __/ \__ |
              |==== .'.'^'.'.====|
          jgs |  _\o/   __  {.' __  '.} _   _\o/  _|
              `""""-""""""""""""""""""""""""""-""""`
''')

print("Welcome to Treasure Island.\n")
print("Your mission is to find the treasure.\n")
choice1 = input('You\'re at a crossroad. Do you want to go left or right? (left/right): \n').lower()

if choice1 == "left":
    choice2 = input("You've come to a lake."
                    " Do you want to: *swim* or *wait* for a boat?: \n").lower()
    if choice2 == "wait":
        choice3 = input("You waited for a boat and crossed the lake safely."
              " There is a house with 3 doors. One red, "
              " one blue, and one yellow."
              "Which door do you want to open? (red//blue//yellow): \n").lower()
        if choice3 == "red":
            print("You entered a room of beasts. Game over.")
        elif choice3 == "blue":
            print("You entered a room of fire. Game over.")
        elif choice3 == "yellow":
            print("You found the treasure! You win!")
        else:
            print("You chose a door that doesn't exist. Game over.")
    else:
        print("You swam and drowned and got lost. Game over.")
else:
    choice2 = input("You've come to a house. Do you want to enter or walk past? (enter/walk): \n").lower()
    if choice2 == "enter":
        choice3 = input("You found a treasure chest! Do you want to open it or leave it? (open/leave): \n").lower()
        if choice3 == "open":
            print("You opened the chest and found gold! You win!")
        else:
            print("You left the treasure behind. Game over.")
    else:
        print("You walked past the house and got lost. Game over.")