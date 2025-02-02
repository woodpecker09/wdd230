const message = document.querySelector(".visitDate");
const currentDate = new Date();
const lastVisited = localStorage.getItem('lastVisit');

if (lastVisited === null){
    message.textContent = "Welcome! Let us know if you have any questions."
}else{
    const lastVisitedDate = new Date(lastVisited);
    const timeDifference = currentDate - lastVisitedDate;
    const daysDifference = Math.floor(timeDifference / 86400000);
    if(timeDifference < 86400000){
        message.textContent = "Back so soon! Awesome!";
    } else {
        if(daysDifference === 1){
            message.textContent = "You last visited 1 day ago.";
        } else{
            message.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }
}
localStorage.setItem('lastVisit', currentDate);