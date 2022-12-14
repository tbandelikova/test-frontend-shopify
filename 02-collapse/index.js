let button = document.querySelector('.collapsible__button');
let buttonText = document.querySelectorAll('.collapsible__action');
let visible = document.querySelector('.collapsible__action--visible');
let hidden = document.querySelector('.collapsible__action--hidden');
let content = document.querySelector('.collapsible__content');

//STYLES

let collapseButtonStyle = {
    width: '500px',
    backgroundColor: '#f542a4',
    color: 'white',
    padding: '10px',
    fontSize: '20px',
    borderRadius: '20px',
    position: 'relative',
    zIndex: '1',
    cursor: 'pointer',
}

let contentStyle = {
    width: '300px',
    backgroundColor: '#f9fae6',
    color: 'black',
    padding: '10px',
    fontSize: '16px',
    lineHeight: '1.5',
    border: '1px dashed #f4fa84',
    position: 'absolute',
    top: '60px',
    left: '90px',
}

function applyStyles() {
    hidden.style.display = 'none';
    Object.entries(collapseButtonStyle).map(([key, value]) => {
        button.style[key] = value;
    });
    
    Object.entries(contentStyle).map(([key, value]) => {
        content.style[key] = value;
    })
}

applyStyles();

//ANIMATION VARIANTS

let contentCollapse = content.animate(
    [
        { transform: 'translateY(-150%) scale(0)' },
        { transform: 'translateY(-50%) scale(0)' },
        { transform: 'translateY(0) scale(1)'},
      ],
        {
            duration: 500, 
            easing: 'ease-in-out',
            fill: 'both' 
        }
);
// let opacity = content.animate(
//     [
//         { opacity: '0' },
//         { opacity: '0.5' },
//         { opacity: '1'},
//       ],
//         {
//             duration: 500, 
//             easing: 'ease-in-out',
//             fill: 'both' 
//         }
// );
// let flips = content.animate(
//     [
//         { transform: 'translateX(-150%) rotate(-720deg)' },
//         { transform: 'translateX(-50%) rotate(-360deg)' },
//         { transform: 'translateX(0)'},
//       ],
//         {
//             duration: 800, 
//             easing: 'ease-in-out',
//             fill: 'both' 
//         }
// );

//ACTIONS

function handleClick() {
    button.innerText === '???????????? ????????????????????' ? contentCollapse.play() : contentCollapse.reverse();  

    buttonText.forEach((item) => {   
        item.classList.toggle('collapsible__action--hidden');
        item.classList.toggle('collapsible__action--visible');
        item.style.display = item.classList.contains('collapsible__action--hidden') ? 'none' : 'block';
    })
    button.innerText === '???????????? ????????????????????' ? contentCollapse.play() : contentCollapse.reverse();
}

button.addEventListener('click', () => handleClick());

button.addEventListener('mousedown', () => {
    button.style.backgroundColor = '#f50a5c',
    button.style.transform = 'scale(0.95)'});

button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '#f542a4',
    button.style.transform = 'scale(1)'});