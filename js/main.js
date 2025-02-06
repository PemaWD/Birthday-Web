
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY BRITHDAY. I LOVE U').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

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
	document.body.style.overflow = "hidden";
	document.documentElement.style.overflow = "auto";
	createStars(75); // Create 150 stars dynamically