const { test, expect } = require('@playwright/test')

test('Verify login functionality with valid credentials',async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('suvarna')
    await page.locator('#loginpassword').fill('adwait')
    await page.locator('button[onclick="logIn()"]').click()
    await expect(page.locator('a[id="cat"]')).toBeVisible()


})