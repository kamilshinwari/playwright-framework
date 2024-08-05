const { Page, expect } = require('@playwright/test');
import HomePage from '../pages/HomePage';

export default class MyLoginPage {
  constructor(page) {
    this.page = page;
    this.inputEmail = "//input[@data-qa='login-email']";
    this.passWord = "//input[@placeholder='Password']";
    this.loginBtn = "//button[normalize-space()='Login']";
  }

  async navigateToLoginPage(){
    await this.page.goto("/login");
  }

  async fillUserName(userName) {
    await this.page.fill(this.inputEmail, userName);
  }

  async fillPassword(MyPassword) {
    await this.page.fill(this.passWord, MyPassword);
  }

  async clickLoginBtn() {
    await this.page.click(this.loginBtn);
   const homePage = new HomePage(this.page);
    return homePage;
  }

}
