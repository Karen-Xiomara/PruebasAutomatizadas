Feature: Change settings in Ghost

  @user1 @web
  Scenario: As a visit user I login and then change settings
    Given I navigate to page "<URLGHOST>>"
    Then I enter "<USERNAME>" into input field having id "ember8"
    Then I enter "<PASSWORD>" into input field having id "ember10"
    Then I click on element having id "ember12"
    
    Then I click on element having id "ember33"
    Then I click on element having css selector "#ember3 > div > main > section > div > section > div.flex.flex-column.br3.shadow-1.bg-grouped-table.pa5.mt2 > div.gh-setting-first > div.gh-setting-action > button"
    Then I enter " - Modificado." into input field having xpath "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/div/header/section/button"
    
    Then I click on element having css selector ".flex-auto.flex.items-center" 
    Then I click on element having xpath "/html/body/div[1]/div/ul/li[9]/a"