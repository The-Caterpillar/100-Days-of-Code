# 1. Calculating average
def calculate_average(grades):
    if not grades:
        return 0
    return sum(grades) / len(grades)

# 2. Assigning grades
def assign_grade(average_grade):
    if 90 <= average_grade <= 100:
        return 'A'
    elif 80 <= average_grade < 90:
        return 'B'
    elif 70 <= average_grade < 80:
        return 'C'
    elif 60 <= average_grade < 70:
        return 'D'
    elif 50 <= average_grade < 60:
        return 'E'
    else:
        return 'F'

# 3. Storing grades
def main():
    try:
        num_subjects = int(input("Enter the number of subjects: "))
    except ValueError:
        print("Please enter a valid number.")
        return
    if num_subjects <= 0:
        print("Number of subjects should be positive.")
        return

    grades = []
    for i in range(num_subjects):
        while True:
            try:
                grade = float(input(f"Enter grade for subject #{i + 1} (0-100): "))
                if 0 <= grade <= 100:
                    grades.append(grade)
                    break
                else:
                    print("Grade should be between 0 and 100.")
            except ValueError:
                print("Please enter a valid number.")

    # 4. Calculating average
    average = calculate_average(grades)

    # 5. Assigning grade
    letter = assign_grade(average)

    # 6. Result
    print(f"\nAverage Grade: {average:.2f}")
    print(f"Letter Grade: {letter}")


main()
