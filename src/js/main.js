const theme = document.getElementsByClassName("theme")
const currentTheme = document.getElementById("current-theme")
const themes = document.getElementById("themes-section")

currentTheme.addEventListener("click", () => {
	themes.classList.toggle("display")
})

for (let i = 0; i < theme.length; i++) {
	theme[i].addEventListener('click', (e) => {
		currentTheme.getElementsByTagName("i")[0].className = 
			e.currentTarget.getElementsByTagName('i')[0].className;
	})
}