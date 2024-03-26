const { test, expect } = require('@playwright/test')
test('Handle js simple alert with playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    //js                   playwright
    //SimpalAlert          alert
    //ConfirmAlert         confirm
    //PromptAlert          prompt
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
})

test('Handle js confirm alert with playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async confirmAlert => {
        await expect(confirmAlert.message()).toContain('I am a JS Confirm')
        await expect(confirmAlert.type()).toContain('confirm')
        // console.log(confirmAlert.message())
        // console.log(confirmAlert.type())
        //await confirmAlert.accept()
        confirmAlert.dismiss()
    })

    await page.locator('button[onclick="jsConfirm()"]').click()
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    await page.waitForTimeout(4000)
})

test.only('Handle js Prompt alert with playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async promptAlert => {
        await expect(promptAlert.message()).toContain('I am a JS prompt')
        await expect(promptAlert.type()).toContain('prompt')
        // console.log(promptAlert.message())
        // console.log(promptAlert.type())
        //await promptAlert.accept('suvarna')
        promptAlert.dismiss()
    })

    await page.locator('button[onclick="jsPrompt()"]').click()
    //await expect(page.locator('#result')).toHaveText('You entered: suvarna')
    await expect(page.locator('#result')).toHaveText('You entered: null')
    await page.waitForTimeout(4000)
})