export class LoginPage {
  constructor(page) {
    this.page = page;
    // Use ids (most reliable on DemoQA)
    this.userInput = page.locator('#userName');
    this.passInput = page.locator('#password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }
  async goto() {
    await this.page.goto('/login');
    // ensure inputs are ready before typing
    await this.userInput.waitFor({ state: 'visible' });
    await this.passInput.waitFor({ state: 'visible' });
  }
  async login(username, password) {
    await this.userInput.fill(username);
    await this.passInput.fill(password);
    await this.loginBtn.click();
  }
}
