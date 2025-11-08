import { expect } from '@playwright/test';

export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.usernameValue = page.locator('#userName-value');
    this.logoutBtn = page.getByRole('button', { name: 'Log out' });
    this.gotoStoreBtn = page.locator('#gotoStore');
  }
  async expectLoggedInAs(username) {
    await expect(this.usernameValue).toHaveText(username);
    await expect(this.logoutBtn).toBeVisible();
  }
  async gotoBookStore() {
    if (await this.gotoStoreBtn.isVisible().catch(() => false)) {
      await this.gotoStoreBtn.click();
    } else {
      await this.page.goto('/books');
    }
  }
  async logout() {
    await this.page.goto('/profile');
    await this.logoutBtn.click();
  }
}
