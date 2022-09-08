// creating the header and adding the class
let headerEl = document.createElement("header")
headerEl.class = "header"

//creating the logo and adding the text and the class
let logoEl = document.createElement("div")
let logoText = document.createTextNode('Elzero')
logoEl.class = 'logo'
logoEl.prepend(logoText)

// adding the logo to the header
headerEl.prepend(logoEl)

// creating the nav elements
let navEl = document.createElement('nav')
let ulEl = document.createElement('ul')

// array contains the elements for the navbar and login them out
const navEls = ['Home', 'About', 'Contact', 'Footer']
for (let el of navEls) {
	ulEl.innerHTML += `<li>${el}</li>`
}
navEl.appendChild(ulEl)
headerEl.appendChild(navEl)

// styling the header elements
headerEl.style.cssText = ` 
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
`
logoEl.style.cssText = `
	color: #007642;
	font-size: 20px;
	font-weight: 600;
`
ulEl.style.cssText = `
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	list-style: none;
	width: 270px;
	color:#6a6a68;
`

// creating the section elements
let sectionEl = document.createElement("section")
sectionEl.class = 'container'

// loop to log out the data
for (let i = 1; i <= 15; i++) {
	sectionEl.innerHTML += `<div><h2>${i}</h2><br>Product</div>`
}

// styling the section 
sectionEl.style.cssText = `
	display: grid;
	grid-template-columns: auto auto auto;
	gap: 10px;
	background-color: #dcdee0;
	padding: 10px;
	text-align: center
`

// targeting the divs and styling them
let divsEl = sectionEl.querySelectorAll("div")
for (let div of divsEl) {
	div.style.cssText = `
		padding: 12px 10px;
		background: white;
		border: 0.5px solid #c9baba;
		border-radius: 3px;
	`
}

// footer element

let footer = document.createElement('footer')
let footText = document.createTextNode("Copyright 8,sept,2022")

footer.class = "footer"
footer.appendChild(footText)


footer.style.cssText = `
	padding: 20px;
    background: #007642;
    color: white;
    text-align: center;
`

document.body.prepend(footer)
document.body.prepend(sectionEl)
document.body.prepend(headerEl)
