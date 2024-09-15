let url = 'https://rickandmortyapi.com/api/character';
let container = document.getElementById("container");

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
       
        data.results.map(item => {
            let box = document.createElement('div')
            let text = document.createElement("p");
            let img = document.createElement("img");
            let link = document.createElement("a");

            box.classList.add("box");
            text.textContent = item.name;
            img.src = item.image;
            // img.className = "image";
            img.classList.add("image");

            box.appendChild(text);
            box.appendChild(img);

            container.appendChild(box);
        })

    })