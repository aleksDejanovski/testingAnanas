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
  invalidLoginToastMessage = () =>
    this.page.getByText("Е-поштата или лозинката се неточни.");

  // functions

  public async EnterCredentialsAndSubmit(user: string, pass: string) {
    await this.username().fill(user);
    await this.password().fill(pass);
    await this.submitLogin().click();
  }

  public async NotValidLogin() {
    await this.invalidLoginToastMessage().isEnabled();
  }
}
