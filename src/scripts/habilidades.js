const habilidades = [
    {
        nombre: "Python",
        imagen: "./src/images/skills/python.png",
        nivel: "Avanzado"
    },
    {
        nombre: "HTML",
        imagen: "./src/images/skills/html.png",
        nivel: "Avanzado"
    },
    {
        nombre: "CSS",
        imagen: "./src/images/skills/css.png",
        nivel: "Avanzado"
    },
    {
        nombre: "JavaScript",
        imagen: "./src/images/skills/js.png",
        nivel: "Intermedio"
    },
    {
        nombre: "C#",
        imagen: "./src/images/skills/c-sharp.png",
        nivel: "Intermedio"
    },
    {
        nombre: "SQL",
        imagen: "./src/images/skills/sql-server.png",
        nivel: "Intermedio"
    }
];

function cargarHabilidades() {
    const contenedorHabilidades = document.getElementById("contenedor-habilidades");

    habilidades.forEach(habilidad => {
        const skillHTML = `
            <div class="flex flex-col items-center">
                <img src="${habilidad.imagen}" alt="${habilidad.nombre}" class="w-20 h-20 border-2 border-[#1e293b] rounded-lg p-2 bg-[#1e293b] shadow-lg hover:scale-110 transition-transform">
                <p class="mt-2 text-center">${habilidad.nombre}</p>
                <p class="text-sm text-[#a4ff7a]">${habilidad.nivel}</p>
            </div>
        `;
        contenedorHabilidades.innerHTML += skillHTML;
    });
}
cargarHabilidades();