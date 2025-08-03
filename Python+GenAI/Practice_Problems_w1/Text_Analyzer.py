import string

# 1. String Operations
def clean_text(text):
    # To lowercase
    text = text.lower()
    # Remove punctuation
    for char in string.punctuation:
        text = text.replace(char, "")
    # Split into words
    words = text.split()
    return words

# 2. Count word frequencies
def count_words(word_list):
    freq_dict = {}
    for word in word_list:
        if word in freq_dict:
            freq_dict[word] += 1
        else:
            freq_dict[word] = 1
    return freq_dict


def main():
    user_text = input("Enter some text: ") # 3. Input

    # 4. Cleaning text
    words = clean_text(user_text)

    # 5. Counting words
    frequencies = count_words(words)

    # 6. Sort and print (descending order)
    print("\nWord Frequencies:")
    for word, count in sorted(frequencies.items(), key=lambda item: item[1], reverse=True):
        print(f"{word}: {count}")



main()