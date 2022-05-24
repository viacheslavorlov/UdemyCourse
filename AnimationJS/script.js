const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;
//
// // function myAnimation() {
// //     let pos = 0;
//
//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    if (pos < 300) {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + 'px';
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));
                                        // нужно оборачивать в колбэк что б  не вызывалась сразу же
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);