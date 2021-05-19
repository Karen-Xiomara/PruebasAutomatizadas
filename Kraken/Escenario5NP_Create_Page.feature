Feature: Login and logout in Ghost

  @user1 @web
  Scenario: As a visit user I login and then logout in Ghost
    Given I navigate to page "<URLGHOST>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"

    Then I click on element having css selector ".flex-auto.flex.items-center" 
    Then I click on element having xpath "/html/body/div[1]/div/ul/li[9]/a"

  