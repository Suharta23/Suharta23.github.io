
	AOS.init();

	// Variabel toggle mode
	const toggleButton = document.getElementById('theme-toggle');
	const themeIcon = document.getElementById('theme-icon');
	let isDarkMode = false; // Default: light mode

	// Fungsi untuk mengaktifkan mode terang
	function setLightMode() {
		document.documentElement.style.setProperty('--main-color', '#dddddd');
		document.documentElement.style.setProperty('--second-color', '#686d76');
		document.documentElement.style.setProperty('--acsen-color', '#dc5f00');
		document.documentElement.style.setProperty('--text-color', '#373a40');
		document.documentElement.style.setProperty('--main-transparent', '#dddddd47');
		document.documentElement.style.setProperty('--acsen-transparent', '#dc5f0060');
		themeIcon.classList.replace('bi-brightness-low', 'bi-sun'); // Ikon untuk light mode
		isDarkMode = false;
		localStorage.setItem('theme', 'light');
	}

	// Fungsi untuk mengaktifkan mode gelap
	function setDarkMode() {
		document.documentElement.style.setProperty('--main-color', '#373a40');
		document.documentElement.style.setProperty('--second-color', '#686d76');
		document.documentElement.style.setProperty('--acsen-color', '#dc5f00');
		document.documentElement.style.setProperty('--text-color', '#eeeeee');
		document.documentElement.style.setProperty('--main-transparent', '#373a404d');
		document.documentElement.style.setProperty('--acsen-transparent', '#dc5f0060');
		themeIcon.classList.replace('bi-sun', 'bi-brightness-low'); // Ikon untuk dark mode
		isDarkMode = true;
		localStorage.setItem('theme', 'dark');
	}

	// Periksa tema di LocalStorage dan setel saat halaman dimuat
	if (localStorage.getItem('theme') === 'dark') {
		setDarkMode();
	} else {
		setLightMode();
	}

	// Event listener untuk toggle button
	toggleButton.addEventListener('click', () => {
		if (isDarkMode) {
			setLightMode();
		} else {
			setDarkMode();
		}
	});
