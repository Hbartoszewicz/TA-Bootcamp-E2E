Feature: Bootcamp E2E

Background: 
    Given I am on the "https://www.newegg.com" home page

    @searchBar
    Scenario Outline: Search bar
    
    When I enter the word "Windows" in the search bar
    And  I click the search button
    Then Check that at least one item appears
    
    @logoBtn
    Scenario Outline: Internet shop logo button

    When I open "Today's Best Deals" tab
    And  I click on the Internet shop logo
    Then Check that the main page opened