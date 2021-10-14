import PinkNblue from '../pageobjects/home.page'

describe('Home Page', () => {
    it('Verify title of PinkNblue page', () => {
        PinkNblue.open()   // Open application
        expect(browser).toHaveTitle('PinkNBlu - more than parenting') // Verify title
    })

    it('Click Plus banner card', () => {
        PinkNblue.open()
        PinkNblue.plusBanner.click()   // Click to Plus Banner
        browser.pause(10000)
        browser.switchWindow('https://pinknblu.com/plus_campaign') 
        const elem = $('.page-header')
        expect(elem).toHaveText('PLUS: PinkNBlu Learning for Ultimate Superkid') // Verify Text
    })


})