const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cardsContainer = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.prophets && Array.isArray(data.prophets)) {
            const prophetsData = data.prophets;
            console.table(prophetsData);
            return prophetsData;
        } else {
            console.error('Invalid data structure: "prophets" property not found or not an array.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

getProphetData().then(prophetsArray => {
    displayProphets(prophetsArray); 
}).catch(error => {
    console.error('Error:', error);
});

const displayProphets = (prophets) => {
    if (!cardsContainer) {
        console.error('Element with ID "cards" not found.');
        return;
    }

    cardsContainer.innerHTML = '';

    prophets.forEach((prophet) => {
        const card = document.createElement('section');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '300');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cardsContainer.appendChild(card);
    });
};
