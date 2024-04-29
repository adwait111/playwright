const { test, expect } = require("@playwright/test");
//1st way by using .framelocator
test('Handling Iframewith playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frame1 = await page.frameLocator('#firstFr')
    await frame1.locator('input[name="fname"]').fill('Suvarna')
    expect(frame1.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})
//2nd way by using .frame method name attribute 
test('Handling Iframe with .frame method in playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frame2 = await page.frame('firstFr')
    await frame2.locator('input[name="fname"]').fill('Suvarna')
    await frame2.locator('[name="lname"]').fill('Chaskar')
    expect(frame2.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})

//2nd way by using .frame method by URL
test('Handling Iframe with .frame method with URL in playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frame3 = await page.frame({url:'https://letcode.in/frameUI'})
    await frame3.locator('input[name="fname"]').fill('Suvarna')
    await frame3.locator('[name="lname"]').fill('Chaskar')
    expect(frame3.locator('input[name="fname"]')).toBeVisible()
    //expect(frame3.locator('class="title has-text-info"]')).toHaveText('You have entered Suvarna Chasakar')
    await page.waitForTimeout(4000)
})
