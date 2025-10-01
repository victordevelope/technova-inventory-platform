def test_low_stock_alert():
    product = {"name": "Laptop", "stock": 2}
    assert product["stock"] < 5

