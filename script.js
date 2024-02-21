class Country {
    constructor(countryName, population){
        this.name = countryName;
        this.population = population
    }
}
let Nigeria = new Country ('Nigeria', 'Over 200Million')
console.log(Nigeria);

const countries = [
    {name:'Afganistan',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram   insurgency has been active.'
    },
    {name:'Nigeria',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Ghana',
        
    },
    {name:'Argentina'},
    {name:'Canada'},
    {name:'Burundi'},
    {name:'Australia'},
    {name:'Mali'},
    {name:'Russia'},
    {name:'Uganda'},
    {name:'South Africa'},
    {name:'Japan'},
    {name:'South Korea'},
    {name:'United Kingdom'},
    {name:'United State Of America'},
    {name:'Belgium'},
    {name:'Cameroon'},
    {name:'Morocco'},
    {name:'Iceland'},
    {name:'France'}
]

// Function to render filtered results
function renderResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML =`
            <img src="images/not-found.png" alt="" width="100%">
        `
        setTimeout(() => {
            resultsContainer.innerHTML=""
        }, 10000);
    } else {
        // document.getElementById('errMsg').style.display = 'none';
        // eroor.style.display = 'none'
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.textContent = item.name;
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Function to perform filtering
function filterResults(query) {
    const filteredResults = countries.filter(item => {
        // Perform case-insensitive search
        return item.name.toLowerCase().includes(query.toLowerCase());
    });
    renderResults(filteredResults);
}

// Event listener for search input
const searchInput = document.getElementById('inputSearch');
searchInput.addEventListener('input', function () {
    filterResults(this.value);
});

// Initial rendering
filterResults('');

createResultsContainer(countries);

// Function to create results container and attach click event listeners
function createResultsContainer(data) {
    const resultsContainer = document.getElementById('resultsContainer');
    data.forEach(country => {
        const divItem = document.createElement('div');
        // divItem.style.cursor = 'Pointer'
        divItem.textContent = country.name;
        divItem.classList.add('country'); // Add a class for styling
        divItem.addEventListener('click', () => {
            displayCountryInfo(country);
        });
        resultsContainer.appendChild(divItem);
    });
}

function displayCountryInfo(country) {
    // Assuming you have a 'card' element to display country information
    const card = document.getElementById('card');
    card.innerHTML = `
        
    `;
}

// Corrected calling function
createResultsContainer(countries);