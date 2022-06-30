const days = document.querySelectorAll('td');
days.forEach((day) => {
    day.addEventListener('click', () => {
        const name = prompt('Who\'s the guest?', ' ');
        day.innerHTML += `
        <span>${name}</span>
        ` 
    });
})