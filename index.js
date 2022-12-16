async function getUsers() {
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
        <h1>${user.name}</h1>
        <p>${user.description}</p>
        <center><img src="${user.image_url}" ></center>
         
        <ul>${user.reviews}</ul>
                         
        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();