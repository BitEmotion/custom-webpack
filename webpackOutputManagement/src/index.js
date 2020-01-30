// import './style.css';
import printMe from './print';

const makeComponent = () => {
    const ret_element = document.createElement("div");
    ret_element.innerHTML = "hello";

    const btn = document.createElement("button");
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    ret_element.appendChild(btn);

    return ret_element;
}

document.body.appendChild(makeComponent());
console.log("hello webpack");