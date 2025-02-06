const title = document.querySelector('.title')
const text = 'This Is For You, Kunchok'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; 
  element.style.animationDelay = `${randomDelay}s`;
});

function createStars(numStars) {
		const starContainer = document.querySelector(".star-layers");

		for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 3; // Random size

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random twinkle speed

        starContainer.appendChild(star);
    }
}
	document.body.style.overflow = "auto";
	document.documentElement.style.overflow = "auto";
	createStars(75); // Create 75 stars dynamically