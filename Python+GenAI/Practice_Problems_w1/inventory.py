# 1. Inventory dictionary
inventory = {
    "apple": 10,
    "banana": 5,
    "orange": 7
}

# 2. Add/update fruit in inventory
def add_fruit(fruit_name, quantity):
    fruit_name = fruit_name.lower()
    if fruit_name in inventory:
        inventory[fruit_name] += quantity
        print(f"Added {quantity} {fruit_name}(s). Now have {inventory[fruit_name]}.")
    else:
        inventory[fruit_name] = quantity
        print(f"Added new fruit: {fruit_name} ({quantity}).")

# 3. Sell fruit from inventory
def sell_fruit(fruit_name, quantity):
    fruit_name = fruit_name.lower()
    if fruit_name not in inventory:
        print(f"{fruit_name.capitalize()} not found in inventory.")
    elif inventory[fruit_name] < quantity:
        print(f"Not enough {fruit_name}s in stock.")
    else:
        inventory[fruit_name] -= quantity
        print(f"Sold {quantity} {fruit_name}(s). {inventory[fruit_name]} remaining.")

# 4. Display current inventory
def display_inventory():
    print("\nCurrent Inventory:")
    items = []
    for fruit, qty in inventory.items():
        items.append(f"{fruit.capitalize()}s: {qty}")
    print(", ".join(items))
    print()



display_inventory()
# Running example transactions
add_fruit("Apple", 5)
sell_fruit("Banana", 3)
sell_fruit("Orange", 10)
sell_fruit("Pear", 2)
add_fruit("Pear", 4)
sell_fruit("Mango", 2)

display_inventory()
