import { HomePage } from "../pages/userRegister/userRegisterPage";
import { test } from "@playwright/test";
test.describe("Login",()=>{
    test('Open the home page', async ({ page }) => {
        const home = new HomePage (page)
        await home.goToHome()
        await home.clickLogin()
    });
})

