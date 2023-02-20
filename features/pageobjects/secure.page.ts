import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get flashAlert() {
    return $("//h3[contains(text(),'kasirAja')]");
  }

  public get flashAlertEror() {
    return $("//body/div[@id='root']/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]");
  }

  /// Validation produk roti
  public get produkSearch() {
    return $("//td[contains(text(),'BR156916')]");
  }

  public get popupSucces() {
    return $("//body/div[@id='chakra-toast-portal']/ul[@id='chakra-toast-manager-top-right']/li[1]/div[1]/div[1]/div[1]/div[2]");
  }

  public get popupErorr() {
    return $("//body/div[@id='chakra-toast-portal']/ul[@id='chakra-toast-manager-top-right']/li[1]/div[1]/div[1]/div[1]/div[2]");
  }
}

export default new SecurePage();
