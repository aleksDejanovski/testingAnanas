import { Page } from "@playwright/test";

export default class DashBoardPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //locator

  najavise = () => this.page.getByText("Најави се");
  acceptCookies = () =>
    this.page.getByRole("button", { name: "Се согласувам" });
  avatar = () => this.page.getByAltText("Sign-up icon");

  //function

  public async ClickAvatar() {
    await this.avatar().click();
  }

  public async ClickNajaviSe() {
    await this.najavise().click();
  }

  public async ClickIAgree() {
    await this.acceptCookies().click();
  }

  public async GoTo() {
    await this.page.goto("https://ananas.mk/");
  }
}
