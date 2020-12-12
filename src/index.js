import 'core-js/stable';
import 'regenerator-runtime/runtime';

import snowflake1 from "../assets/snowflake1.png"

function create_snowflake() {
     const elem = document.createElement('img');
     elem.setAttribute('src', snowflake1);
     elem.classList.add('snowflake');
     const xpos = Math.floor(Math.random() * Math.floor(90));
     elem.style.right = `${xpos}vw`;
     return elem;
}

setInterval(() => {
     const body = document.querySelector('body');
     const elem = create_snowflake();
     body.appendChild(elem)
}, 1000)