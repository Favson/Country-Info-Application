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
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AFlag_of_Afghanistan.svg&psig=AOvVaw09pjCbuUJ3MqXZCOzEp0Wd&ust=1708592810380000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCbiLGKvIQDFQAAAAAdAAAAABAE',
        popu:'40.1 million (2021)',
        info:' Afghanistan is a landlocked country in South Asia with Kabul as its capital. It has a diverse population with Pashtuns, Tajiks, Hazaras, and others, speaking Pashto and Dari. The country has faced conflicts, including Soviet invasion and Taliban rule, leading to ongoing instability, terrorism, and poverty. Efforts for peace involve negotiations with the Taliban and international aid.'
    },
    {name:'Nigeria',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Ghana',
        img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAACUCAMAAADLemePAAAAh1BMVEXRBSUAaz/60gkCBQHKACfopxb71QgAY0H+1AbHtiAAAAD/2QlDNwL+1gn/3QkXEwHBogfamBW4nQV8aAbqxggeGQFtXATzzAlYSgTApgeUfQZLPgPSsge0lwc6MAKukgfevQlgUASFcAWfhwbLqwgRDQEnIQIxKQK7rCCRjSDRwyAAaEFyYgWgIhojAAAC+ElEQVR4nO2aW3OjMAxG2WSXZeXYUCAhDYRw6X3z/3/fmlzZhLSd6UgdM995SuoH5YyFJbl4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Vn6OGu+XKHd3svE8XxIVx0o0oDeRJEuSTDSgqJ5O5/NUS0aU1YuIovHqmQXR1khGFNVTNJ2SkowoqaeiTi+S9JPUs7lp9RaS2Smop7Oy0yszwcNFUE+tw04vXAtmp+TuJdbO+iWj3D2dLvd6S8HKLqen7mmvR/dy2SmYnKudnfVbycUU09NpftTL5bJTTC8o6KhHRSAVVUxPHXOzy06xh49Hz1dXmPlZb26u132WH8Kjt56Vs0tOdtbvarGcrVl+CI+ejpZ0ybTH1eKSaQxkevZUmvwv9B5EScr0NHIdLXqy+awf0WbCVSn4Tk5T1Z8RJKorvhGJsTCoSRN+6EdhM2EsE5x1L9Bx+YEflbHmrPG8Zd23U8I7gsQ+PTB3LYFpbycoha1hbs/YmzLzkA9vIFH+wH7twt9zqrQZ8iNquIpdD4GWWvvRtR9R5AuMRRITg86Gdk/kwkxCz7RDeq3EfaeIXj6kl49ET6dDtYFCiSsJAT0z2FzbRlpg+yR2r6ae1PljPYrd08V5UO+PtTQr+P0Eyvo5N+kxjh9PX2gzhrKeNacLwKdM6+zpdCHY8L9GwK6nq2c6HJUrZRvoQK0OByk9V+zZya4XRAeZPFI7G62iQx2kiP06l13P3/3bi2hbnZ40VW13CUoJz+VmD/5nrzMhavsNtPbb/V/Zg3Prda8L2KG8uCjhpujGeP7XCLj1TG1LXZJdaagssQs1d+PCnpz2gNwEA0dIEGzskcodnVnP5mZ+6/jXVc6enV7Ailk0Rt1aVKZZGN743h9WXl7f3lt+e33hje/95uXvl5a/jPdj1EDPZaDnMtBzGei5DPRcBnouAz2XgZ7LQM9loOcy0HMZ6LkM9FwGei4DPZeBnstAz2Wg5zLQcxnouQz0XAZ6LgM9lxm53j+z+LpirM4vgwAAAABJRU5ErkJggg==',
        popu:'32.83 million (2021)',
        info:'Ghana is a country in West Africa known for its stable democracy, vibrant culture, and economic growth. Its capital is Accra. Ghana gained independence from colonial rule in 1957. It has a diverse population and English is the official language. The economy relies on agriculture, mining (especially gold), and services. While Ghana has made progress, it still faces challenges like poverty and environmental issues.'  
    },
    {name:'Argentina',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fha.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Argentina.svg&psig=AOvVaw2sJNU5n8rVq2Xf0dHBYDOq&ust=1708597604844000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiHt6acvIQDFQAAAAAdAAAAABAE',
        popu:'45.81 million (2021)',
        info:'Argentina is a country located in South America, known for its rich cultural heritage, diverse landscapes, and passion for soccer. Buenos Aires is its capital and largest city. Argentina is famous for its tango music and dance, as well as its delicious cuisine, including steak and wine. The country boasts stunning natural wonders such as the Andes mountains, Iguazú Falls, and the expansive Pampas grasslands. Argentina has a mixed economy, with agriculture, industry, and services sectors contributing to its GDP. It is a major exporter of agricultural products such as soybeans and beef.The country has a complex political history, marked by periods of instability and military rule. However, it has made strides towards democracy and has a strong tradition of civic engagement.'
    },
    {name:'Canada',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AFlag_of_Canada.svg&psig=AOvVaw0CupJuvhJBo3CtfbXRLtea&ust=1708597772086000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiIpuqcvIQDFQAAAAAdAAAAABAE',
        popu:'38.25 million (2021)',
        info:'Canada is a North American country known for its vast landscapes, multicultural society, and strong economy. Ottawa is the capital, while Toronto is the largest city. Canada is famous for its natural beauty, including the Rocky Mountains, Niagara Falls, and vast forests. It has a diverse population with English and French as official languages. The economy is driven by industries like natural resources, manufacturing, and technology. Canada is also known for its progressive policies on healthcare, education, and social welfare.'
    },
    {name:'Italy',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fitaly-flag-icon%2F&psig=AOvVaw0-fuah-W4EYCwCK7fLHDA2&ust=1708597910009000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCk2q-dvIQDFQAAAAAdAAAAABAE',
        popu:'59.11 million (2021)',
        info:'Italy is a European country known for its rich history, art, and culture. Rome is the capital city and the center of ancient Roman civilization. Italy is famous for its delicious cuisine, including pasta, pizza, and gelato Itis also known for iconic landmarks such as the Colosseum, the Leaning Tower of Pisa, and the Vatican City. Italy has a diverse landscape, from the Alps in the north to the beautiful coastlines of the Mediterranean Sea. The economy is driven by industries like fashion, automotive manufacturing, and tourism. Italy has a significant influence on global culture, particularly in areas such as art, fashion, and design'
    },
    {name:'Australia',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Mali',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Russia',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Uganda',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'South Africa',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Japan',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'South Korea',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'United Kingdom',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'United State Of America',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Belgium',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Cameroon',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Morocco',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'Iceland',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    },
    {name:'France',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AFlag_of_Nigeria_%2528state%2529.svg&psig=AOvVaw0X_u2olwh2MIqBO_QB2vdq&ust=1708592185480000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJje2NaIvIQDFQAAAAAdAAAAABAE',
        popu:'213.4 million (2021)',
        info:'Nigeria is a country located in West Africa, bordering the Gulf of Guinea to the south. It is the most populous country in Africa and the seventh most populous country in the world. Nigeria is known for its diverse cultures, ethnic groups, and languages, with over 250 ethnic groups and languages spoken. Abuja is the capital city of Nigeria, while Lagos is its largest city and commercial capital. Nigeria has a rich cultural heritage, with various traditional festivals, music, dance, and cuisine. The Nigerian economy is one of the largest in Africa, driven primarily by oil and gas exports. However, the country also faces challenges such as corruption, poverty, infrastructure deficits, and security concerns, particularly in the northeastern region where the Boko Haram insurgency has been active.'
    }
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