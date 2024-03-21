Feature: shopping end to end

Scenario: product checkout
Given I open the shopping page
When I add items to Cart
And Validate the total prices
Then select the country submit and verify Thankyou


@Smoke
Scenario: Filling the form to shop
Given I open the shopping page
When I fill the form details
|name | gender |
|bobz | Male   |
Then validate the forms behaviour
And select the Shop Page