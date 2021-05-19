Feature: Change Profile in Ghost

  @user1 @web
  Scenario: As a visit user I login and then change profile
    Given I navigate to page "<URLGHOST>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"

    Then I click on element having css selector ".flex-auto.flex.items-center" 
    Then I click on element having xpath "/html/body/div[1]/div/ul/li[4]/a"
    Then I enter "http://www.miurl.com" into input field having xpath "/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[5]/input"

    Then I click on element having css selector ".flex-auto.flex.items-center" 
    Then I click on element having xpath "/html/body/div[1]/div/ul/li[9]/a"