var elemArray = ['body', 'li', 'ul', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'img'];
var imgOpacity = 0.7;
var bgOpacity = 0.28;
var bodyDefault = 'rgba(255,255,0,0.6)';

function randy() {
    var numb = Math.floor(Math.random() * 255);
    return numb;
};

function colorSetter(tag) {
    var elems = document.getElementsByTagName(tag);
    var col = 'rgba(' + randy() + ',' + randy() + ',' + randy() + ',' + bgOpacity + ')';
    for (var i = 0; i < elems.length; i += 1) {
        console.log(col);
        if (tag === 'img') {
            console.log('its an image');
            elems[i].style.opacity = imgOpacity;
        } else {
            elems[i].style.backgroundColor = col;
        }
    }
}


function whenClicked() {
    for (var i = 0; i < elemArray.length; i++) {
        colorSetter(elemArray[i]);
        console.log(elemArray[i]);
    }

    document.getElementsByTagName('body')[0].style.backgroundColor = bodyDefault;
}

whenClicked();

//to do: get elements grouped by unique classes  and set color that way
//also check whether it already has a backgroundColor  - if so set opacity
//check if it has a background img set opacity to 0.5.
