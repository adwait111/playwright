const {test,expect} = require('@playwright/test')

test('Verify login functionality with valid credentials',async({page})=>{
    //AAA
    // step 1 navigate to url
    await page.goto('https://www.saucedemo.com/')
    //step 2 Enter Username
    //<input id = "One" class= "TextBox">
    //Common Formula = tagName[attr = value]
    //input[id = "One"]
    await page.locator('input[id="user-name"]').fill('standard_user')
    // step 3 Enter password
    await page.locator('input[id="password"]').fill('secret_sauce')
    // step 4 click on login button
    await page.locator('input[id="login-button"]').click()
    // step 5 assertion / validation
    await expect(page.locator('.title')).toBeVisible()
    await expect(page.locator('.title')).toHaveText('Products')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('div[class="app_logo"]')).toHaveText('Swag Labs')

})
test('Verify the login functionality with invalid credentials',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('standard_user')
    await page.locator('input[id="password"]').fill('secretsauce')
    await page.locator('input[id="login-button"]').click()
    await expect(page.locator('div[class="error-message-container error"]')).toBeVisible()
    await expect(page.locator('div[class="error-message-container error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
   

})