const baseURL = "https://woodpecker09.github.io/wdd230/";

const linksURL = "https://woodpecker09.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = response.json();
    console.log(data);
    // displayLinks(data);
}

getLinks();

function displayLinks(weeks){
    weeks.forEach(week => {
        console.log(`something in here ${week}`)
    });
}