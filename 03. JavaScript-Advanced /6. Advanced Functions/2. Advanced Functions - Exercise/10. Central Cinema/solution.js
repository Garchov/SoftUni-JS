function solve() {
    const addForm = document.getElementById('add-new');
    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    addForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = addForm.querySelector('input[placeholder="Name"]');
        const hallInput = addForm.querySelector('input[placeholder="Hall"]');
        const priceInput = addForm.querySelector('input[placeholder="Ticket Price"]');

        const name = nameInput.value.trim();
        const hall = hallInput.value.trim();
        const price = parseFloat(priceInput.value.trim());

        if (name === '' || hall === '' || isNaN(price)) {
            alert('Please fill out all fields correctly.');
            return;
        }

        // Clear inputs
        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';

        // Create new movie item
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = name;
        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        const div = document.createElement('div');
        const strongPrice = document.createElement('strong');
        strongPrice.textContent = price.toFixed(2);
        const ticketsInput = document.createElement('input');
        ticketsInput.setAttribute('type', 'text');
        ticketsInput.setAttribute('placeholder', 'Tickets Sold');
        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';

        archiveButton.addEventListener('click', function() {
            const ticketsSold = parseFloat(ticketsInput.value.trim());
            if (isNaN(ticketsSold)) {
                alert('Please enter a valid number of tickets sold.');
                return;
            }

            const totalProfit = ticketsSold * price;
            const archiveLi = document.createElement('li');
            const archiveSpan = document.createElement('span');
            archiveSpan.textContent = name;
            const archiveStrong = document.createElement('strong');
            archiveStrong.textContent = `Total amount: ${totalProfit.toFixed(2)}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', function() {
                archiveLi.remove();
            });

            archiveLi.appendChild(archiveSpan);
            archiveLi.appendChild(archiveStrong);
            archiveLi.appendChild(deleteButton);
            archiveList.appendChild(archiveLi);
        });

        div.appendChild(strongPrice);
        div.appendChild(ticketsInput);
        div.appendChild(archiveButton);

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);

        moviesList.appendChild(li);
    });

    clearButton.addEventListener('click', function() {
        archiveList.innerHTML = '';
    });
}