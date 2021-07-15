const button = document.getElementById("convert-button")
const select = document.getElementById('select-query')


const dolar = 5.2
const euro = 5.9
const bitcoin = 165690.46

const convertValues = () => {
	let real = document.getElementById("inputReal").value
	//Format Money BRL
	document.getElementById("realValue").innerHTML = new Intl.NumberFormat("pt-BR",
	{ style: "currency", currency: "BRL" },
	).format(real)
	//If the select value is dolar
	if(select.value === 'dollar'){
		//Convert BRL to USD and format
		document.getElementById("convertedValue").innerHTML = new Intl.NumberFormat("en-US",
		{ style: "currency", currency: "USD" },
		).format(real / dolar)
	}
	//If the select value is euro
	if(select.value === 'euro'){
		//Convert BRL to EUR and format
		document.getElementById("convertedValue").innerHTML = new Intl.NumberFormat("de-DE",
		{ style: "currency", currency: "EUR" },
		).format(real / euro)
	}
	//If the select value is bitcoin
	if(select.value === 'bitcoin'){
		//Convert BRL to EUR and format
		document.getElementById("convertedValue").innerHTML = new Intl.NumberFormat("de-DE",
		{ style: "currency", currency: "BTC" },
		).format(real / bitcoin)
	}
}

changeCurrency = () => {
	//Select the flag image
	const currencyImage = document.getElementById('currency-img')
	//Select the Name above the flag
	const currencyName = document.getElementById('currency-name')
	//If the select value is dolar
	if(select.value === 'dollar'){
		//change the img local to eua flag image
		currencyImage.src = './assets/eua-flag.svg'
		//change the name above the img to Dólar Americano
		currencyName.innerHTML = 'Dólar Americano'
	}
	//If the select value is euro
	if(select.value === 'euro'){
		//change the img local to euro flag image
		currencyImage.src = './assets/euro-flag.svg'
		//change the name above the img to Euro
		currencyName.innerHTML = 'Euro'
	}
	//If the select value is bitcoin
	if(select.value === 'bitcoin'){
		//change the img local to bitcoin flag image
		currencyImage.src = './assets/bitcoin-flag.svg'
		//change the name above the img to Bitcoin
		currencyName.innerHTML = 'Bitcoin'
	}

	convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)