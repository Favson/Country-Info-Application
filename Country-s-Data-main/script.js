class Country {
    constructor(countryName, population, economicalBudget) {
        this.name = countryName,
            this.pop = population,
            this.ecoBgt = economicalBudget
    }
}

let nigeria = new Country('NIGERIA', 'Over 200 Million', '427 Billion Dollars')
console.log(nigeria);

// All Countries Listed
const data = [
    { name: 'Afghanistan', category: 'Category A', info: 'Information about Afghanistan' },
    { name: 'Albania', category: 'Category B', info: 'Information about Albania' },
    { name: 'Algeria', category: 'Category A', info: 'Information about Algeria' },
    { name: 'Andorra', category: 'Category A', info: 'Information about Andorra' },
    { name: 'Angola', category: 'Category A', info: 'Information about Angola' },
    { name: 'Antigua and Barbuda', category: 'Category A', info: 'Information about Antigua and Barbuda' },
    { name: 'Argentina', category: 'Category A', info: 'Information about Argentina' },
    { name: 'Armenia', category: 'Category A', info: 'Information about Armenia' },
    { name: 'Australia', category: 'Category A', info: 'Information about Australia' },
    { name: 'Austria', category: 'Category A', info: 'Information about Austria' },
    { name: 'Azerbaijan', category: 'Category A', info: 'Information about Azerbaijan' },
    { name: 'Bahamas', category: 'Category A', info: 'Information about Bahamas' },
    { name: 'Bahrain', category: 'Category A', info: 'Information about Bahrain' },
    { name: 'Bangladesh', category: 'Category A', info: 'Information about Bangladesh' },
    { name: 'Barbados', category: 'Category A', info: 'Information about Barbados' },
    { name: 'Belarus', category: 'Category A', info: 'Information about Belarus' },
    { name: 'Belgium', category: 'Category A', info: 'Information about Belgium' },
    { name: 'Belize', category: 'Category A', info: 'Information about Belize' },
    { name: 'Benin', category: 'Category A', info: 'Information about Benin' },
    { name: 'Bhutan', category: 'Category A', info: 'Information about Bhutan' },
    { name: 'Bolivia', category: 'Category A', info: 'Information about Bolivia' },
    { name: 'Bosnia and Herzegovina', category: 'Category A', info: 'Information about Bosnia and Herzegovina' },
    { name: 'Botswana', category: 'Category A', info: 'Information about Botswana' },
    { name: 'Brazil', category: 'Category A', info: 'Information about Brazil' },
    { name: 'Brunei', category: 'Category A', info: 'Information about Brunei' },
    { name: 'Bulgaria', category: 'Category A', info: 'Information about Bulgaria' },
    { name: 'Burkina Faso', category: 'Category A', info: 'Information about Burkina Faso' },
    { name: 'Burundi', category: 'Category A', info: 'Information about Burundi' },
    { name: 'Cabo Verde', category: 'Category A', info: 'Information about Cabo Verde' },
    { name: 'Cambodia', category: 'Category A', info: 'Information about Cambodia' },
    { name: 'Cameroon', category: 'Category A', info: 'Information about Cameroon' },
    { name: 'Canada', category: 'Category A', info: 'Information about Canada' },
    { name: 'Central African Republic', category: 'Category A', info: 'Information about Central African Republic' },
    { name: 'Chad', category: 'Category A', info: 'Information about Chad' },
    { name: 'Chile', category: 'Category A', info: 'Information about Chile' },
    { name: 'China', category: 'Category A', info: 'Information about China' },
    { name: 'Colombia', category: 'Category A', info: 'Information about Colombia' },
    { name: 'Comoros', category: 'Category A', info: 'Information about Comoros' },
    { name: 'Congo (Congo-Brazzaville)', category: 'Category A', info: 'Information about Congo (Congo-Brazzaville)' },
    { name: 'Cote dIvoire', category: 'Category A', info: 'Information about Cote dIvoire' },
    { name: 'Costa Rica', category: 'Category A', info: 'Information about Costa Rica' },
    { name: 'Croatia', category: 'Category A', info: 'Information about Croatia' },
    { name: 'Cuba', category: 'Category A', info: 'Information about Cuba' },
    { name: 'Cyprus', category: 'Category A', info: 'Information about Cyprus' },
    { name: 'Czechia (Czech Republic)', category: 'Category A', info: 'Information about Czechia (Czech Republic)' },
    { name: 'Denmark', category: 'Category A', info: 'Information about Denmark' },
    { name: 'Djibouti', category: 'Category A', info: 'Information about Djibouti' },
    { name: 'Dominica', category: 'Category A', info: 'Information about Dominica' },
    { name: 'Dominican Republic', category: 'Category A', info: 'Information about Dominican Republic' },
    { name: 'Ecuador', category: 'Category A', info: 'Information about Ecuador' },
    { name: 'Egypt', category: 'Category A', info: 'Information about Egypt' },
    { name: 'El Salvador', category: 'Category A', info: 'Information about El Salvador' },
    { name: 'Equatorial Guinea', category: 'Category A', info: 'Information about Equatorial Guinea' },
    { name: 'Eritrea', category: 'Category A', info: 'Information about Eritrea' },
    { name: 'Estonia', category: 'Category A', info: 'Information about Estonia' },
    { name: 'Eswatini (fmr. "Swaziland")', category: 'Category A', info: 'Information about Eswatini (fmr. "Swaziland")' },
    { name: 'Ethiopia', category: 'Category A', info: 'Information about Ethiopia' },
    { name: 'Fiji', category: 'Category A', info: 'Information about Fiji' },
    { name: 'Finland', category: 'Category A', info: 'Information about Finland' },
    { name: 'France', category: 'Category A', info: 'Information about France' },
    { name: 'Gabon', category: 'Category A', info: 'Information about Gabon' },
    { name: 'Gambia', category: 'Category A', info: 'Information about Gambia' },
    { name: 'Georgia', category: 'Category A', info: 'Information about Georgia' },
    { name: 'Germany', category: 'Category A', info: 'Information about Germany' },
    { name: 'Ghana', category: 'Category A', info: 'Information about Ghana' },
    { name: 'Greece', category: 'Category A', info: 'Information about Greece' },
    { name: 'Grenada', category: 'Category A', info: 'Information about Grenada' },
    { name: 'Guatemala', category: 'Category A', info: 'Information about Guatemala' },
    { name: 'Guinea', category: 'Category A', info: 'Information about Guinea' },
    { name: 'Guinea-Bissau', category: 'Category A', info: 'Information about Guinea-Bissau' },
    { name: 'Guyana', category: 'Category A', info: 'Information about Guyana' },
    { name: 'Haiti', category: 'Category A', info: 'Information about Haiti' },
    { name: 'Holy See', category: 'Category A', info: 'Information about Holy See' },
    { name: 'Honduras', category: 'Category A', info: 'Information about Honduras' },
    { name: 'Hungary', category: 'Category A', info: 'Information about Hungary' },
    { name: 'Iceland', category: 'Category A', info: 'Information about Iceland' },
    { name: 'India', category: 'Category A', info: 'Information about India' },
    { name: 'Indonesia', category: 'Category A', info: 'Information about Indonesia' },
    { name: 'Iran', category: 'Category A', info: 'Information about Iran' },
    { name: 'Iraq', category: 'Category A', info: 'Information about Iraq' },
    { name: 'Ireland', category: 'Category A', info: 'Information about Ireland' },
    { name: 'Israel', category: 'Category A', info: 'Information about Israel' },
    { name: 'Italy', category: 'Category A', info: 'Information about Italy' },
    { name: 'Jamaica', category: 'Category A', info: 'Information about Jamaica' },
    { name: 'Japan', category: 'Category A', info: 'Information about Japan' },
    { name: 'Jordan', category: 'Category A', info: 'Information about Jordan' },
    { name: 'Kazakhstan', category: 'Category A', info: 'Information about Kazakhstan' },
    { name: 'Kenya', category: 'Category A', info: 'Information about Kenya' },
    { name: 'Kiribati', category: 'Category A', info: 'Information about Kiribati' },
    { name: 'Kuwait', category: 'Category A', info: 'Information about Kuwait' },
    { name: 'Kyrgyzstan', category: 'Category A', info: 'Information about Kyrgyzstan' },
    { name: 'Laos', category: 'Category A', info: 'Information about Laos' },
    { name: 'Latvia', category: 'Category A', info: 'Information about Latvia' },
    { name: 'Lebanon', category: 'Category A', info: 'Information about Lebanon' },
    { name: 'Lesotho', category: 'Category A', info: 'Information about Lesotho' },
    { name: 'Liberia', category: 'Category A', info: 'Information about Liberia' },
    { name: 'Libya', category: 'Category A', info: 'Information about Libya' },
    { name: 'Liechtenstein', category: 'Category A', info: 'Information about Liechtenstein' },
    { name: 'Lithuania', category: 'Category A', info: 'Information about Lithuania' },
    { name: 'Luxembourg', category: 'Category A', info: 'Information about Luxembourg' },
    { name: 'Madagascar', category: 'Category A', info: 'Information about Madagascar' },
    { name: 'Malawi', category: 'Category A', info: 'Information about Malawi' },
    { name: 'Malaysia', category: 'Category A', info: 'Information about Malaysia' },
    { name: 'Maldives', category: 'Category A', info: 'Information about Maldives' },
    { name: 'Mali', category: 'Category A', info: 'Information about Mali' },
    { name: 'Malta', category: 'Category A', info: 'Information about Malta' },
    { name: 'Marshall Islands', category: 'Category A', info: 'Information about Marshall Islands' },
    { name: 'Mauritania', category: 'Category A', info: 'Information about Mauritania' },
    { name: 'Mauritius', category: 'Category A', info: 'Information about Mauritius' },
    { name: 'Mexico', category: 'Category A', info: 'Information about Mexico' },
    { name: 'Micronesia', category: 'Category A', info: 'Information about Micronesia' },
    { name: 'Moldova', category: 'Category A', info: 'Information about Moldova' },
    { name: 'Monaco', category: 'Category A', info: 'Information about Monaco' },
    { name: 'Mongolia', category: 'Category A', info: 'Information about Mongolia' },
    { name: 'Montenegro', category: 'Category A', info: 'Information about Montenegro' },
    { name: 'Morocco', category: 'Category A', info: 'Information about Morocco' },
    { name: 'Mozambique', category: 'Category A', info: 'Information about Mozambique' },
    { name: 'Myanmar (formerly Burma)', category: 'Category A', info: 'Information about Myanmar (formerly Burma)' },
    { name: 'Namibia', category: 'Category A', info: 'Information about Namibia' },
    { name: 'Nauru', category: 'Category A', info: 'Information about Nauru' },
    { name: 'Nepal', category: 'Category A', info: 'Information about Nepal' },
    { name: 'Netherlands', category: 'Category A', info: 'Information about Netherlands' },
    { name: 'New Zealand', category: 'Category A', info: 'Information about New Zealand' },
    { name: 'Nicaragua', category: 'Category A', info: 'Information about Nicaragua' },
    { name: 'Niger', category: 'Category A', info: 'Information about Niger' },
    { name: 'Nigeria', category: 'Category A', info: 'Information about Nigeria' },
    { name: 'North Korea', category: 'Category A', info: 'Information about North Korea' },
    { name: 'North Macedonia', category: 'Category A', info: 'Information about North Macedonia' },
    { name: 'Norway', category: 'Category A', info: 'Information about Norway' },
    { name: 'Oman', category: 'Category A', info: 'Information about Oman' },
    { name: 'Pakistan', category: 'Category A', info: 'Information about Pakistan' },
    { name: 'Palau', category: 'Category A', info: 'Information about Palau' },
    { name: 'Palestine State', category: 'Category A', info: 'Information about Palestine State' },
    { name: 'Panama', category: 'Category A', info: 'Information about Panama' },
    { name: 'Papua New Guinea', category: 'Category A', info: 'Information about Papua New Guinea' },
    { name: 'Paraguay', category: 'Category A', info: 'Information about Paraguay' },
    { name: 'Peru', category: 'Category A', info: 'Information about Peru' },
    { name: 'Philippines', category: 'Category A', info: 'Information about Philippines' },
    { name: 'Poland', category: 'Category A', info: 'Information about Poland' },
    { name: 'Portugal', category: 'Category A', info: 'Information about Portugal' },
    { name: 'Qatar', category: 'Category A', info: 'Information about Qatar' },
    { name: 'Romania', category: 'Category A', info: 'Information about Romania' },
    { name: 'Russia', category: 'Category A', info: 'Information about Russia' },
    { name: 'Rwanda', category: 'Category A', info: 'Information about Rwanda' },
    { name: 'Saint Kitts and Nevis', category: 'Category A', info: 'Information about Saint Kitts and Nevis' },
    { name: 'Saint Lucia', category: 'Category A', info: 'Information about Saint Lucia' },
    { name: 'Saint Vincent and the Grenadines', category: 'Category A', info: 'Information about Saint Vincent and the Grenadines' },
    { name: 'Samoa', category: 'Category A', info: 'Information about Samoa' },
    { name: 'San Marino', category: 'Category A', info: 'Information about San Marino' },
    { name: 'Sao Tome and Principe', category: 'Category A', info: 'Information about Sao Tome and Principe' },
    { name: 'Saudi Arabia', category: 'Category A', info: 'Information about Saudi Arabia' },
    { name: 'Senegal', category: 'Category A', info: 'Information about Senegal' },
    { name: 'Serbia', category: 'Category A', info: 'Information about Serbia' },
    { name: 'Seychelles', category: 'Category A', info: 'Information about Seychelles' },
    { name: 'Sierra Leone', category: 'Category A', info: 'Information about Sierra Leone' },
    { name: 'Singapore', category: 'Category A', info: 'Information about Singapore' },
    { name: 'Slovakia', category: 'Category A', info: 'Information about Slovakia' },
    { name: 'Slovenia', category: 'Category A', info: 'Information about Slovenia' },
    { name: 'Solomon Islands', category: 'Category A', info: 'Information about Solomon Islands' },
    { name: 'Somalia', category: 'Category A', info: 'Information about Somalia' },
    { name: 'South Africa', category: 'Category A', info: 'Information about South Africa' },
    { name: 'South Korea', category: 'Category A', info: 'Information about South Korea' },
    { name: 'South Sudan', category: 'Category A', info: 'Information about South Sudan' },
    { name: 'Spain', category: 'Category A', info: 'Information about Spain' },
    { name: 'Sri Lanka', category: 'Category A', info: 'Information about Sri Lanka' },
    { name: 'Sudan', category: 'Category A', info: 'Information about Sudan' },
    { name: 'Suriname', category: 'Category A', info: 'Information about Suriname' },
    { name: 'Sweden', category: 'Category A', info: 'Information about Sweden' },
    { name: 'Switzerland', category: 'Category A', info: 'Information about Switzerland' },
    { name: 'Syria', category: 'Category A', info: 'Information about Syria' },
    { name: 'Tajikistan', category: 'Category A', info: 'Information about Tajikistan' },
    { name: 'Tanzania', category: 'Category A', info: 'Information about Tanzania' },
    { name: 'Thailand', category: 'Category A', info: 'Information about Thailand' },
    { name: 'Timor-Leste', category: 'Category A', info: 'Information about Timor-Leste' },
    { name: 'Togo', category: 'Category A', info: 'Information about Togo' },
    { name: 'Tonga', category: 'Category A', info: 'Information about Tonga' },
    { name: 'Trinidad and Tobago', category: 'Category A', info: 'Information about Trinidad and Tobago' },
    { name: 'Tunisia', category: 'Category A', info: 'Information about Tunisia' },
    { name: 'Turkey', category: 'Category A', info: 'Information about Turkey' },
    { name: 'Turkmenistan', category: 'Category A', info: 'Information about Turkmenistan' },
    { name: 'Tuvalu', category: 'Category A', info: 'Information about Tuvalu' },
    { name: 'Uganda', category: 'Category A', info: 'Information about Uganda' },
    { name: 'Ukraine', category: 'Category A', info: 'Information about Ukraine' },
    { name: 'United Arab Emirates', category: 'Category A', info: 'Information about United Arab Emirates' },
    { name: 'United Kingdom', category: 'Category A', info: 'Information about United Kingdom' },
    { name: 'United States of America', category: 'Category A', info: 'Information about United States of America' },
    { name: 'Uruguay', category: 'Category A', info: 'Information about Uruguay' },
    { name: 'Uzbekistan', category: 'Category A', info: 'Information about Uzbekistan' },
    { name: 'Vanuatu', category: 'Category A', info: 'Information about Vanuatu' },
    { name: 'Venezuela', category: 'Category A', info: 'Information about Venezuela' },
    { name: 'Vietnam', category: 'Category A', info: 'Information about Vietnam' },
    { name: 'Yemen', category: 'Category A', info: 'Information about Yemen' },
    { name: 'Zambia', category: 'Category A', info: 'Information about Zambia' },
    { name: 'Zimbabwe', category: 'Category A', info: 'Information about Zimbabwe' }
];


// Function to render filtered results
function renderResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        document.getElementById('noResultsMessage').style.display = 'block';
    } else {
        document.getElementById('noResultsMessage').style.display = 'none';
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.textContent = item.name;
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Function to perform filtering
function filterResults(query) {
    const filteredResults = data.filter(item => {
        // Perform case-insensitive search
        return item.name.toLowerCase().includes(query.toLowerCase());
    });
    renderResults(filteredResults);
}

// Event listener for search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    filterResults(this.value);
});

// Event listener for search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
    filterResults(searchInput.value);
});

// Initial rendering
filterResults('');

// function createResultsContainer(data) {
//     const resultsContainer = document.getElementById('resultsContainer');
//     data.forEach(country => {
//         const divItem = document.createElement('div'); 
//         divItem.textContent = country.name;
//         resultsContainer.appendChild(divItem);
//     });
// }


createResultsContainer(data);

// Function to create results container and attach click event listeners
function createResultsContainer(data) {
    const resultsContainer = document.getElementById('resultsContainer');
    data.forEach(country => {
        const divItem = document.createElement('div');
        divItem.textContent = country.name;
        divItem.classList.add('country'); // Add a class for styling
        divItem.addEventListener('click', () => {
            displayCountryInfo(country);
        });
        resultsContainer.appendChild(divItem);
    });
}

// Function to display country information on the card
function displayCountryInfo(country) {
    const card = document.getElementById('card');
    card.innerHTML = `
        <h2>${country.name}</h2>
        <p>Category: ${country.category}</p>
        <p>Information: ${country.info}</p>
        <!-- Add more information as needed -->
    `;
}

// Sample data (replace with your actual data)
// const data = [
//     { name: 'Afghanistan', category: 'Category A', info: 'Information about Afghanistan' },
//     { name: 'Albania', category: 'Category B', info: 'Information about Albania' },
//     { name: 'Algeria', category: 'Category A', info: 'Information about Algeria' },
//     // Add more countries as needed
// ];

// Call the function to generate the country list
createResultsContainer(data);
