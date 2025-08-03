import words
import random
import hangman_art as art

word = random.choice(words.word_list)
l = len(word)
lives_used = 0

print("Guess the word: ")
word_check = ['_'] * l
letter_count = 0

while lives_used < 6  and letter_count < l:
    print(f"\n\n\nWord: {''.join(word_check)}")
    guess = input("Guess a letter: ").lower()
    flag = 0
    i = 0
    while i < l :
        if guess == word[i] and word_check[i] == '_' :
            word_check[i] = word[i]
            flag = 1
            break
        i = i + 1

    if flag == 1:
        print("Good guess!!")
        letter_count = letter_count + 1

    else:
        print(art.hangman_stages[lives_used])
        lives_used += 1
        print("Oops!! Wrong choice.")
        print(f"Lives remaining: {6 - lives_used}")


if letter_count == l:
    print(art.hangman_stages[lives_used])
    print("Word: "+''.join(word_check))
    print(f"\nLives remaining: {6 - lives_used - 1}")
    print("This man lives to see another day!!!  (^_^)\n\n")
else:
    print(art.hangman_stages[6])
    print("This man is dead!!")