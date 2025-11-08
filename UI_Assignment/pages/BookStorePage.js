import { expect } from '@playwright/test';

export class BookStorePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#searchBox');
    this.firstRow = page.locator('.rt-tbody .rt-tr-group .rt-tr').first();
    this.titleCell = this.firstRow.locator('.rt-td:nth-child(2) a');
    this.authorCell = this.firstRow.locator('.rt-td:nth-child(3)');
    this.publisherCell = this.firstRow.locator('.rt-td:nth-child(4)');
  }
  async search(query) {
    await this.searchBox.fill(query);
    await expect(this.firstRow).toBeVisible();
  }
  async expectFirstResultContains(titlePart) {
    await expect(this.titleCell).toContainText(new RegExp(titlePart, 'i'));
  }
  async getFirstResultData() {
    return {
      title: (await this.titleCell.textContent())?.trim() ?? '',
      author: (await this.authorCell.textContent())?.trim() ?? '',
      publisher: (await this.publisherCell.textContent())?.trim() ?? ''
    };
  }
}
