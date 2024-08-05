import {test} from '@playwright/test';
import MyLoginPage from '../pages/LoginPage';

test("test", async({page})=>{

    const loginpage = new MyLoginPage(page);

    await loginpage.navigateToLoginPage();
    await loginpage.fillUserName("mansoornasir.qa+3@gmail.com");
    await loginpage.fillPassword("Admin@123");

    const homePages = await loginpage.clickLoginBtn();
    await homePages.expectedDeleteBtn();
});
