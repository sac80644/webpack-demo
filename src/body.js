import _ from 'lodash';
import './style.css';
import Icon from './favicon.ico';
import Data from './data.xml';

export default function component(){
    const outerElement = document.createElement('div');
    const elementOne = document.createElement('div');
    const hiddenElement = document.createElement('input');
    const btnElement = document.createElement('div');

    // Lodash
    elementOne.innerHTML = _.join(['Hello', 'webpack.  HMR working!  Two hot modules, print and body. Now using webpack-hot-middleware!'], ' ');
    // elementOne.classList.add('hello');

    // Add image to div
    const myIcon = new Image();
    myIcon.src = Icon;
    outerElement.appendChild(myIcon);

    //hidden data
    hiddenElement.type = 'hidden';
    hiddenElement.id = 'hiddenData';
    hiddenElement.value = JSON.stringify(Data);

    //button
    const btn = document.createElement('button');
    btn.id = 'btnClickMe';
    btn.innerHTML = 'Click me and check the console!';
    btnElement.appendChild(btn);


    outerElement.append(elementOne);
    outerElement.append(hiddenElement);
    outerElement.append(btnElement);

    return outerElement;
}
