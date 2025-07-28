import random as r

print("\nLet's Play!!\nWhat do you choose? Rocks, Paper, or Scissors?\n")

rock = '''
       ,--.--._
------" _, \___)
        / _/____)
        \//(____)
------\     (__)
       `-----"
'''
paper = '''
     _.-._
    | | | |_
    | | | | |
    | | | | |
  _ |  '-._ |
  \`\`-.'-._;
   \    '   |
    \  .`  /
     |    |
'''
scissors = '''
    .-.  _
    | | / )
    | |/ /
   _|__ /_
  / __)-' )
  \  `(.-')
   > ._>-'
  / \/
'''
choices = [rock, paper, scissors]
user_input = int(input("Enter your choice: "
                   "0 for Rock, 1 for Paper, 2 for Scissors: \n"))
if(user_input < 0 or user_input > 2):
    print("Invalid choice! Please enter 0, 1, or 2.")
    exit(1)
else:
    print("You chose:")
    print(choices[user_input])

computer_choice = r.randint(0, 2)
print("Computer chose:",choices[computer_choice])

if (user_input==0 and computer_choice==0) or (user_input==1 and computer_choice==1) or (user_input==2 and computer_choice==2):
    print(f"Both chose {user_input}. It's a tie!")
elif (user_input==0 and computer_choice==2) or (user_input==1 and computer_choice==0) or (user_input==2 and computer_choice==1):
    print(f"You win!! \n{user_input} beats {computer_choice}.")
else:
    print(f"You lose!! \n{computer_choice} beats {user_input}.")