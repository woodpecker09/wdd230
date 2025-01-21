document.getElementById('theme').addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.style.setProperty('--background-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--txt-color-info', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--links-color', 'rgba(255,255,255,0.2)');
    } else {
        document.documentElement.style.setProperty('--background-color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--txt-color-info', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--links-color', 'rgba(0,0,0,0.2);');
    }
});

// --font-family: "Roboto", "arial";
// --background-color-title: rgb(29, 77, 114);
// --background-color: rgb(255, 255, 255);
//     --links-color:rgba(0,0,0,0.2);
// --dark-faint: rgba(0,0,0,0.2);
// --white-faint: rgba(255,255,255,0.2);
// --txt-color-title: rgb(255, 255, 255);
// --txt-color-info: rgb(0, 0, 0);