from datetime import datetime
import csv

class Book:
    def __init__(self, title, author, isbn, publication_year):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.publication_year = publication_year

    def display_details(self):
        print(f"Title: {self.title}")
        print(f"Author: {self.author}")
        print(f"ISBN: {self.isbn}")
        print(f"Publication Year: {self.publication_year}")

    def book_age(self):
        current_year = datetime.now().year
        return current_year - self.publication_year

    def __repr__(self):
        return f"Book('{self.title}', '{self.author}', '{self.isbn}', {self.publication_year})"

    def __eq__(self, other):
        if isinstance(other, Book):
            return self.isbn == other.isbn
        return False

    def __lt__(self, other):
        # Sorted books by title
        return self.title < other.title


class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        # Prevent duplicates by ISBN
        if not any(b.isbn == book.isbn for b in self.books):
            self.books.append(book)
            print(f"Added book: {book.title}")
        else:
            print(f"Book with ISBN {book.isbn} already exists.")

    def remove_book(self, isbn):
        original_len = len(self.books)
        self.books = [b for b in self.books if b.isbn != isbn]
        if len(self.books) < original_len:
            print(f"Removed book with ISBN {isbn}")
        else:
            print(f"No book found with ISBN {isbn}")

    def search_books(self, query):
        query = query.lower()
        return [b for b in self.books if query in b.title.lower() or query in b.author.lower()]

    def display_books(self):
        if not self.books:
            print("No books available in the library.")
            return
        for book in sorted(self.books):
            book.display_details()
            print(f"Book age: {book.book_age()} years")
            print("-" * 30)


def read_books_from_csv(filename):
    books = []
    try:
        with open(filename, newline='', encoding='utf-8') as booksFile:
            reader = csv.DictReader(booksFile)
            for row in reader:
                try:
                    isbn = row['ISBN'].strip()
                    title = row['Book-Title'].strip()
                    author = row['Book-Author'].strip()
                    year_str = row['Year-Of-Publication'].strip()

                    # Validate year; skip if invalid
                    if year_str.isdigit():
                        publication_year = int(year_str)
                    else:
                        print(f"Skipping book due to invalid year: {row}")
                        continue
                    
                    book = Book(title=title, author=author, isbn=isbn, publication_year=publication_year)
                    books.append(book)
                except KeyError as e:
                    print(f"Missing expected column: {e} in row: {row}")
                except Exception as e:
                    print(f"Error processing row {row}: {e}")
    except FileNotFoundError:
        print(f"CSV file '{filename}' not found.")
    except Exception as e:
        print(f"Unexpected error: {e}")
    return books


def main():
    library = Library()
    loaded_books = read_books_from_csv('Books.csv')
    for b in loaded_books:
        library.add_book(b)

    while True:
        print("\n----- Library Menu -----")
        print("1. Display all books")
        print("2. Remove a book (using ISBN)")
        print("3. Add a book")
        print("4. Search for book information")
        print("5. Exit")
        choice = input("Enter your choice (1-5): ").strip()

        if choice == '1':
            print("\n--- Library Collection ---")
            library.display_books()

        elif choice == '2':
            isbn_to_remove = input("Enter ISBN to remove a book: ").strip()
            if isbn_to_remove:
                library.remove_book(isbn_to_remove)
            else:
                print("ISBN cannot be empty.")

        elif choice == '3':
            print("Enter book details to add:")
            isbn = input("ISBN: ").strip()
            if not isbn:
                print("ISBN cannot be empty.")
                continue

            title = input("Title: ").strip()
            if not title:
                print("Title cannot be empty.")
                continue

            author = input("Author: ").strip()
            if not author:
                print("Author cannot be empty.")
                continue

            year_str = input("Publication Year: ").strip()
            if not year_str.isdigit():
                print("Publication year must be a valid number.")
                continue
            publication_year = int(year_str)

            new_book = Book(title=title, author=author, isbn=isbn, publication_year=publication_year)
            library.add_book(new_book)

        elif choice == '4':
            search_term = input("Enter search term (title or author): ").strip()
            if search_term:
                matched_books = library.search_books(search_term)
                if matched_books:
                    print(f"\nSearch results for '{search_term}':")
                    for mb in matched_books:
                        print(f"- {mb.title} by {mb.author} (ISBN: {mb.isbn})")
                else:
                    print(f"No books found for search term: '{search_term}'")
            else:
                print("Search term cannot be empty.")

        elif choice == '5':
            print("Exiting the library program. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a number between 1 and 5.")


if __name__ == "__main__":
    main()