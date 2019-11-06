let btn = document.querySelector('.btn'),
    body = document.querySelector('.body'),
    textarea = document.createElement('textarea'),
    ruMas = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 
            'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 
            'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
    ruSupMas = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'],
    engMas = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 
            'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 
            'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
    engSupMas = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    check = 0,
    keyboard,
    div,
    span,
    sup,
    switcher,
    mas = [];

    if (sessionStorage.switcher) {
        switcher = sessionStorage.switcher;
    } else switcher = 0;

btn.addEventListener('click', () => {
    if (check === 0) {
        keyboard = document.createElement('div');
        keyboard.className = 'keyboard';
        textarea.className = 'textarea';
        body.appendChild(textarea);
        body.appendChild(keyboard);

        for (let i = 0; i < 5; i++) {
            div = document.createElement('div');
            div.className = 'row';
            keyboard.appendChild(div);
            let row = document.querySelectorAll('.row');
            open(i, row);
        }

        if (switcher == 0) {
            ruLang();
            mas = [];
        } else if (switcher == 2) {
            engLang();
            mas = [];
        }
        
        btn.blur();
        event();
        check = 1;

    } else {
        textarea.textContent = '';
        body.removeChild(keyboard);
        body.removeChild(textarea);
        check = 0;
    }             
});

function open (k, row) {
    let optionalText = 'optional-text',
        n;

    switch (k) {
        case 0 : {
            n = 14;
            break;
        }
        case 1 : {
            n = 15;
            break;
        }
        case 2 : {
            n = 13;
            break;
        }
        case 3 : {
            n = 14;
            break;
        }
        case 4 : {
            n = 9;
            break;
        }
    }
    for (let i = 0; i < n; i++) {

        span = document.createElement('span');
        sup = document.createElement('sup');
        div = document.createElement('div');

        if (k === 0 && i === 13) {
            div.className = 'button btn-option button-backspace';
            span.className = optionalText;
        } else if (k === 1 && i === 0) {
            div.className = 'button btn-option button-tab';
            span.className = optionalText;
        } else if (k === 1 && i === 14) {
            div.className = 'button btn-option del';
            span.className = optionalText;
        } else if (k === 2 && i === 0) {
            div.className = 'button btn-option caps';
            span.className = optionalText;
        } else if (k === 2 && i === 12) {
            div.className = 'button btn-option enter';
            span.className = optionalText;
        } else if (k === 3 && i === 0) {
            div.className = 'button btn-option shift left-shift';
            span.className = optionalText;
        } else if (k === 3 && i === 12) {
            div.className = 'button btn-option up';
            span.className = optionalText;
        } else if (k === 3 && i === 13) {
            div.className = 'button btn-option shift right-shift';
            span.className = optionalText;
        } else if (k === 4 && (i === 0 || i === 5)) {
            div.className = 'button btn-option ctrl';
            span.className = optionalText;
        } else if (k === 4 && i === 1) {
            div.className = 'button btn-option win';
            span.className = optionalText;
        } else if (k === 4 && (i === 2 || i === 4)) {
            div.className = 'button btn-option alt';
            span.className = optionalText;
        } else if (k === 4 && i === 3) {
            div.className = 'button btn-option space';
            span.className = optionalText;
        } else if (k === 4 && i > 5) {
            div.className = 'button btn-option arrow';
            span.className = optionalText;
        } else {
            div.className = 'button button-text';
            span.className = 'text';
            sup.className = 'top';
        }

        div.appendChild(sup);
        div.appendChild(span);
        row[k].appendChild(div);
        keyboard.appendChild(row[k]);

    }
}

function ruLang () {

    let spanText = document.querySelectorAll('span');
    let supText = document.querySelectorAll('sup');

    spanText.forEach((element, i) => {
        element.textContent = ruMas[i];
    });

    ruSupMas.forEach((elem, i)=> {
        supText[i + 1].textContent = elem;
    });

    supText[25].textContent = '/';
    switcher = 0;

}

function engLang () {

    let spanText = document.querySelectorAll('span');
    let supText = document.querySelectorAll('sup');

    spanText.forEach((element, i) => {
        element.textContent = engMas[i];
    });

    engSupMas.forEach((elem, i)=> {
        supText[i + 1].textContent = elem;
    });

    supText[25].textContent = '|';
    switcher = 2;

}

function event () {

    let buttonText = document.querySelectorAll('.button-text'),
        buttonEnter = document.querySelector('.enter'),
        buttonBackspace = document.querySelector('.button-backspace'),
        buttonTab = document.querySelector('.button-tab'),
        spanText = document.querySelectorAll('span'),
        buttonShift = document.querySelector('.shift'),
        buttonCaps = document.querySelector('.caps'),
        buttonSpace = document.querySelector('.space'),
        checker = 0;

    buttonEnter.addEventListener('click', () => textarea.textContent += '\n');
    buttonBackspace.addEventListener('click', () => textarea.textContent = textarea.textContent.slice(0, textarea.textLength - 1));
    buttonTab.addEventListener('click', () => textarea.textContent += '   ');
    buttonSpace.addEventListener('click', () => textarea.textContent += ' ');

    buttonText.forEach(elem => {
        elem.addEventListener('click', () => {
            textarea.textContent += elem.children[1].textContent;
        });
    });

    buttonShift.addEventListener('mousedown', () => { 
        buttonText.forEach((elem, i, arr) => {
            arr[i].children[1].textContent = elem.children[1].textContent.toUpperCase();
        });
    });

    buttonShift.addEventListener('mouseup', () => { 
        buttonText.forEach((elem, i, arr) => {
            arr[i].children[1].textContent = elem.children[1].textContent.toLowerCase();
        });
    });

    buttonCaps.addEventListener('click', () => { 
        if (!checker) {
            buttonText.forEach((elem, i, arr) => {
                arr[i].children[1].textContent = elem.children[1].textContent.toUpperCase();
            });
            buttonCaps.id = 'active';
            checker = 1;
        } else {
            buttonText.forEach((elem, i, arr) => {
                arr[i].children[1].textContent = elem.children[1].textContent.toLowerCase();
            });
            buttonCaps.id = '';
            checker = 0;
        }
        
    });

    document.addEventListener('keydown', (event) => {
        spanText.forEach((elem) => {
            if(elem.textContent.toLowerCase() == event.key.toLowerCase() || 
            (elem.textContent.toLowerCase() == 'caps lock' && 'capslock' == event.key.toLowerCase()) || 
            (elem.textContent.toLowerCase() == 'ctrl' && 'control' == event.key.toLowerCase()) || 
            (elem.textContent.toLowerCase() == 'del' && 'delete' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == '↑' && 'arrowup' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == '↓' && 'arrowdown' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == '→' && 'arrowright' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == '←' && 'arrowleft' == event.key.toLowerCase()) || 
            (elem.textContent.toLowerCase() == 'win' && 'meta' == event.key.toLowerCase()))  {

                elem.parentElement.id = 'active';

                if (event.key.toLowerCase() == 'shift') {

                    mas[0] = 'shift';
                    switchLang();

                    buttonText.forEach((elem, i, arr) => {
                        arr[i].children[1].textContent = elem.children[1].textContent.toUpperCase();
                    });
                } else elem.parentElement.click();

                if (event.key.toLowerCase() == 'alt') mas[1] = 'alt';
            }
        });
    });

    document.addEventListener('keyup', (event) => {
        spanText.forEach((elem) => {
            if(elem.textContent.toLowerCase() == event.key.toLowerCase() || 
            (elem.textContent.toLowerCase() == 'ctrl' && 'control' == event.key.toLowerCase()) || 
            (elem.textContent.toLowerCase() == 'del' && 'delete' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == '↑' && 'arrowup' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == '↓' && 'arrowdown' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == '→' && 'arrowright' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == '←' && 'arrowleft' == event.key.toLowerCase()) ||
            (elem.textContent.toLowerCase() == 'win' && 'meta' == event.key.toLowerCase())) {
                if (event.key.toLowerCase() == 'shift') {
                    buttonText.forEach((elem, i, arr) => {
                        arr[i].children[1].textContent = elem.children[1].textContent.toLowerCase();
                    });
                }
                elem.parentElement.id = '';
            }
        });
    });
    
    function switchLang(){

        if (mas[0] == 'shift' && mas[1] == 'alt') {
            if (switcher == 2) {
                ruLang();
                mas = [];
            }else if (switcher == 0) {
                engLang();
                mas = [];
            }
        }
    }
}

window.onunload = () => sessionStorage.switcher = switcher;
