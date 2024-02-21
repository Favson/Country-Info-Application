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
        img:'https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Afghanistan_%28Colored_Emblem%29.svg',
        Category : 'Kabul',
        popu:'40.1 million',
        info:' Afghanistan is a landlocked country in South Asia with Kabul as its capital. It has a diverse population with Pashtuns, Tajiks, Hazaras, and others, speaking Pashto and Dari. The country has faced conflicts, including Soviet invasion and Taliban rule, leading to ongoing instability, terrorism, and poverty. Efforts for peace involve negotiations with the Taliban and international aid.'
    },
    {name:'Nigeria',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png',
        Category: 'Abuja',
        popu:'213.4 million',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Ghana',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1280px-Flag_of_Ghana.svg.png',
        Category: 'Accra',
        popu:'32.83 million',
        info:'Ghana is a country in West Africa known for its stable democracy, vibrant culture, and economic growth. Its capital is Accra. Ghana gained independence from colonial rule in 1957. It has a diverse population and English is the official language. The economy relies on agriculture, mining (especially gold), and services. While Ghana has made progress, it still faces challenges like poverty and environmental issues.'  
    },
    {name:'Argentina',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVSDwyJAOacT0iyuE0wVaGNDtEpT7taFhHwGkLIghIg&s',
        Category: 'Buenos Aires',
        popu:'45.81 million',
        info:'Argentina is a country located in South America, known for its rich cultural heritage, diverse landscapes, and passion for soccer. Buenos Aires is its capital and largest city. Argentina is famous for its tango music and dance, as well as its delicious cuisine, including steak and wine. The country boasts stunning natural wonders such as the Andes mountains, Iguazú Falls, and the expansive Pampas grasslands. Argentina has a mixed economy, with agriculture, industry, and services sectors contributing to its GDP. It is a major exporter of agricultural products such as soybeans and beef.The country has a complex political history, marked by periods of instability and military rule. However, it has made strides towards democracy and has a strong tradition of civic engagement.'
    },
    {name:'Canada',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png',
        Category: 'Ottawa',
        popu:'38.25 million',
        info:'Canada is a North American country known for its vast landscapes, multicultural society, and strong economy. Ottawa is the capital, while Toronto is the largest city. Canada is famous for its natural beauty, including the Rocky Mountains, Niagara Falls, and vast forests. It has a diverse population with English and French as official languages. The economy is driven by industries like natural resources, manufacturing, and technology. Canada is also known for its progressive policies on healthcare, education, and social welfare.'
    },
    {name:'Italy',
        img:'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
        popu:'59.11 million',
        Category: 'Rome',
        info:'Italy is a European country known for its rich history, art, and culture. Rome is the capital city and the center of ancient Roman civilization. Italy is famous for its delicious cuisine, including pasta, pizza, and gelato Itis also known for iconic landmarks such as the Colosseum, the Leaning Tower of Pisa, and the Vatican City. Italy has a diverse landscape, from the Alps in the north to the beautiful coastlines of the Mediterranean Sea. The economy is driven by industries like fashion, automotive manufacturing, and tourism. Italy has a significant influence on global culture, particularly in areas such as art, fashion, and design'
    },
    {name:'Australia',
        img:'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png',
        Category: 'Canberra',
        popu:'25.69 million',
        info:'Australia is a continent and country in the southern hemisphere, known for its unique wildlife and stunning landscapes. Its capital is Canberra, and Sydney is the largest city. The economy is diverse, with key sectors including mining, agriculture, and tourism. Australia has a multicultural society and is famous for outdoor activities and sports.'
    },
    {name:'Mali',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1280px-Flag_of_Mali.svg.png',
        Category: 'Bamako',
        popu:'21.9 million',
        info:'Mali is a landlocked country in West Africa with Bamako as its capital. It has a diverse population and French as the official language. The economy relies on agriculture and mineral resources like gold. Mali faces challenges such as political instability and security concerns, especially in the north.'
    },
    {name:'Russia',
        img:'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
        Category: 'Moscow',
        popu:'143.4 million',
        info:'Russia is the largest country in the world, spanning Eastern Europe and Northern Asia, with Moscow as its capital. It is known for its rich history, diverse culture, and significant global influence. The economy relies on industries like oil, natural gas, and manufacturing. Russia has a diverse population and is a permanent member of the United Nations Security Council.'
    },
    {name:'Uganda',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/2560px-Flag_of_Uganda.svg.png',
        Category: 'Kampala',
        popu:'45.85 million',
        info:'Uganda is a landlocked country in East Africa, with Kampala as its capital. It has diverse landscapes and a rich cultural heritage. The economy relies heavily on agriculture. Despite challenges, Uganda has made progress in areas like infrastructure and healthcare.'
    },
    {name:'South Africa',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-aHjdrYsR0O7bE0NFbr160sJFJb1bJe16OUhj7PEqVA&s',
        Category: 'Pretoria',
        popu:'59.39 million',
        info:'South Africa is a country in southern Africa, with Pretoria as the administrative capital and Johannesburg as the largest city. It is known for its diverse cultures, stunning landscapes, and history of apartheid. The economy is mixed, with key sectors including mining, agriculture, manufacturing, and services. South Africa faces challenges like inequality, unemployment, crime, and HIV/AIDS prevalence.'
    },
    {name:'Japan',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png',
        Category:'Tokyo',
        popu:'125.7 million',
        info:'Japan is an island nation in East Asia, with Tokyo as its capital. It is known for advanced technology, rich culture, and stunning landscapes. The economy is highly developed, with major industries including automotive manufacturing and electronics. Japanese society values tradition and harmony. Challenges include an aging population and environmental issues.'
    },
    {name:'South Korea',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoi26HjulT52ZvMGNcKkCdx0bWz8E4mDAyCby8FrMPKw&s',
        Category:'Seoul',
        popu:'51.74 million',
        info:'South Korea, officially the Republic of Korea, is located in East Asia, with Seoul as its capital. It is known for its advanced technology, including electronics and automobiles, as well as its vibrant pop culture, including K-pop music. Despite its small size and limited natural resources, South Korea has achieved remarkable economic growth since the Korean War. Challenges include tensions with North Korea and social issues like aging population and gender inequality.'
    },
    {name:'United Kingdom',
        img:'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png',
        Category: 'London',
        popu:'67.33 million',
        info:'The United Kingdom (UK) is a country in Europe, consisting of four constituent countries: England, Scotland, Wales, and Northern Ireland. Its capital and largest city is London. The UK has a rich history, diverse culture, and significant global influence. Key industries include finance, manufacturing, healthcare, education, and tourism. Recent challenges include Brexit, the process of leaving the European Union.'
    },
    {name:'Poland',
        img:'https://upload.wikimedia.org/wikipedia/en/archive/1/12/20111003025458%21Flag_of_Poland.svg',
        Category:'Warsaw',
        popu:'37.75 million',
        info:'Poland is a country in Central Europe, with Warsaw as its capital. It has a diverse landscape and a population of over 38 million people. The economy is the largest in Central Europe, with industries like manufacturing, finance, and technology. Poland has a rich cultural heritage and joined the European Union in 2004. Challenges include unemployment and environmental issues.'
    },
    {name:'Belgium',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1182px-Flag_of_Belgium.svg.png',
        Category:'Brussels',
        popu:'11.59 million',
        info:'Belgium is a country in Western Europe, with Brussels as its capital. It is known for its diverse population and high standard of living. Key industries include manufacturing, services, and international trade. Belgium faces challenges related to political tensions and immigration.'
    },
    {name:'Cameroon',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/2560px-Flag_of_Cameroon.svg.png',
        Category:"Yaoundé",
        popu:'27.2 million',
        info:'Cameroon is a country in Central Africa, with Yaoundé as its capital and Douala as its largest city. It is known for its cultural diversity and natural beauty. The economy relies on sectors like agriculture, oil, and services. Cameroon faces challenges like political instability and social inequality.'
    },
    {name:'Morocco',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VXbHS-AJT4-S2BKi8jS7zVjfEUaQ0WmHiSJ_beAJ8Q&s',
        Category:'Rabat',
        popu:'37.08 million',
        info:'Morocco is a North African country known for its rich culture and diverse landscapes. Its capital is Rabat. The economy relies on sectors like agriculture, tourism, and manufacturing. Morocco is famous for its historic cities, beautiful beaches, and the Sahara Desert. Despite challenges like unemployment, it remains a popular tourist destination.'
    },
    {name:'Iceland',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1280px-Flag_of_Iceland.svg.png',
        Category:'Reykjavík',
        popu:'372,520',
        info:'Iceland is a Nordic island country in the North Atlantic Ocean, with Reykjavik as its capital. It is known for its stunning landscapes, including glaciers and geysers. The economy relies on fishing, tourism, and renewable energy. Iceland has a small population and is renowned for its high standard of living and gender equality.'
    },
    {name:'France',
        img:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png`,
        Category:'Paris',
        popu:'67.75 million',
        info:'France is a European country known for its rich culture and history. Paris is its capital and largest city. The economy is diverse, with key sectors including manufacturing, agriculture, tourism, and services. France is famous for its landmarks, cuisine, and contributions to art and literature.'
    }
]

countries.forEach((country) => {
    country.names = `<div class="text-center"><img class="mx-auto" src="${country.img}" width="40%" alt=""></div><h1 class="text-center" style="color: blue; margin-bottom: 30px;">${country.name}</h1>`;
    country.Category = `<div class="d-flex mb-2"><div><span class="fs-4 mt-5">Capital:</span><br><span class="fs-3 fw-bold text-primary">${country.Category}</span></div><div class="ms-auto"><span class="fs-4 mt-5">Population :</span><br><span class="fs-3 fw-bold text-primary"> ${country.popu}</span></div></div>`;
    country.infos =`<div class="">${country.info}</div>`;
});

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
            const countryCard = document.getElementById("countryCard");
            const resultItem = document.createElement('div');
            const resultItems = document.createElement("div");
            const countryCategory = document.createElement("div");
            const countryInfo = document.createElement("div");
            // const imgShow = document.createElement('div')
            resultItem.textContent = item.name;
            resultsContainer.appendChild(resultItem);

            resultItem.addEventListener("click", () => {
                let count = document.getElementById("count");
                // alert(item.Category);
                count.style.display = "block";
        
                countryCategory.innerHTML = item.Category;
                resultItems.innerHTML = item.names;
                // imgShow.innerHTML = item.img;
                countryInfo.innerHTML = item.infos;
        
                countryCard.innerHTML = "";
                
                // countryCard.appendChild(imgShow)
                countryCard.appendChild(resultItems);
                countryCard.appendChild(countryCategory);
                countryCard.appendChild(countryInfo);
            });
            resultItem.style.cursor = "pointer"; 
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