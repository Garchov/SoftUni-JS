async function loadRepos() {
    const username = document.getElementById('username').value;
    const reposList = document.getElementById('repos');
    const url = `https://api.github.com/users/${username}/repos`;

    // Clear previous results
    reposList.innerHTML = '';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} (${response.statusText})`);
        }

        const data = await response.json();

        if (data.length === 0) {
            const li = document.createElement('li');
            li.textContent = "User has no repositories.";
            reposList.appendChild(li);
        } else {
            data.forEach(repo => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = repo.html_url;
                a.textContent = repo.full_name;
                li.appendChild(a);
                reposList.appendChild(li);
            });
        }
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${error.message}`;
        reposList.appendChild(li);
    }
}



	// fetch(url)
	// 	.then(response => {
	// 		if (response.status == 404) {
	// 			throw new Error('User not found');
	// 		}

	// 		return response.json()
	// 	})
	// 	.then(data => {
	// 		ulElement.innerHTML = '';

	// 		data.forEach(r => {
	// 			const liElement = document.createElement('li');
	// 			const a = document.createElement('a');
	// 			a.setAttribute('href', r.html_url);
	// 			a.textContent = r.full_name;
	// 			liElement.appendChild(a);
	// 			ulElement.appendChild(liElement);
	// 		})
	// 	})
	// 	.catch(error => {
	// 		ulElement.innerHTML = '';
	// 		const liElement = document.createElement('li');
	// 		liElement.textContent = error;
	// 		ulElement.appendChild(liElement);
	// 	});
}