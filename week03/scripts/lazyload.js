const today = new Date();

const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastModification = new Date(document.lastModified)

let options = { 
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  
};

let formattedDate = new Intl.DateTimeFormat('en-US', options).format(lastModification);

formattedDate = formattedDate.replace(',', '');

document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;