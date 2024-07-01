
async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const commitsList = document.getElementById('commits');
    
    // Clear previous results
    commitsList.innerHTML = '';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} (${response.statusText})`);
        }

        const data = await response.json();

        if (data.length === 0) {
            const li = document.createElement('li');
            li.textContent = "No commits found.";
            commitsList.appendChild(li);
        } else {
            data.forEach(commit => {
                const li = document.createElement('li');
                li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                commitsList.appendChild(li);
            });
        }
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${error.message}`;
        commitsList.appendChild(li);
    }
}

