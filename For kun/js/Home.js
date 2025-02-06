const header = document.querySelector('.header')
const text = 'Welcome to your own personalised website'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    header.innerHTML += `<span>${text[index]}<span/>`
  } else {
    header.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.header span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; 
  element.style.animationDelay = `${randomDelay}s`;
});