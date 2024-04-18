
const elementProfile =document.getElementById("profile");
console.log(elementProfile);
console.log(elementProfile.innerHTML);


console.log(`------ querySelector() with element name -----`);
const elementH2 = document.querySelector("h2");
console.log(elementH2);
console.log(elementH2.innerHTML);


console.log(`------ querySelector() with id techStack -----`);
const elementTechStack = document.querySelector('#techStack');
console.log(elementTechStack.innerHTML);


console.log(`------ querySelector() with class ui -----`);
const elementUI = document.querySelector('.ui');
console.log(elementUI.innerHTML);


console.log(`------ querySelectorAll() with element name -----`);
const elementsLi = document.querySelectorAll('li');
for (const element of elementsLi) {
    console.log(element.innerHTML);
}


console.log(`------ querySelectorAll() with class name -----`);
const elementsUi = document.querySelectorAll('.ui');
for (const element of elementsUi) {
    console.log(element.innerHTML);
}


console.log(`----- Modifying an existing element text -----`);
const techStackElement = document.querySelector('#techStack');
techStackElement.innerHTML = "My Expertise in UI";


console.log(`-----Changing CSS------`);
techStackElement.style.color ="orange";


console.log(`-----Creating an element-----`);
const h2Element = document.createElement("h2");
const textNodeProject = document.createTextNode("Project Name: College Management System.")
h2Element.appendChild(textNodeProject);
h2Element.style.color = "green";

const projectNodeDiv = document.querySelector('.project');
projectNodeDiv.appendChild(h2Element);


console.log(`---Removing an element---`);
const skillUlNode = document.querySelector('#skill');
const JsLiNode = document.querySelector('#js');
skillUlNode.removeChild(JsLiNode);



function eventClicks(){
    console.log("Hey... He clicked me....");
}

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () =>{              //arrow function.
    console.log('Add Button Click');
    // alert('Heyy.. you clicked me...');
    // const num=    prompt("Enter number:", 0);
    // console.log(num);
    // const result =confirm("Are you sure?");
    // console.log(result);

});

// addButton.addEventListener('click', function(){
//     console.log('Add button click');
// });


const addButton1 = document.querySelector('#add');
addButton1.addEventListener('click', () => {
    const num = prompt("enter the valid number to perform square", 1);
    // alert(num * num);
    const elementPara = document.createElement('p');
    const textNodeSquare= document.createTextNode(`Number ${num} square is ${num * num}`);
    elementPara.style.color ='orange';
    elementPara.appendChild(textNodeSquare)

    const squareResultElement = document.querySelector('.squareResult');
    squareResultElement.appendChild(elementPara);
});



