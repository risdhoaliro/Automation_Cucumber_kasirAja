import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */

  /// Element Login

  public get inputEmail() {
    return $("#email");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $("body.chakra-ui-light:nth-child(2) div.css-1y1lvqg div.css-16in75i div.css-1w7v3tn div.css-11jlpvc > button.chakra-button.css-1n8i4of:nth-child(4)");
  }
  

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login (email: string, password: string) {
    await browser.maximizeWindow();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("login");
  }
}

export default new LoginPage(); 


