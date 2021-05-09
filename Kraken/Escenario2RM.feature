Feature: Modificando una Page con publish execution
  @user1 @web
  Scenario: Modificando una Page con publish execution
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "j.cuestaa@uniandes.edu.co" into input field having id "ember8"
  Then I enter "hqlDIOPN9j" into input field having id "ember10"
  Then I click on element having id "ember12"
  Then I click on element having id "ember30"
  Then I click on element having text "new"
  Then I wait for 10 seconds
  Then I enter "Esto es una nueva pagina" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"  
  Then I click on element having css selector ".gh-publishmenu.ember-view"
  Then I click on element having css selector ".gh-publishmenu-radio.active"
  Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
  Then I wait for 10 seconds
