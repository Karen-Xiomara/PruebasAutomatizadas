Feature: Create and delete Tag in Ghost

  @user1 @web
  Scenario: As a visit user I login and then create and delete Tag in Ghost
    Given I navigate to page "<URLGHOST>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"

    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/a"
    Then I enter "MyTag" into input field having xpath "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/input"
    Then I enter "My description tag" into input field having xpath "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea"
    Then I enter "MyTag meta" into input field having xpath "/html/body/div[2]/div/main/section/form/div/div[2]/div[1]/div[1]/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/form/header/section/button"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/button"
    Then I click on element having xpath "/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button[2]"

    Then I click on element having css selector ".flex-auto.flex.items-center" 
    Then I click on element having xpath "/html/body/div[1]/div/ul/li[9]/a"
