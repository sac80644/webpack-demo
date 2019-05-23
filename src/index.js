import _ from 'lodash';
import './style.css';
import Icon from './favicon.ico';
import Data from './data.xml';

function component(){
    const outerElement = document.createElement('div');
    const elementOne = document.createElement('div');
    const elementTwo = document.createElement('div');

    // Lodash
    elementOne.innerHTML = _.join(['Hello', 'webpack'], ' ');
    elementOne.classList.add('hello');

    // Add image to div
    const myIcon = new Image();
    myIcon.src = Icon;
    elementOne.appendChild(myIcon);

    elementTwo.innerHTML = _.join(['<p>', JSON.stringify(Data), '</p>'], '')

    outerElement.append(elementOne);
    outerElement.append(elementTwo);

    return outerElement;
}

document.body.appendChild(component());