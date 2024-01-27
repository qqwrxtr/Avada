let masiv  = ['Home' , 'Shop template' , 'Category template' , 'Tag template' , 'Brand template' , 'Attribute template'];

let opt = document.getElementById('options');
let ul = document.createElement('ul');
opt.appendChild(ul);

for (let o = 0; o < masiv.length; o++) {
    let href = document.createElement('a');
    href.setAttribute('href' , `${masiv[o].toLowerCase()}.html`);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.appendChild(href);
    href.textContent = (`${masiv[o]}`)
}

let cont = document.getElementById('content')
