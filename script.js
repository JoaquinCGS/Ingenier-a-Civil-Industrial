const malla = {
  "Semestre 1": ["Introducción a las Matemáticas", "Álgebra", "Física Mecánica", "Química y Medio Ambiente", "Introducción a la Ingeniería", "Electivo de Comunicación", "Inglés Técnico I"],
  "Semestre 2": ["Álgebra Lineal", "Cálculo I", "Programación", "Fundamentos de Gestión", "Electivo de Desarrollo del Pensamiento", "Electivo de Comunicación", "Inglés Técnico II"],
  "Semestre 3": ["Cálculo II", "Probabilidad y Estadística", "Tecnologías para la Gestión", "Teoría Organizacional", "Electivo de Desarrollo Personal", "Inglés Técnico III"],
  "Semestre 4": ["Cálculo III", "Ecuaciones Diferenciales", "Programación Avanzada", "Electricidad y Electromagnetismo", "Contabilidad y Costos", "Inglés Técnico IV"],
  "Semestre 5": ["Ciencia y Resistencia de Materiales", "Termodinámica", "Microeconomía", "Optimización", "Gestión de Operaciones I"],
  "Semestre 6": ["Mecánica de Fluidos", "Macroeconomía", "Inferencia Estadística", "Investigación Operativa", "Gestión de Operaciones II"],
  "Semestre 7": ["Simulación de Procesos", "Derecho de Empresa y Ambiental", "Procesos Industriales", "Especialidad I", "Marketing", "E-commerce & E-business"],
  "Semestre 8": ["Consultoría de Empresas", "Especialidad II", "Finanzas", "Gestión Estratégica", "Trabajo de Título (Inicio)"],
  "Semestre 9": ["Especialidad III", "Plan de Negocios", "Economía y Desarrollo Regional", "Formulación y Evaluación de Proyectos", "Ingeniería Económica"],
  "Semestre 10": ["Administración y Dirección de Proyectos", "Innovación y Emprendimiento", "Electivo de Responsabilidad Social", "Electivo de Ética", "Trabajo de Título (Cierre)"],
  "Semestre 11": ["Práctica I", "Práctica II"]
};

const contenedor = document.getElementById("semestres");

for (const [semestre, ramos] of Object.entries(malla)) {
  const div = document.createElement("div");
  div.className = "semestre";
  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  div.appendChild(titulo);

  ramos.forEach(ramo => {
    const p = document.createElement("p");
    p.textContent = ramo;
    p.className = "ramo";
    const key = `${semestre}::${ramo}`;
    if (localStorage.getItem(key) === "1") {
      p.classList.add("tachado");
    }
    p.addEventListener("click", () => {
      p.classList.toggle("tachado");
      localStorage.setItem(key, p.classList.contains("tachado") ? "1" : "0");
    });
    div.appendChild(p);
  });

  contenedor.appendChild(div);
}