import PinkNblue from '../pageobjects/home.page'

describe('Learning Copmarision Page', () => {
    it('Verify Learning Comparison page', () => {
        PinkNblue.open()  // Open Website
        PinkNblue.learningComparision.click()  // Click Learning Comparision
        expect(browser).toHaveTitle('PinkNBlu - Learning Comparison')  // Verify Title
        expect(PinkNblue.selectGrade).toBeDisplayed()
        PinkNblue.selectGrade.selectByAttribute("value", "4")
        PinkNblue.selectGrade.selectByVisibleText("5")  // Select Grade 5
        browser.pause(500)
        expect(PinkNblue.selectCourse).toBeDisplayed()
        PinkNblue.selectCourse.selectByAttribute("value", "3")
        PinkNblue.selectCourse.selectByAttribute("value", "7") // Select Maths&Other
        PinkNblue.BookNow.click() // Click Book Now button
        browser.pause(10000)
        browser.switchWindow('https://www.vedantu.com/course/pro/class-5-CBSE')
        expect(browser).toHaveTitle('Vedantu Pro | LIVE Online Classes for Class 1 to 12, JEE & NEET') // Verify Title
    })

})