Feature: Login Page

  Scenario: Login with valid credentials
    Given I visit the login page
    When the user enters a valid username and password
    And clicks the login button
    Then the user is navigated to the product page
    And sees all products listed 
    
  