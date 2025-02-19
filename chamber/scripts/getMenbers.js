const divel = document.querySelector("#companies");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	divel.classList.add("companiesGrid");
	divel.classList.remove("companiesList");
});
listbutton.addEventListener("click", () => {
	divel.classList.remove("companiesGrid");
	divel.classList.add("companiesList");
});


async function apiFetch() {
    try {
      const response = await fetch("./data/members.json");
      if (response.ok) {
        const data = await response.json();
        displayCard(data.companies);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function displayCard(companies) {
    companies.forEach(companie => {
        const card = document.createElement('div');
        const comImg = document.createElement('img')
        const comAddress = document.createElement('p');
        const phoneNum = document.createElement('p');
        const urlPage = document.createElement('a');
        const comName = document.createElement('h3');
    
        card.classList.add(companie.memblvl, 'companieCard');

        comName.textContent = companie.name;
        phoneNum.textContent = companie.phone;
        comAddress.textContent = companie.address;
        urlPage.textContent = companie.url;
        
        urlPage.setAttribute('href', companie.url);

        comImg.setAttribute('src', companie.img);
        comImg.setAttribute('alt', `an image of the companie ${companie.name}`);
        comImg.setAttribute('width', 200);
        comImg.setAttribute('height', 200);
        
        card.appendChild(comName);
        card.appendChild(comImg);
        card.appendChild(comAddress);
        card.appendChild(phoneNum);
        card.appendChild(urlPage);

        divel.appendChild(card);
    });
  }

apiFetch();



