
// ----------------------- Анімації появи та затухання елементів -------------------- \\


// Видалення елементу

function deleteEl() {
    let el = document.getElementById('click1');
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, 450);
}

// Затухання елементу 

function run() {
	let el = document.getElementById('click1');
	setTimeout(function() {

    // Дія затухання елементу.

	}, 450);
}


// Поява елементів click2

function run1() {
	let el = document.getElementById('click2');
	setTimeout(function() {
		setTimeout(function() {
			
			// Дія появи елементу.

		}, 450);
	}, 450);
}

// ---------------------------------- The END ------------------------------------- \\
