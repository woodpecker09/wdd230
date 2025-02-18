const baseURL = "https://woodpecker09.github.io/wdd230/";

const linksURL = "https://woodpecker09.github.io/wdd230/data/links.json";

const learnAct = document.querySelector('#weeks'); 
console.log(learnAct);

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.weeks);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        const weekLi = document.createElement('li');
        weekLi.textContent = `${week.week}:`;
        console.log(weekLi);
        console.log(`${week.week} ${week.links[0].url}`);
        week.links.forEach(link => {
            const info = document.createElement('a');
            info.textContent = ` ${link.title} `;
            info.setAttribute('href', link.url);
            console.log(info);
            weekLi.appendChild(info);
            weekLi.innerHTML += `|`;
            console.log(weekLi);
        })
        learnAct.appendChild(weekLi);
    });
}

getLinks();