Feature: Modify the content of a post with special characters
  @user1 @web
  Scenario: As a first user I modify a post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "j.cuestaa@uniandes.edu.co" into input field having id "ember8"
  Then I enter "hqlDIOPN9j" into input field having id "ember10"
  Then I click on element having id "ember12"
  Then I click on element having id "ember28"
  Then I click on element having css selector ".ember-view.permalink.gh-list-data.gh-post-list-title"
  Then I wait for 5 seconds
  Then I enter "Esto es una modificacion de caracteres especiales @#$=,&()?¿¡´[]" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor"
  Then I click on element having css selector ".gh-publishmenu.ember-view"
  Then I click on element having css selector ".gh-publishmenu-radio.active"
  Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
  Then I wait for 10 seconds


