stocks = {
    "AAPL": 180,
    "TSLA": 250,
    "GOOG": 140,
    "MSFT": 330
}

total_investment = 0

print("Stock Portfolio Tracker")

for stock, price in stocks.items():
    quantity = int(input(f"Enter quantity of {stock}: "))
    investment = quantity * price
    total_investment += investment

print("\nTotal Investment Value =", total_investment)

file = open("portfolio.txt", "w")
file.write("Total Investment Value = " + str(total_investment))
file.close()

print("Result saved in portfolio.txt")
