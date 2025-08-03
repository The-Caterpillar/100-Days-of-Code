import pandas as pd
import matplotlib.pyplot as plt

def read_portfolio_excel(filename='portfolio.xlsx'):
    try:
        df = pd.read_excel(filename)
        required_cols = {'asset_id', 'asset_type', 'quantity', 'purchase_price', 'current_price'}
        if not required_cols.issubset(df.columns):
            missing = required_cols - set(df.columns)
            print(f"Error: Missing columns in Excel file: {missing}")
            return None
        return df
    except FileNotFoundError:
        print(f"File '{filename}' not found.")
    except Exception as e:
        print(f"Error reading Excel file: {e}")
    return None

def calculate_values(df):
    df['current_value'] = df['quantity'] * df['current_price']
    df['purchase_value'] = df['quantity'] * df['purchase_price']
    df['roi'] = (df['current_value'] - df['purchase_value']) / df['purchase_value']
    total_current_value = df['current_value'].sum()
    total_purchase_value = df['purchase_value'].sum()
    portfolio_roi = (total_current_value - total_purchase_value) / total_purchase_value if total_purchase_value != 0 else 0
    return df, total_current_value, portfolio_roi

def asset_allocation(df):
    allocation = df.groupby('asset_type')['current_value'].sum()
    total = allocation.sum()
    allocation_percent = (allocation / total) * 100
    return allocation_percent

def plot_asset_allocation(allocation_percent):
    plt.figure(figsize=(8,8))
    plt.pie(allocation_percent, labels=allocation_percent.index,
            autopct='%1.1f%%', startangle=140, shadow=True)
    plt.title('Portfolio Asset Allocation')
    plt.axis('equal') # Equal aspect ratio
    plt.show()

def display_portfolio(df, total_value, portfolio_roi):
    print("\nPortfolio Details:")
    print(df[['asset_id', 'asset_type', 'quantity', 'purchase_price', 'current_price', 'current_value', 'roi']])
    print(f"\nTotal Portfolio Value: ${total_value:,.2f}")
    print(f"Overall Portfolio ROI: {portfolio_roi:.2%}")

def main():
    portfolio_df = read_portfolio_excel()
    if portfolio_df is None:
        return

    while True:
        print("\n--- Financial Portfolio Analysis Menu ---")
        print("1. Show portfolio assets with ROI and value")
        print("2. Show total portfolio value and ROI")
        print("3. Show asset allocation percentages")
        print("4. Visualize asset allocation pie chart")
        print("5. Exit")
        choice = input("Enter your choice (1-5): ").strip()

        if choice == '1':
            portfolio_df, total_value, portfolio_roi = calculate_values(portfolio_df)
            display_portfolio(portfolio_df, total_value, portfolio_roi)

        elif choice == '2':
            portfolio_df, total_value, portfolio_roi = calculate_values(portfolio_df)
            print(f"\nTotal Portfolio Value: ${total_value:,.2f}")
            print(f"Overall Portfolio ROI: {portfolio_roi:.2%}")

        elif choice == '3':
            portfolio_df, _, _ = calculate_values(portfolio_df)
            alloc_percent = asset_allocation(portfolio_df)
            print("\nAsset Allocation (% of portfolio):")
            for asset_type, percent in alloc_percent.items():
                print(f"- {asset_type}: {percent:.2f}%")

        elif choice == '4':
            portfolio_df, _, _ = calculate_values(portfolio_df)
            alloc_percent = asset_allocation(portfolio_df)
            plot_asset_allocation(alloc_percent)

        elif choice == '5':
            print("Exiting Financial Portfolio Analysis.")
            break
        else:
            print("Invalid choice, please choose from 1 to 5.")

if __name__ == "__main__":
    main()
