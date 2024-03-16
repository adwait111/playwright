// click
// doubleclick
// rightclick
// mouseover

const { test, expect } = require('@playwright/test')
// test("Verify click in palywright",async({page})=>{
//     await page.goto('https://demoqa.com/buttons')
//     await page.locator('#DpKsw').click()
// })

test('Verify doubleclick in playwright', async ({ page }) => {
    await page.goto("https://demoqa.com/buttons")
    await page.locator('#doubleClickBtn').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await expect(page.locator('#doubleClickMessage')).toHaveText('')
})

test('Verify rightclick in playwright', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({ button: 'right' })
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
    await page.waitForTimeout(4000)
})

test.only('Verify Mouse hover in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me Third!').hover()
    await page.getByText('Link 1').nth(2).click()
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
    await page.waitForTimeout(4000)
})
