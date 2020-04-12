// let input, button, greeting, radio, email, mail, playerCount = 0,
//     index;

// function setup() {
//     createCanvas(600, 600);


//     input = createInput();
//     input.position(670, 255);
//     email = createInput();
//     email.position(670, 165);

//     text = createElement('h1', "Lets Do A Survey On Our School Students");
//     text.position(600, 5);

//     question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
//     question1.position(400, 300)
//     radio = createRadio();
//     radio.position(600, 360)
//     radio.option('yes');
//     radio.option('No');

// question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
// question2.position(400, 390)
// radio1 = createRadio();
// radio1.position(600, 450)
// radio1.option('yes');
// radio1.option('No');

// question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
// question3.position(400, 490)
// radio2 = createRadio();
// radio2.position(600, 550)
// radio2.option('yes');
// radio2.option('No');

// button = createButton('submit');
// button.position(700, 600);
// button.mousePressed(greet);

// greeting = createElement('h2', ' Type your name in the input box');
// greeting.position(600, 105);

//     mail = createElement('h2', 'Put your email id in the below input box');
//     mail.position(600, 200);

//     textAlign(CENTER);
//     textSize(50);
// }





// class Form {

//     constructor() {
//         this.input = createInput("Name");
//         this.email = createInput("email")
//         this.button = createButton('Submit');
//         this.greeting = createElement('h2');
//         this.text = createElement('h1', "Lets Do A Survey On Our School Students");
//         this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
//         this.radio = createRadio();
//         this.radio.option('yes');
//         this.radio.option('No');
//         this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
//         this.radio1 = createRadio();
//         this.radio1.option('yes');
//         this.radio1.option('No');
//         this.question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
//         this.radio2 = createRadio();
//         this.radio2.option('yes');
//         this.radio2.option('No');
//     }


//     display() {
//         this.input.position(670, 255)
//         this.email.position(670, 165)
//         this.button.position(700, 600)
//         this.greeting.position(600, 105)
//         this.text.position(600, 5)
//         this.question1.position(600, 360)
//         this.radio.position(600, 360)
//         this.question2.position(600, 450)
//         this.radio1.position(600, 450)
//         this.question3.position(400, 490)
//         this.radio2.position(600, 550)

//         this.button.mousePressed(() => {
//             User.name = this.input.value();
//             User.email = this.email.value();
//             playerCount += 1;
//             index = playerCount;
//             User.update();
//             User.updateCount(playerCount);
//         });

//     }
// }
var peopleCount = 0;

function setup() {
    canvas = createCanvas(600, 600);
    database = firebase.database();
    form = new Form()
    form.display();
    user = new User();

}