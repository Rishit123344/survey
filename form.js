class Form {

    constructor() {
        this.input = createInput("Participant Name");
        this.email = createInput("Participant Email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Come On Let's Do A Survey On Students");
        this.question1 = createElement('h3', "Q1. Do You Think We Should Have A Canteen In our School ?");
        this.radio = createRadio('h3');
        this.radio.option('Correct');
        this.radio.option('Wrong');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program ?");
        this.radio1 = createRadio('h3');
        this.radio1.option('Correct');
        this.radio1.option('Wrong');
        this.question3 = createElement('h3', "Q3.Do You Think That Our School Should Take On Trip On Every Year ? ");
        this.radio2 = createRadio('h3');
        this.radio2.option('Correct');
        this.radio2.option('Wrong');
    }


    display() {
        this.input.position(570, 255)
        this.email.position(570, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(500, 5)
        this.question1.position(500, 360)
        this.radio.position(700, 420)
        this.question2.position(500, 450)
        this.radio1.position(700, 510)
        this.question3.position(500, 540)
        this.radio2.position(700, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}