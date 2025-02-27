async function getPublicationsAsync() {
    const response = await fetch('http://localhost:3000/publications');
    const json = await response.json();
    return json;
}

async function loadPublications() {
    const publications = await getPublicationsAsync();
    const parent = document.getElementById('publications');

    publications.forEach(publication => {
        parent.insertAdjacentHTML('beforeend', `
            <div class="col">
                <a href="post.html?id=${publication.id}">
                    <div class="card" style="width: 18rem;">
                        <img src="../logo.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${publication.title}</h5>
                            <p class="card-text">${publication.author}</p>
                            <p class="card-text">Publié le : ${publication.datePublication}</p>
                        </div>
                    </div>
                </a>
            </div>
        `);
    })
}

loadPublications();


