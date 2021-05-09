Feature: Cancelando una eliminación de un Post 
  @user1 @web
  Scenario: Cancelando una eliminación de un Post 
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "j.cuestaa@uniandes.edu.co" into input field having id "ember8"
  Then I enter "RMCac197510" into input field having id "ember10"
  Then I click on element having id "ember12"
  Then I click on element having id "ember28"
  Then I click on element having css selector ".ember-view.permalink.gh-list-data.gh-post-list-title" 
  Then I wait for 10 seconds
  Then I enter "Eliminando...." into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
  Then I click on element having css selector "/html/body/div[2]/div/main/section/header/section/button/svg"
  Then I wait for 10 seconds
  Then I click on element having css selector ".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"
  Then I click on element having css selector ".gh-btn.gh-btn-red gh-btn-icon.ember-view"
  Then I wait for 10 seconds
