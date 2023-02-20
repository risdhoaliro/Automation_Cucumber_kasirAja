import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import report from "@wdio/allure-reporter"

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await browser.reloadSession();
  report.addStep('Reload Session')
  await pages[page].open();
  report.addStep('Loading URL: ', page)
});

When(/^User input (.+) and (.+)$/, async (email, password) => {
  await LoginPage.login(email, password);
  report.addStep('Input Email')
  report.addStep('Input Password')
  report.addStep('Klik button Login')
});

When(/^As user input wrong (.+) and (.+)$/, async (email, password) => {
  await LoginPage.login(email, password);
});

Then(/^I should see a Dashboard (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I should see a Popup Alert (.*)$/, async (message) => {
  await expect(SecurePage.flashAlertEror).toBeExisting();
});
