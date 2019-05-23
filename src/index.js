import _ from 'lodash';
import './style.css';
import Icon from './favicon.ico';

function component(){
    const element = document.createElement('div');

    // Lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add image to div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());