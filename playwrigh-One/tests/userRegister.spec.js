import { HomePage } from "../pages/userRegister/userRegisterPage";
import { test } from "@playwright/test";
test.describe("Login",()=>{
    test('Open the home page', async ({ page }) => {
        const homePage = new HomePage (page)
        await homePage.goToHome()
        await homePage.clickLogin()
    });
})

