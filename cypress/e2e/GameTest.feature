Feature: Search and Open the Game

@game1
Scenario: 1. A (logged out) user should be able to find and open the game. 
    Given User navigates to the Boost Casino Application
    Then Search input field is shown
    When Search for "book of dead"
    Then Games matching with book of dead show up
    And Click on "Play" button
    Then Verify that the game is loading