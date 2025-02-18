const baseURL = "https://woodpecker09.github.io/wdd230/";

const linksURL = "https://woodpecker09.github.io/wdd230/data/links.json";

const learnAct = document.querySelector('#weeks'); 

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        const weekLi = document.createElement('li');
        weekLi.textContent = `${week.week}:`;
        week.links.forEach(link => {
            const info = document.createElement('a');
            info.textContent = ` ${link.title} `;
            info.setAttribute('href', link.url);
            weekLi.appendChild(info);
            weekLi.innerHTML += `|`;
        })
        learnAct.appendChild(weekLi);
    });
}

getLinks();