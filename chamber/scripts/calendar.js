document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const monthYear = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let currentDate = new Date();
  
    function renderCalendar(date) {
      calendar.innerHTML = '';
      const year = date.getFullYear();
      const month = date.getMonth();
      const today = new Date().getDate();
  
      monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
  
      days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
      });
  
      const firstDay = new Date(year, month, 1).getDay();
      console.log(firstDay);

      const daysInMonth = new Date(year, month + 1, 0).getDate();
      console.log(daysInMonth);
  
      for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement('div');
        blank.className = 'date';
        calendar.appendChild(blank);
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'date';
        dateElement.setAttribute('id', `${date.toLocaleString('default', { month: 'long' })}${i}${year}`)
        if (i === today && month === new Date().getMonth() && year === new Date().getFullYear()) {
          dateElement.classList.add('current-day');
        }
        dateElement.textContent = i;
        calendar.appendChild(dateElement);
      }
    }
  
    prevButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });
  
    nextButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });
  
    renderCalendar(currentDate);
  });
  