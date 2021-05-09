     
    
   
Feature: Create a page whitout description draf
  @user1 @web
  Scenario: As a first user I create a page
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "j.cuestaa@uniandes.edu.co" into input field having id "ember8"
  Then I enter "hqlDIOPN9j" into input field having id "ember10"
  Then I click on element having id "ember12"
  Then I wait for 5 seconds
  Then I click on element having id "ember30"
  Then I click on element having css selector ".ember-view.gh-btn.gh-btn-green"
  Then I enter "Pagina sin descripcion draf" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
  Then I wait for 10 seconds
  Then I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view"
