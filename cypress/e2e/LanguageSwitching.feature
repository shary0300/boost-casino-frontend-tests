Feature: Language Switching

@language1
Scenario Outline: A (logged out) user should be able to switch the language using the menu dropdown.
    Given User navigates to the Boost Casino Application
    When Click on the burger icon
    And Language dropdown is shown in the header
    And Click on the language dropdown
    Then The language menu shows up
    When Click on "<language>" and verify that page is on "<language_name>" language

  Examples:
    | language | language_name |
    | FI       | Finnish       |
    | EE       | Estonian      |
    | RU       | Russian       |
