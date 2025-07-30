# 1. Global balance
balance = 0

# 2. Deposit
def deposit(amount):
    global balance
    balance += amount
    print(f"Deposited ₹{amount:.2f}. New balance: ₹{balance:.2f}")

# 3. Withdraw
def withdraw(amount):
    global balance
    if amount > balance:
        print("Insufficient balance.")
    else:
        balance -= amount
        print(f"Withdrawn ₹{amount:.2f}. New balance: ₹{balance:.2f}")

# 4. Check balance
def check_balance():
    print(f"Current balance: ₹{balance:.2f}")

# (5 & 6). Simple Menu & Implementation of the Menu
def main():
    while True:
        print("\n--- Simple Banking System ---")
        print("1. Deposit")
        print("2. Withdraw")
        print("3. Check Balance")
        print("4. Exit")
        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            try:
                amount = float(input("Enter amount to deposit: "))
                if amount <= 0:
                    print("Amount must be positive.")
                else:
                    deposit(amount)
            except ValueError:
                print("Please enter a valid amount.")
        elif choice == '2':
            try:
                amount = float(input("Enter amount to withdraw: "))
                if amount <= 0:
                    print("Amount must be positive.")
                else:
                    withdraw(amount)
            except ValueError:
                print("Please enter a valid amount.")
        elif choice == '3':
            check_balance()
        elif choice == '4':
            print("Thank you for using the banking system.")
            break
        else:
            print("Invalid choice. Please select 1-4.")

main()
