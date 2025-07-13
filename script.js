const materias = [
  { anio: "Semestre 1", semestres: [
    { numero: "1º Semestre", materias: [
      { id: "s1_1", nombre: "Introducción a las Matemáticas" },
      { id: "s1_2", nombre: "Introducción a la Ingeniería" },
      { id: "s1_3", nombre: "Fundamentos de Gestión" },
      { id: "s1_4", nombre: "Tecnologías para la Gestión" },
      { id: "s1_5", nombre: "Electivo de Desarrollo del Pensamiento" }
    ]}
  ]},
  { anio: "Semestre 2", semestres: [
    { numero: "2º Semestre", materias: [
      { id: "s2_1", nombre: "Álgebra" },
      { id: "s2_2", nombre: "Cálculo I" },
      { id: "s2_3", nombre: "Química y Medio Ambiente" },
      { id: "s2_4", nombre: "Programación" },
      { id: "s2_5", nombre: "Electivo de Comunicación" }
    ]}
  ]},
  { anio: "Semestre 3", semestres: [
    { numero: "3º Semestre", materias: [
      { id: "s3_1", nombre: "Álgebra Lineal" },
      { id: "s3_2", nombre: "Cálculo II" },
      { id: "s3_3", nombre: "Física Mecánica" },
      { id: "s3_4", nombre: "Probabilidad y Estadística" },
      { id: "s3_5", nombre: "Programación Avanzada" },
      { id: "s3_6", nombre: "Electivo de Comunicación" }
    ]}
  ]},
  { anio: "Semestre 4", semestres: [
    { numero: "4º Semestre", materias: [
      { id: "s4_1", nombre: "Cálculo III" },
      { id: "s4_2", nombre: "Ciencia y Resistencia de Materiales" },
      { id: "s4_3", nombre: "Teoría Organizacional" },
      { id: "s4_4", nombre: "Taller de Aplicación Industrial" },
      { id: "s4_5", nombre: "Inglés Técnico I" }
    ]}
  ]},
  { anio: "Semestre 5", semestres: [
    { numero: "5º Semestre", materias: [
      { id: "s5_1", nombre: "Ecuaciones Diferenciales" },
      { id: "s5_2", nombre: "Mecánica de Fluidos" },
      { id: "s5_3", nombre: "Optimización" },
      { id: "s5_4", nombre: "Inferencia Estadística" },
      { id: "s5_5", nombre: "Contabilidad y Costos" },
      { id: "s5_6", nombre: "Inglés Técnico II" }
    ]}
  ]},
  { anio: "Semestre 6", semestres: [
    { numero: "6º Semestre", materias: [
      { id: "s6_1", nombre: "Electricidad y Electromagnetismo" },
      { id: "s6_2", nombre: "Termodinámica" },
      { id: "s6_3", nombre: "Investigación Operativa" },
      { id: "s6_4", nombre: "Microeconomía" },
      { id: "s6_5", nombre: "Electivo de Desarrollo Personal" }
    ]}
  ]},
  { anio: "Semestre 7", semestres: [
    { numero: "7º Semestre", materias: [
      { id: "s7_1", nombre: "Electrónica y Electrotecnia" },
      { id: "s7_2", nombre: "Gestión de Operaciones I" },
      { id: "s7_3", nombre: "Especialidad I" },
      { id: "s7_4", nombre: "Macroeconomía" },
      { id: "s7_5", nombre: "Ingeniería Económica" },
      { id: "s7_6", nombre: "Inglés Técnico III" },
      { id: "s7_7", nombre: "Práctica I" }
    ]}
  ]},
  { anio: "Semestre 8", semestres: [
    { numero: "8º Semestre", materias: [
      { id: "s8_1", nombre: "Gestión de Operaciones II" },
      { id: "s8_2", nombre: "Consultoría de Empresas" },
      { id: "s8_3", nombre: "Gestión Estratégica" },
      { id: "s8_4", nombre: "E-Commerce & E-Business" },
      { id: "s8_5", nombre: "Finanzas" },
      { id: "s8_6", nombre: "Inglés Técnico IV" }
    ]}
  ]},
  { anio: "Semestre 9", semestres: [
    { numero: "9º Semestre", materias: [
      { id: "s9_1", nombre: "Procesos Industriales" },
      { id: "s9_2", nombre: "Especialidad II" },
      { id: "s9_3", nombre: "Innovación y Emprendimiento" },
      { id: "s9_4", nombre: "Formulación y Evaluación de Proyectos" },
      { id: "s9_5", nombre: "Economía y Desarrollo Regional" },
      { id: "s9_6", nombre: "Electivo de Ética" },
      { id: "s9_7", nombre: "Práctica II" }
    ]}
  ]},
  { anio: "Semestre 10", semestres: [
    { numero: "10º Semestre", materias: [
      { id: "s10_1", nombre: "Simulación de Procesos" },
      { id: "s10_2", nombre: "Derecho de Empresa y Ambiental" },
      { id: "s10_3", nombre: "Marketing" },
      { id: "s10_4", nombre: "Administración y Dirección de Proyectos" },
      { id: "s10_5", nombre: "Plan de Negocios" },
      { id: "s10_6", nombre: "Electivo de Responsabilidad Social" }
    ]}
  ]},
  { anio: "Semestre 11", semestres: [
    { numero: "11º Semestre", materias: [
      { id: "s11_1", nombre: "Especialidad III" },
      { id: "s11_2", nombre: "Trabajo de Título" }
    ]}
  ]}
];

const estadoMaterias = JSON.parse(localStorage.getItem("estadoMaterias") || "{}");

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  materias.forEach(anio => {
    const divAnio = document.createElement("div");
    divAnio.className = "year";

    const h2 = document.createElement("h2");
    h2.textContent = anio.anio;
    divAnio.appendChild(h2);

    anio.semestres.forEach(sem => {
      const divSem = document.createElement("div");
      divSem.className = "semestre";

      const h3 = document.createElement("h3");
      h3.textContent = sem.numero;
      divSem.appendChild(h3);

      sem.materias.forEach(materia => {
        const divMat = document.createElement("div");
        divMat.textContent = materia.nombre;
        divMat.className = "materia";
        divMat.dataset.id = materia.id;

        if (estadoMaterias[materia.id]) {
          divMat.classList.add("tachada");
        }

        divMat.addEventListener("click", () => {
          divMat.classList.toggle("tachada");
          estadoMaterias[materia.id] = divMat.classList.contains("tachada");
          localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
        });

        divSem.appendChild(divMat);
      });

      divAnio.appendChild(divSem);
    });

    contenedor.appendChild(divAnio);
  });
}

crearMalla();
