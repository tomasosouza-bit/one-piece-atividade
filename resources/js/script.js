async function load() {
    const REQUEST = await fetch("https://www.onepieceapi.com/api/devil-fruits");
    return await REQUEST.json();
}

async function mostrarFrutas() {
    let dados = await load();
    let container = document.querySelector("#container");

    dados.forEach((element) => {
        container.innerHTML += `
            <section class="card" style="max-width: 320px">
                <img 
                    src="${element.image_url}" 
                    class="card-img-top" 
                    alt="${element.name.en}"
                >

                <div class="card-body">
                    <h4 class="card-title">
                        ${element.name.en}
                    </h4>

                    <p class="card-text">
                        Fruta do Diabo de One Piece.
                    </p>

                    <a href="#" class="btn btn-primary">
                        Ver detalhes
                    </a>
                </div>
            </section>
        `;
    });
}

mostrarFrutas();