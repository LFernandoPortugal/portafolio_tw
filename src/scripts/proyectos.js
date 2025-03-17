// src/scripts/proyectos.js
const proyectos = [
    {
        titulo: "Página web para proyecto de instituto Khipu",
        descripcion: "Elaborado con HTML, CSS y JavaScript",
        imagen: "./src/images/projects/proyecto1.png"
    },
    {
        titulo: "Página web sobre Pokémon - BYU",
        descripcion: "Elaborado con HTML, CSS y JavaScript",
        imagen: "./src/images/projects/proyecto2.png"
    },
    {
        titulo: "Tower Defense en Python - BYU",
        descripcion: "Elaborado con Python",
        imagen: "./src/images/projects/proyecto3.png"
    }
];

function cargarProyectos() {
    const contenedorProyectos = document.querySelector("#contenedor-proyectos");

    proyectos.forEach(proyecto => {
        const proyectoHTML = `
            <div class="bg-[#1e293b] flex flex-col text-center rounded-lg p-4 hover:scale-105 transition-transform">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="rounded-lg">
                <h3 class="text-xl font-bold mt-4">${proyecto.titulo}</h3>
                <p class="mt-2">${proyecto.descripcion}</p>
            </div>
        `;
        contenedorProyectos.innerHTML += proyectoHTML;
    });
}
cargarProyectos();