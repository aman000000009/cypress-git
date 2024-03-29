Feature: end to end testing

Scenario: add product and checkout
Given I navigate to the ecomm website
When I added products to the cart
Then I proceed to checkout
Then I see Finish Screen