import { Page } from "@playwright/test";

export default class LoginPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // locators
  username = () => this.page.locator("#username");
  password = () => this.page.locator("#password");
  submitLogin = () => this.page.locator("#login-submit");

  // functions

  public async EnterCredentialsAndSubmit(user: string, pass: string) {
    await this.username().fill(user);
    await this.password().fill(pass);
    await this.submitLogin().click();
  }
}
