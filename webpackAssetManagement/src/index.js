import './style.css';
import Icon from './icon.png';

const makeComponent = () => {
    const ret_element = document.createElement("div");
    ret_element.innerHTML = "hello";
    ret_element.classList.add("hello");

    const myIcon = new Image();
    myIcon.src = Icon;

    ret_element.appendChild(myIcon);

    return ret_element;
}

document.body.appendChild(makeComponent());
console.log("hello webpack");