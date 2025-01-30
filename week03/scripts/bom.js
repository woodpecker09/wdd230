document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button[type="submit"]');
    const list = document.querySelector('#list');

    let chaptersArray = getChapterList() || [];

    chaptersArray.forEach(chapter => {
        displayList(chapter);
      });

    button.addEventListener('click', () => {
        if (input.value.trim() !== '') {  
        
            displayList(input.value); 
            chaptersArray.push(input.value); 
            setChapterList(); 
            input.value = '';
            input.focus(); 
        }
    });
    
    function displayList(item){
        const li = document.createElement('li'); 
        const deleteButton = document.createElement('button');         
        li.textContent = item;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContent);
            item.focus();
        });
    }
    
    function setChapterList(){
        localStorage.setItem('BOMFavoriteList', JSON.stringify(chaptersArray));
    }
    
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }
        
    
    function getChapterList(){
        return JSON.parse(localStorage.getItem('BOMFavoriteList'))
    }
});
