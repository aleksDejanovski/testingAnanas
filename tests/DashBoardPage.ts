import { Page, Expect, expect } from "@playwright/test";

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
  aleksandarLogedIn = () => this.page.getByText("Aleksandar");
  searchTextBox = () =>
    this.page.getByPlaceholder("Внесете термин за пребарување...");
  clickSearch = () => this.page.getByRole("button", { name: "Search" });
  testBremenostResults = () =>
    this.page.getByRole("heading", {
      name: 'Резултати за "test za bremenost"',
    });

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

  public async AleksandarLogedIn() {
    await this.aleksandarLogedIn().isEnabled();
  }

  public async SearchItem(item: string) {
    await this.searchTextBox().fill(item);
    await this.clickSearch();
  }

  public async ResutsTestBremenost() {
    await this.testBremenostResults().isEnabled;
  }
}
