import { test, expect } from "@playwright/test";
import DashBoardPage from "./DashBoardPage";
import LoginPage from "./LoginPage";
//import * as userData from "../tests-examples/dataForTest/data.json";

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
  await dashBoardPage.AleksandarLogedIn();
});

test("login using invalid credentals", async ({ page }) => {
  const dashBoardPage = new DashBoardPage(page);
  const loginPage = new LoginPage(page);
  await dashBoardPage.GoTo();
  await dashBoardPage.ClickIAgree();
  await dashBoardPage.ClickAvatar();
  //await dashBoardPage.ClickNajaviSe();
  await loginPage.EnterCredentialsAndSubmit(
    "trajkovski_a@yahoo.com",
    "ecc34fdd43"
  );
  await loginPage.NotValidLogin();
});

test("login using valid credentals and search for product", async ({
  page,
}) => {
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
  await dashBoardPage.AleksandarLogedIn();
  await dashBoardPage.SearchItem("test za bremenost");
  await dashBoardPage.ResutsTestBremenost();
});

test("login using valid credentals from data file and search for product", async ({
  page,
}) => {
  const userData = require("../tests-examples/dataForTest/data.json");
  const dashBoardPage = new DashBoardPage(page);
  const loginPage = new LoginPage(page);
  await dashBoardPage.GoTo();
  await dashBoardPage.ClickIAgree();
  await dashBoardPage.ClickAvatar();
  //await dashBoardPage.ClickNajaviSe();
  await loginPage.EnterCredentialsAndSubmit(
    userData[0].username,
    userData[0].password
  );
  await dashBoardPage.AleksandarLogedIn();
  await dashBoardPage.SearchItem("test za bremenost");
  await dashBoardPage.ResutsTestBremenost();
});

test("login using invalid credentals from data file and search for product", async ({
  page,
}) => {
  const userData = require("../tests-examples/dataForTest/data.json");
  const dashBoardPage = new DashBoardPage(page);
  const loginPage = new LoginPage(page);
  await dashBoardPage.GoTo();
  await dashBoardPage.ClickIAgree();
  await dashBoardPage.ClickAvatar();
  //await dashBoardPage.ClickNajaviSe();
  await loginPage.EnterCredentialsAndSubmit(
    userData[1].username,
    userData[1].password
  );
  await loginPage.NotValidLogin();
});
