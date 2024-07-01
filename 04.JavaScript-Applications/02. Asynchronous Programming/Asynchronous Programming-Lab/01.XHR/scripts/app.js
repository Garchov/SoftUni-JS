// function loadRepos() {
//       const url = 'https://api.github.com/users/testnakov/repos';
//       fetch(url)
//           .then(response => {
//               if (!response.ok) {
//                   throw new Error(`HTTP error! status: ${response.status}`);
//               }
//               return response.json();
//           })
//           .then(data => {
//               document.getElementById('res').textContent = JSON.stringify(data, null, 2);
//           })
//           .catch(error => {
//               console.error('There has been a problem with your fetch operation:', error);
//           });
          async function loadRepos() {
            const url = 'https://api.github.com/users/testnakov/repos';
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                document.getElementById('res').textContent = JSON.stringify(data, null, 2);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }

