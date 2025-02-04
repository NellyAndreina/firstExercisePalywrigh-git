export class HomePage {
    constructor(page) {
      this.page = page;
      this.loginButton = 'g[clip-path="url(#clip0_440_247)"]';
    }
  
    async goToHome() {
      await this.page.goto("https://demo.spreecommerce.org"); 
    }
  
    async clickLogin() {
      await this.page.click(this.loginButton)
    }
  }
  