const { Page, expect } = require('@playwright/test');

export default class HomePage {
  constructor(page) {
    this.page = page;
    this.deleteBtn = "//a[normalize-space()='Delete Account']";
  }

  async expectedDeleteBtn() {
    await expect(this.page.locator(this.deleteBtn)).toBeVisible({timeout: 150000});
  }
}
