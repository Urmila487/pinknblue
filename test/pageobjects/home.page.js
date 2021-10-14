import Page from './page';

class PinkNblue extends Page {
    open() {
        return super.open('/')
    }

    get learningComparision(){
        return $('.learning_services_click')
    }

    get selectGrade() {return $('#grade')}


    get selectCourse() {return $('#coursetype')}


    get BookNow() {return $('.btn')}


    get plusBanner() {
        return $('.plus_banner_gtag')
    }


    get Learning(){
        return $('.learning_nav_gtag ')
    }

    get compareNow() {return $('.btn')}

}



export default new PinkNblue();
