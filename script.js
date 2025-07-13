
 // script.js (solo la parte de datos)
const materias = [
  { anio: "Semestre 1", semestres: [
    { numero: "1º Semestre", materias: [
      { id: "s1_1", nombre: "Introducción a las Matemáticas", previas: [] },
      { id: "s1_2", nombre: "Introducción a la Ingeniería", previas: [] },
      { id: "s1_3", nombre: "Fundamentos de Gestión", previas: [] },
      { id: "s1_4", nombre: "Tecnologías para la Gestión", previas: [] },
      { id: "s1_5", nombre: "Electivo de Desarrollo del Pensamiento", previas: [] }
    ]}
  ]},
  { anio: "Semestre 2", semestres: [
    { numero: "2º Semestre", materias: [
      { id: "s2_1", nombre: "Álgebra", previas: ["s1_1"] },
      { id: "s2_2", nombre: "Cálculo I", previas: ["s1_1"] },
      { id: "s2_3", nombre: "Química y Medio Ambiente", previas: [] },
      { id: "s2_4", nombre: "Programación", previas: ["s1_2"] },
      { id: "s2_5", nombre: "Electivo de Comunicación", previas: [] }
    ]}
  ]},
  { anio: "Semestre 3", semestres: [
    { numero: "3º Semestre", materias: [
      { id: "s3_1", nombre: "Álgebra Lineal", previas: ["s2_1"] },
      { id: "s3_2", nombre: "Cálculo II", previas: ["s2_2"] },
      { id: "s3_3", nombre: "Física Mecánica", previas: ["s2_2"] },
      { id: "s3_4", nombre: "Probabilidad y Estadística", previas: ["s2_2"] },
      { id: "s3_5", nombre: "Programación Avanzada", previas: ["s2_4"] },
      { id: "s3_6", nombre: "Electivo de Comunicación", previas: [] }
    ]}
  ]},
  { anio: "Semestre 4", semestres: [
    { numero: "4º Semestre", materias: [
      { id: "s4_1", nombre: "Cálculo III", previas: ["s3_2"] },
      { id: "s4_2", nombre: "Ciencia y Resistencia de Materiales", previas: ["s3_3"] },
      { id: "s4_3", nombre: "Teoría Organizacional", previas: ["s1_3"] },
      { id: "s4_4", nombre: "Taller de Aplicación Industrial", previas: ["s2_4"] },
      { id: "s4_5", nombre: "Inglés Técnico I", previas: [] }
    ]}
  ]},
  { anio: "Semestre 5", semestres: [
    { numero: "5º Semestre", materias: [
      { id: "s5_1", nombre: "Ecuaciones Diferenciales", previas: ["s4_1"] },
      { id: "s5_2", nombre: "Mecánica de Fluidos", previas: ["s4_1"] },
      { id: "s5_3", nombre: "Optimización", previas: ["s4_1"] },
      { id: "s5_4", nombre: "Inferencia Estadística", previas: ["s3_4"] },
      { id: "s5_5", nombre: "Contabilidad y Costos", previas: ["s1_3"] },
      { id: "s5_6", nombre: "Inglés Técnico II", previas: ["s4_5"] }
    ]}
  ]},
  { anio: "Semestre 6", semestres: [
    { numero: "6º Semestre", materias: [
      { id: "s6_1", nombre: "Electricidad y Electromagnetismo", previas: ["s2_4"] },
      { id: "s6_2", nombre: "Termodinámica", previas: ["s5_1"] },
      { id: "s6_3", nombre: "Investigación Operativa", previas: ["s4_1"] },
      { id: "s6_4", nombre: "Microeconomía", previas: ["s2_1"] },
      { id: "s6_5", nombre: "Electivo de Desarrollo Personal", previas: [] }
    ]}
  ]},
  { anio: "Semestre 7", semestres: [
    { numero: "7º Semestre", materias: [
      { id: "s7_1", nombre: "Electrónica y Electrotecnia", previas: ["s6_1"] },
      { id: "s7_2", nombre: "Gestión de Operaciones I", previas: ["s5_3"] },
      { id: "s7_3", nombre: "Especialidad I", previas: [] },  
      { id: "s7_4", nombre: "Macroeconomía", previas: ["s6_4"] },
      { id: "s7_5", nombre: "Ingeniería Económica", previas: ["s5_3"] },
      { id: "s7_6", nombre: "Inglés Técnico III", previas: ["s5_6"] },
      { id: "s7_7", nombre: "Práctica I", previas: ["s4_4"] }
    ]}
  ]},
  { anio: "Semestre 8", semestres: [
    { numero: "8º Semestre", materias: [
      { id: "s8_1", nombre: "Gestión de Operaciones II", previas: ["s7_2"] },
      { id: "s8_2", nombre: "Consultoría de Empresas", previas: ["s4_3"] },
      { id: "s8_3", nombre: "Gestión Estratégica", previas: ["s7_2"] },
      { id: "s8_4", nombre: "E-Commerce & E-Business", previas: ["s4_4"] },
      { id: "s8_5", nombre: "Finanzas", previas: ["s7_5"] },
      { id: "s8_6", nombre: "Inglés Técnico IV", previas: ["s7_6"] }
    ]}
  ]},
  { anio: "Semestre 9", semestres: [
    { numero: "9º Semestre", materias: [
      { id: "s9_1", nombre: "Procesos Industriales", previas: ["s3_4"] },
      { id: "s9_2", nombre: "Especialidad II", previas: [] },
      { id: "s9_3", nombre: "Innovación y Emprendimiento", previas: ["s4_3"] },
      { id: "s9_4", nombre: "Formulación y Evaluación de Proyectos", previas: ["s5_3"] },
      { id: "s9_5", nombre: "Economía y Desarrollo Regional", previas: ["s6_4"] },
      { id: "s9_6", nombre: "Electivo de Ética", previas: [] },
      { id: "s9_7", nombre: "Práctica II", previas: ["s7_7"] }
    ]}
  ]},
  { anio: "Semestre 10", semestres: [
    { numero: "10º Semestre", materias: [
      { id: "s10_1", nombre: "Simulación de Procesos", previas: ["s5_1"] },
      { id: "s10_2", nombre: "Derecho de Empresa y Ambiental", previas: ["s4_3"] },
      { id: "s10_3", nombre: "Marketing", previas: [] },
      { id: "s10_4", nombre: "Administración y Dirección de Proyectos", previas: ["s8_3"] },
      { id: "s10_5", nombre: "Plan de Negocios", previas: ["s9_4"] },
      { id: "s10_6", nombre: "Electivo de Responsabilidad Social", previas: [] }
    ]}
  ]},
  { anio: "Semestre 11", semestres: [
    { numero: "11º Semestre", materias: [
      { id: "s11_1", nombre: "Especialidad III", previas: [] },
      { id: "s11_2", nombre: "Trabajo de Título", previas: ["s10_4"] }
    ]}
  ]}
];
