const malla = {
  "Semestre 1": ["Introducción a las Matemáticas", "Introducción a la Ingeniería", "Fundamentos de Gestión", "Tecnologías para la Gestión", "Electivo de Desarrollo del Pensamiento"],
  "Semestre 2": ["Álgebra", "Cálculo I", "Química y Medio Ambiente", "Programación", "Electivo de Comunicación"],
  "Semestre 3": ["Álgebra Lineal", "Cálculo II", "Física Mecánica", "Probabilidad y Estadística", "Programación Avanzada", "Electivo de Comunicación"],
  "Semestre 4": ["Cálculo III", "Ciencia y Resistencia de Materiales", "Teoría Organizacional", "Taller de Aplicación Industrial", "Inglés Técnico I"],
  "Semestre 5": ["Ecuaciones Diferenciales", "Mecánica de Fluidos", "Optimización", "Inferencia Estadística", "Contabilidad y Costos", "Inglés Técnico II"],
  "Semestre 6": ["Electricidad y Electromagnetismo", "Termodinámica", "Investigación Operativa", "Microeconomía", "Electivo de Desarrollo Personal"],
  "Semestre 7": ["Electrónica y Electrotecnia", "Gestión de Operaciones I", "Especialidad I", "Macroeconomía", "Ingeniería Económica", "Inglés Técnico III", "Práctica I"],
  "Semestre 8": ["Gestión de Operaciones II", "Consultoría de Empresas", "Gestión Estratégica", "E-Commerce & E-Business", "Finanzas", "Inglés Técnico IV"],
  "Semestre 9": ["Procesos Industriales", "Especialidad II", "Innovación y Emprendimiento", "Formulación y Evaluación de Proyectos", "Economía y Desarrollo Regional", "Electivo de Ética", "Práctica II"],
  "Semestre 10": ["Simulación de Procesos", "Derecho de Empresa y Ambiental", "Marketing", "Administración y Dirección de Proyectos", "Plan de Negocios", "Electivo de Responsabilidad Social"],
  "Semestre 11": ["Especialidad III", "Trabajo de Título"]
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
