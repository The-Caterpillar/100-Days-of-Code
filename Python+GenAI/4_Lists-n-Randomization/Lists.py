states_of_India = ["Haryana", "Punjab", "Himachal Pradesh", "Uttar Pradesh", "Bihar", "Madhya Pradesh", "Gujarat", "Haryana", "Rajasthan", "Maharashtra", "Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh", "Telangana"]

for i in range(len(states_of_India)):
    print("State of India:", states_of_India[i])

# Add an item to the end of the list: append
states_of_India.append("Odisha")

# add a whole iterable to a list: extend
states_of_India.extend(["West Bengal", "Assam"])

# Insert an item at any given position : insert
# list.insert(i,item)
states_of_India.insert(0,"Goa")

# remove: remove the first occurrence of a value.
# Raised a value error if the value is not found.
#list.remove(x)
states_of_India.remove("Goa")

# pop: remove the item at the given position in the list,
# and return it. list.pop([i])
popped_state = states_of_India.pop(1)

# clear : remove all items from the list. 
# list.clear()

# list.index(x, [start, [end]])
# Returns the index of the first item whose value is equal to x.
haryana_first_index = states_of_India.index("Haryana",0, len(states_of_India)-1)
print("First index of Haryana:", haryana_first_index)

