Feature: The demo app

  Scenario Outline: As a user, I can use various features of demo app

    Given I am on the login page
    When I login with username and password
    Then I should see the home page

