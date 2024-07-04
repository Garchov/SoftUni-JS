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


        function loadRepos() {
            let button = document.getElementById("load");
         
            button.addEventListener('click', function () {
               let url = 'https://api.github.com/users/testnakov/repos';
         
               const httpRequest = new XMLHttpRequest();
         
               httpRequest.addEventListener('readystatechange', function () {
         
                  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         
                     document.getElementById("res").textContent = httpRequest.responseText;
                  }
               });
         
               httpRequest.open("GET", url);
         
               httpRequest.send();
            });
         }
         
         window.addEventListener('load', () => {
            loadRepos();
         });
      