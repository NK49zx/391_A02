document.getElementById('b1').addEventListener('click', function(){ //Function for ADD button. Clicking on the button adds the input to the div.
    const txtArea = document.getElementById('txt');  //Extracts text from the TextArea and saves the value in txt 
    const txt = txtArea.value;

    if (txt !== ''){ //If the value of txt is not empty, key variable is initialized, where the variable produces unique keys for localStorage.
        const key = `item_${Date.now()}`;
        newDiv(key, txt); //Creates new div by passing the txt and keys.
        localStorage.setItem(key, txt); //Saves the content and key of the created elements
        txtArea.value = '';
    };

});

function newDiv(key, txt){ //Generates the new div, check and cross buttons.
    const content = document.getElementById('content');
    const nDiv = document.createElement('div');
    const check = document.createElement('button');
    const cross= document.createElement('button');
    const span = document.createElement('span')
    
    span.innerText = txt;
    cross.innerText = 'X';
    check.innerHTML = '&#10003;'; //Generates Check Icon.
    
    cross.classList.add('cross');
    check.classList.add('check');

    nDiv.style.display = 'flex'; //Adds style to the new divs.
    nDiv.style.alignItems = 'center';
    nDiv.style.justifyContent = 'space-around';
    nDiv.style.gap = '20px'
    nDiv.classList.add('div-styles');

    nDiv.appendChild(check);
    nDiv.appendChild(span);
    nDiv.appendChild(cross);
    content.appendChild(nDiv);

    check.addEventListener('click', function(){ // Function for the Check button. The If and Else condition are used as toggle feature to cross out the inner text.    
        if (span.style.textDecoration !== 'line-through'){
            span.style.textDecoration = 'line-through';
            span.style.opacity = '50%';
            check.style.opacity = '20%';
        }
        else{
            span.style.textDecoration = 'none';
            span.style.opacity = '100%';
            check.style.opacity = '100%';
        }
    });

    cross.addEventListener('click', function(){ //Function for the Cross button. Removes the associated div from the list and localStorage.
        content.removeChild(nDiv);
        localStorage.removeItem(key)
    });

}

function loadItems(){ //Function for loading the saved elements
    for (let k = 0; k<localStorage.length; k++) {
        let key = localStorage.key(k);
        let txt = localStorage.getItem(key);
        newDiv(key, txt);
    }
}

window.addEventListener('load', loadItems); //Displays the saved data.
