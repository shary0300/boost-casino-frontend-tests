Feature: Main Site Navigation

  @navigation1
  Scenario Outline: A logged-out user should be able to browse BoostCasino using the hamburger menu

    Given User navigates to the Boost Casino Application
    When Click on the burger icon
    And The game categories sub-menu opens tapping on "<category>"
    And The following entries are found "<entries>"
    And Tap on "<page>" redirects to "<page>" page

  Examples:
    | category    | entries                                                                                         | pages                                                                                                                                                          |
    | Casino      | Popular, New, Slots, Jackpots, Buy Feature, Hot Slots, Table Games                              | Popular, New, Slots, Jackpots, Buy Feature, Hot Slots, Table Games                                                                                          |
    | Live Casino | Game Shows, Roulette, Blackjack, Baccarat, Poker                                                | Game Shows, Roulette, Blackjack, Baccarat, Poker                                                                                                            |
    | Promotions  | Welcome Bonus, Boost XP, Casino Promotions, Live Casino Promotions, All Promotions              | Welcome Bonus, Boost XP, Casino Promotions, Live Casino Promotions, All Promotions                                                                           |
