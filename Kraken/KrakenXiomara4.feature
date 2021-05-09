     
    
 
 

Feature: Create a page whitout tilte
  @user1 @web
  Scenario: As a first user I create a page whitout tilte
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "j.cuestaa@uniandes.edu.co" into input field having id "ember8"
  Then I enter "hqlDIOPN9j" into input field having id "ember10"
  Then I click on element having id "ember12"
  Then I wait for 5 seconds
  Then I click on element having id "ember30"
  Then I click on element having css selector ".ember-view.gh-btn.gh-btn-green"
  Then I enter "Descripcion de la pagina nueva sin titulo" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
  Then I wait for 10 seconds
  Then I click on element having css selector ".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger"
  Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
  
  
  
