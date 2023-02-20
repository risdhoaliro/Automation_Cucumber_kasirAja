Feature: Login to website Kasir Aja Website

@Login
Scenario Outline: TC-01 As a user, I can't log in to KasirAja

    Given I am on the login page
    When As user input wrong <email> and <password> 
    Then I should see a Popup Alert <message>

    Examples:
      | email                   | password                    | message                                 |
      | email@salah.com         | salahpassword               | Kredensial yang Anda berikan salah      |

@Login  
Scenario Outline: TC-02 As a user, I can log in to KasirAja

    Given I am on the login page
    When User input <email> and <password> 
    Then I should see a Dashboard <message>

    Examples:
      | email                   | password     | message                                 |
      | tokorisdho@gmail.com    | 123asd@      | kasirAja                                |


