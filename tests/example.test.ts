import { test, expect } from "@playwright/test";
import DashBoardPage from "./DashBoardPage";
import LoginPage from "./LoginPage";

test("login using valid credentals", async ({ page }) => {
  const dashBoardPage = new DashBoardPage(page);
  const loginPage = new LoginPage(page);
  await dashBoardPage.GoTo();
  await dashBoardPage.ClickIAgree();
  await dashBoardPage.ClickAvatar();
  //await dashBoardPage.ClickNajaviSe();
  await loginPage.EnterCredentialsAndSubmit(
    "dejanovski_a@yahoo.com",
    "aA123456789"
  );
});