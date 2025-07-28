# Python uses Mersenne Twister algorithm for randomization
import random as r
# import myModule as m
# Creating an alias for myModule, a module that I created

# random_int = r.randint(1,10)
# print(random_int)
# print(m.my_Favourite_Color)

# .random() generates a float between 0.0 and 1.0
random_number_0_to_1 = r.random() * 10
print(round((random_number_0_to_1),3))

# .uniform(a,b) generates a float between a and b
random_number_a_to_b = r.uniform(1, 10)
print(round((random_number_a_to_b),3))