import { Given, When, Then } from "@wdio/cucumber-framework";

import PembelianPage from "../pageobjects/pembelian.page";
import SecurePage from "../pageobjects/secure.page";

const pages = {
  login: PembelianPage,
};

When(/^User toko input (.+) and (.+) then user click menu Pembelian at navbar$/, async (email, password) => {
  await PembelianPage.login(email, password);
});

When(/^As user toko risdho input (.+) and (.+) then click menu Pembelian at navbar$/, async (email, password) => {
  await PembelianPage.login(email, password);
});

Then(/^User search produk (.+)$/, async (barang) => {
  await PembelianPage.search(barang);
});

Then(/^Users see the product they are looking for (.*)$/, async (message) => {
  await expect(SecurePage.produkSearch).toBeExisting();
});

Then(/^User selects the product to be purchased and see (.*)$/, async (popup) => {
  await PembelianPage.selected();
  await SecurePage.popupSucces.waitForDisplayed({ timeout: 5000 });
  await expect(SecurePage.popupSucces).toBeExisting();
});

// Negative Case
Then(/^User does not select a product and clicks the save button it will see (.*)$/, async (alert) => {
  await PembelianPage.notselected();
  await SecurePage.popupErorr.waitForDisplayed({ timeout: 5000 });
  await expect(SecurePage.popupErorr).toBeExisting();
});
