const cookie = ["Plan for many pleasures ahead.", "Sell your ideas-they have exceptional merit.", "Experience is the best teacher.",
    "A closed mouth gathers no feet.", "Bloom where you are planted.", "Beware of all enterprises that require new clothes",
    "An exciting opportunity lies ahead of you.", "Goodness is the only investment that never fails.", "Live this day as if it were your last.", 
    "Borrow money from a pessimist. They don't expect it back.",
];   

const fonts = ["Georgia", "Times New Roman", "Helvetica", "Impact", "Lucida Sans Unicode", "Courier New", "Lucida Console", "monospace"]

const cookieDiv = document.getElementById('fortune-cookie'); // Line 1-10: Initialized cookie and fonts Array, Selectes elments such as 'fortune-cookie' as well as the New Div.
let ndiv = document.querySelector('.cookie-style');

if (!ndiv){    //Line 12-18: This condition checks if new div exists or not, If not it Creates a new div while loading into the page.
    ndiv = document.createElement('div');
    ndiv.classList.add('cookie-style');
    cookieDiv.appendChild(ndiv);
    const randCookie = Math.floor(Math.random() * cookie.length);
    ndiv.innerText = cookie[randCookie];
}

let b1 = document.getElementById('b1'); //Line 20-28: Initilized buttons and added eventListener and relevant functions to each buttons.
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');

b1.addEventListener('click', newdiv1);
b2.addEventListener('click', newdiv2);
b3.addEventListener('click', newdiv3);
b4.addEventListener('click', newdiv4);

function newdiv1(link){  //Line 30-34: This function generates random font colors.
    const set1 = ['#FFFFFF', 'red', 'blue', '20px', 'monospace'];
    ndiv.style.color = set1[0];
    ndiv.style.backgroundColor = set1[1];
    ndiv.style.borderColor = set1[2];
    ndiv.style.fontSize = set1[3];
    ndiv.style.fontFamily = set1[4];

}

function newdiv2(link){  //Line 36-39: This function generates random background colors.
    const set2 = ['wheat', 'blue', 'yellow', '32px', 'Impact'];
    ndiv.style.color = set2[0];
    ndiv.style.backgroundColor = set2[1];
    ndiv.style.borderColor = set2[2];
    ndiv.style.fontSize = set2[3];
    ndiv.style.fontFamily = set2[4];
}

function newdiv3(link){  //Line 41-44: This function generates random border colors.
    const set3 = ['#FFA725', 'green', '#FFEDFA', '25px', 'Courier New'];
    ndiv.style.color = set3[0];
    ndiv.style.backgroundColor = set3[1];
    ndiv.style.borderColor = set3[2];
    ndiv.style.fontSize = set3[3];
    ndiv.style.fontFamily = set3[4];
}

function newdiv4(link){ //Line 46-52: This function generates random fonts from fonts array and random font-sizes.
    const set4 = ['#FFF2F2', 'blue', '#A0C878', '36px', 'Lucida Console'];
    ndiv.style.color = set4[0];
    ndiv.style.backgroundColor = set4[1];
    ndiv.style.borderColor = set4[2];
    ndiv.style.fontSize = set4[3];
    ndiv.style.fontFamily = set4[4];
}

