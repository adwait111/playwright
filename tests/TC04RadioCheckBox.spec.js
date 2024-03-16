const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Handling Radio buttons_1 in playwright',async({page})=>{
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
    await page.locator('input[id="vfb-7-1"]').check()
    await expect(page.locator('input[id="vfb-7-1"]')).toBeChecked()
    await page.waitForTimeout(3000)
    await page.locator('input[id="vfb-7-2"]').check()
    await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
    await expect(page.locator('input[id="vfb-7-2"]')).toBeChecked()
    await page.locator('input[id="vfb-7-3"]').check()
    await expect(page.locator('input[id="vfb-7-2"]')).not.toBeChecked()
    await expect(page.locator('input[id="vfb-7-3"]')).toBeChecked()
    await page.locator('input[id="vfb-7-1"]').check()
    await expect(page.locator('input[id="vfb-7-3"]')).not.toBeChecked()
})

test('Handling checkbox usiing click method',async({page})=>{
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-6-0"]')).not.toBeChecked()
    await page.locator('input[id="vfb-6-0"]').check()
    await page.waitForTimeout(3000)
    await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()
    await expect(page.locator('input[id="vfb-6-1"]')).not.toBeChecked()
    await page.locator('input[id="vfb-6-1"]').check()
    await page.waitForTimeout(3000)
    await expect(page.locator('input[id="vfb-6-1"]')).toBeChecked()
    await expect(page.locator('input[id="vfb-6-2"]')).not.toBeChecked()
    await page.locator('input[id="vfb-6-2"]').check()
    await page.waitForTimeout(3000)
    await expect(page.locator('input[id="vfb-6-2"]')).toBeChecked()
})
test.only('Handling checkboxs usiing click method',async({page})=>{
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-6-0"]')).not.toBeChecked()
    await page.locator('input[id="vfb-6-0"]').click()
    await page.waitForTimeout(3000)
    await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()
    await expect(page.locator('input[id="vfb-6-1"]')).not.toBeChecked()
    await page.locator('input[id="vfb-6-1"]').click()
    await page.waitForTimeout(3000)
    await expect(page.locator('input[id="vfb-6-1"]')).toBeChecked()
    await expect(page.locator('input[id="vfb-6-2"]')).not.toBeChecked()
    await page.locator('input[id="vfb-6-2"]').click()
    await page.waitForTimeout(3000)
    await expect(page.locator('input[id="vfb-6-2"]')).toBeChecked()
})