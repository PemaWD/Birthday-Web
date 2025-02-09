const title = document.querySelector('.title');
const text = 'Our Love Is A Puzzle Only We Can Complete'.split('');

title.innerHTML = ''; // Clear previous content

text.forEach((char) => {
  const span = document.createElement('span');
  span.textContent = char !== ' ' ? char : '\u00A0'; // Ensures proper spacing
  span.style.animationDelay = `${Math.random() * 3}s`;
  title.appendChild(span);
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

	/*Jigsaw JS*/


	const imageSrc = 'images/puzzle.jpg';
			const gridSize = 5;
			const tileSize = 100; // Adjust to match your CSS tile size
			const container = document.getElementById('puzzle-container');
			const openBtn = document.getElementById('open-button');

			function createPuzzle() {
				let indexes = [...Array(gridSize * gridSize).keys()].sort(() => Math.random() - 0.5);

				indexes.forEach((index, position) => {
					let row = Math.floor(index / gridSize);
					let col = index % gridSize;

					let piece = document.createElement('div');
					piece.classList.add('puzzle-piece');
					piece.style.backgroundImage = `url(${imageSrc})`;
					piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
					piece.draggable = true;
					piece.dataset.index = position; // Current position
					piece.dataset.correctIndex = index; // Correct position

					piece.addEventListener('dragstart', dragStart);
					piece.addEventListener('dragover', dragOver);
					piece.addEventListener('drop', drop);

					container.appendChild(piece);
				});
			}

			let draggedPiece = null;

			function dragStart(e) {
				draggedPiece = e.target;
			}

			function dragOver(e) {
				e.preventDefault();
			}

			function drop(e) {
				if (!draggedPiece || !e.target.classList.contains('puzzle-piece')) return;

				// Swap indexes
				let tempIndex = draggedPiece.dataset.index;
				draggedPiece.dataset.index = e.target.dataset.index;
				e.target.dataset.index = tempIndex;

				// Swap elements in the DOM
				let draggedClone = draggedPiece.cloneNode(true);
				let targetClone = e.target.cloneNode(true);

				container.replaceChild(draggedClone, e.target);
				container.replaceChild(targetClone, draggedPiece);

				// Reattach event listeners
				[draggedClone, targetClone].forEach(piece => {
					piece.addEventListener('dragstart', dragStart);
					piece.addEventListener('dragover', dragOver);
					piece.addEventListener('drop', drop);
				});

				// Check completion after swap
				checkCompletion();
			}

			function checkCompletion() {
				let pieces = [...container.children]; // Get current puzzle pieces
				let isCorrect = pieces.every(piece => piece.dataset.index == piece.dataset.correctIndex);

				if (isCorrect) {
					setTimeout(() => {
						alert('Congratulations! You solved the puzzle!');
						openBtn.style.display = 'flex'; // Show the button
					}, 200);
				}
			}
				openBtn.style.opacity = '0';
				openBtn.style.visibility = 'hidden';
			createPuzzle();
function checkCompletion() {
    let pieces = [...container.children]; // Get current puzzle pieces
    let isCorrect = pieces.every(piece => piece.dataset.index == piece.dataset.correctIndex);

    if (isCorrect) {
        setTimeout(() => {
            alert('Congratulations! Now Press The Button!');

            // Make sure the button is fully visible
            openBtn.style.display = 'flex';  
            openBtn.style.visibility = 'visible';
            openBtn.style.opacity = '1'; 
        }, 200);
    }
}
