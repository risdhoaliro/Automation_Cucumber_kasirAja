import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */

class PembelianPage extends Page {
  //element login
  public get inputEmail() {
    return $("#email");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $("body.chakra-ui-light:nth-child(2) div.css-1y1lvqg div.css-16in75i div.css-1w7v3tn div.css-11jlpvc > button.chakra-button.css-1n8i4of:nth-child(4)");
  }

  //element Pembelian

  public get btnPembelian() {
    return $("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(5) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q");
  }

  public get btnAdd() {
    return $("body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1r35f0l div.chakra-container.css-9rmdie div.css-1t33j5j > a.chakra-button.css-1piskbq");
  }

  public get fieldSearch() {
    return $("//body/div[3]/div[4]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]");
  }

  public get btnProduk() {
    return $("//button[contains(text(),'produk')]");
  }

  public get btnRoti() {
    return $("//tbody/tr[1]/td[2]");
  }

  public get btnSave() {
    return $("//button[contains(text(),'Simpan')]");
  }

  public get btnClose() {
    return $("//body/div[@id='chakra-toast-portal']/ul[@id='chakra-toast-manager-top-right']/li[1]/div[1]/div[1]/button[1]");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   * to search produk Roti
   */

  public async notselected() {
    await this.btnPembelian.click();
    await this.btnAdd.click();
    await this.btnSave.click();
  }

  public async selected() {
    await this.btnRoti.click();
    await this.btnSave.click();
  }

  public async search(barang: string) {
    await this.btnPembelian.click();
    await this.btnAdd.click();
    await this.btnProduk.click();
    await this.fieldSearch.setValue(barang);
  }

  public async login(email: string, password: string) {
    await browser.maximizeWindow();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public open() {
    return super.open("login");
  }
}

export default new PembelianPage();
