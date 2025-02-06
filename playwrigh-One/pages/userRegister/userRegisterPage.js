import { selectors } from "playwright-core";
import { expect } from "playwright/test";

export class HomePage {
    constructor (page){
        this.page = page 
        this.loginButton = page.locator('g[clip-path="url(#clip0_440_247)"]');
    }

    async goToHome() {
        await this.page.goto("/");
    }

    async clickLogin() {
        await expect(this.loginButton.first()).toBeVisible({timeout:5000});
        await this.loginButton.first().click();
    }
}
