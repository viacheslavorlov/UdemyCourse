'use strict';

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.append(script);
}

loadScript('./test.js');

loadScript('./some.js');