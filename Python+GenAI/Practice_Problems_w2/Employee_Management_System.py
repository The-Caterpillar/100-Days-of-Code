class Employee:
    def __init__(self, employee_id, name, position, salary):
        self.employee_id = employee_id
        self.name = name
        self.position = position
        self.salary = salary

    def display_details(self):
        print(f"ID: {self.employee_id}, Name: {self.name}, Position: {self.position}, Salary: ₹{self.salary:.2f}")
        print(f"Annual Bonus: ₹{self.annual_bonus():.2f}")

    def annual_bonus(self):
        return self.salary * 12 * 0.10

    def __str__(self):
        return f"{self.name} ({self.position}) - Salary: ₹{self.salary:.2f}"

class Department:
    def __init__(self, name):
        self.name = name
        self.employees = []

    # Overloading the + operator to add an employee
    def __add__(self, other):
        if isinstance(other, Employee):
            if any(emp.employee_id == other.employee_id for emp in self.employees):
                print(f"Employee with ID {other.employee_id} already in {self.name} department.")
            else:
                self.employees.append(other)
                print(f"Added {other.name} to {self.name} department.")
        else:
            raise TypeError("Only Employee instances can be added to Department using + operator.")
        return self

    def remove_employee(self, employee_id):
        original_len = len(self.employees)
        self.employees = [emp for emp in self.employees if emp.employee_id != employee_id]
        if len(self.employees) < original_len:
            print(f"Removed employee with ID {employee_id}")
        else:
            print(f"No employee found with ID {employee_id}")

    def search_employees(self, query):
        query = query.lower()
        return [emp for emp in self.employees if query in emp.name.lower() or query in emp.position.lower()]

    def display_employees(self):
        if not self.employees:
            print(f"No employees in {self.name} department.")
            return
        print(f"\nEmployees in {self.name} Department:")
        for emp in self.employees:
            emp.display_details()
            print("-" * 30)

    def update_employee(self, employee_id):
        for emp in self.employees:
            if emp.employee_id == employee_id:
                print(f"Updating details for employee ID {employee_id} - {emp.name}")
                name = input("New Name (press enter to keep current): ").strip()
                position = input("New Position (press enter to keep current): ").strip()
                salary_input = input("New Salary (press enter to keep current): ").strip()

                if name:
                    emp.name = name
                if position:
                    emp.position = position
                if salary_input:
                    if salary_input.isdigit() or (salary_input.replace('.', '', 1).isdigit() and salary_input.count('.') < 2):
                        emp.salary = float(salary_input)
                    else:
                        print("Invalid salary input. Salary not updated.")
                print("Updated employee details:")
                emp.display_details()
                return
        print(f"No employee found with ID {employee_id}")

    def total_salary(self):
        return sum(emp.salary for emp in self.employees)

    def highest_paid_employee(self):
        if not self.employees:
            return None
        return max(self.employees, key=lambda emp: emp.salary)


def main():
    department_name = input("Enter department name: ").strip() or "General"
    dept = Department(department_name)
    print(f"Department '{dept.name}' created.")

    while True:
        print("\n--- Employee Management Menu ---")
        print("1. Display all employees")
        print("2. Add an employee")
        print("3. Remove an employee (by ID)")
        print("4. Search employees (by name or position)")
        print("5. Update employee details")
        print("6. Calculate total salary of department")
        print("7. Find highest paid employee")
        print("8. Exit")
        choice = input("Enter your choice (1-8): ").strip()

        if choice == '1':
            dept.display_employees()

        elif choice == '2':
            try:
                employee_id = input("Employee ID (unique): ").strip()
                if any(emp.employee_id == employee_id for emp in dept.employees):
                    print(f"Employee ID {employee_id} already exists.")
                    continue
                name = input("Name: ").strip()
                position = input("Position: ").strip()
                salary_input = input("Salary: ").strip()

                if salary_input.isdigit() or (salary_input.replace('.', '', 1).isdigit() and salary_input.count('.') < 2):
                    salary = float(salary_input)
                else:
                    print("Invalid salary input. Employee not added.")
                    continue

                new_emp = Employee(employee_id, name, position, salary)
                dept + new_emp  # Using __add__ operator to add employee

            except Exception as e:
                print(f"Error adding employee: {e}")

        elif choice == '3':
            employee_id = input("Enter Employee ID to remove: ").strip()
            if employee_id:
                dept.remove_employee(employee_id)
            else:
                print("Employee ID cannot be empty.")

        elif choice == '4':
            query = input("Enter name or position to search: ").strip()
            if query:
                results = dept.search_employees(query)
                if results:
                    print(f"\nSearch results for '{query}':")
                    for e in results:
                        e.display_details()
                        print("-" * 30)
                else:
                    print(f"No employees found matching '{query}'.")
            else:
                print("Search query cannot be empty.")

        elif choice == '5':
            employee_id = input("Enter Employee ID to update: ").strip()
            if employee_id:
                dept.update_employee(employee_id)
            else:
                print("Employee ID cannot be empty.")

        elif choice == '6':
            total = dept.total_salary()
            print(f"Total salary for {dept.name} department: ₹{total:.2f}")

        elif choice == '7':
            highest = dept.highest_paid_employee()
            if highest:
                print("Highest paid employee:")
                highest.display_details()
            else:
                print(f"No employees in {dept.name} department.")

        elif choice == '8':
            print("Exiting Employee Management System. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a number between 1 and 8.")

# Execution starts here (^_^)
main()