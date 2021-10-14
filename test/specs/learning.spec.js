import PinkNblue from '../pageobjects/home.page'

describe('Learning Page', () => {
    it('Verify learning page', () => {
        PinkNblue.open()  
        PinkNblue.Learning.click()  // Click to Learning
        expect(browser).toHaveTitle('PinkNBlu - more than parenting') // Verify Title
        const elem = $('.page-header')
        expect(elem).toHaveText('Learning')  // Verify Text
        PinkNblue.compareNow.click() //Click Compare now
        browser.pause(10000)
    })

})