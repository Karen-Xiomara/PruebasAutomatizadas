Feature: Modificando un Post con publish execution
  @user1 @web
  Scenario: Modificando un Post con publish execution
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "j.cuestaa@uniandes.edu.co" into input field having id "ember8"
  Then I enter "hqlDIOPN9j" into input field having id "ember10"
  Then I click on element having id "ember12"
  Then I click on element having id "ember28"
  Then I click on element having css selector ".gh-btn-green"
  Then I wait for 5 seconds
  Then I enter "Prueba Post 01" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
  Then I enter "Ajuste Post creado" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
  Then I click on element having css selector ".gh-publishmenu.ember-view"
  Then I click on element having css selector ".gh-publishmenu-radio.active"
  Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
  Then I wait for 10 seconds
