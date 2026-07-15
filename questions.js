// ============================================
// ICFES Prep Pro — Question Bank
// ============================================

const AREAS = [
    {
        id: 'matematicas',
        name: 'Matemáticas',
        icon: '📐',
        color: 'blue',
        colorVar: '--accent-blue',
        desc: 'Álgebra, geometría, estadística y razonamiento cuantitativo.',
        guide: [
            {
                title: 'Regla de Tres y Proporcionalidad',
                tip: true,
                body: `<ul>
                    <li><strong>Regla de tres simple:</strong> Si A es a B como C es a X → X = (B × C) / A.</li>
                    <li><strong>Directa:</strong> Si uno sube, el otro sube.</li>
                    <li><strong>Inversa:</strong> Si uno sube, el otro baja (multiplica cruzado al revés).</li>
                    <li>Practica con ejemplos de precios, distancias y tiempos.</li>
                </ul>`
            },
            {
                title: 'Porcentajes',
                body: `<ul>
                    <li><strong>Hallar %:</strong> (parte / total) × 100</li>
                    <li><strong>Descuento:</strong> Precio × (1 - %descuento/100)</li>
                    <li><strong>Aumento:</strong> Precio × (1 + %aumento/100)</li>
                    <li>Clave: convierte el % a decimal dividiéndolo entre 100.</li>
                </ul>`
            },
            {
                title: 'Geometría Básica',
                body: `<ul>
                    <li><strong>Área del triángulo:</strong> (base × altura) / 2</li>
                    <li><strong>Área del círculo:</strong> π × r²</li>
                    <li><strong>Perímetro del rectángulo:</strong> 2 × (largo + ancho)</li>
                    <li><strong>Volumen del cilindro:</strong> π × r² × h</li>
                    <li>Recuerda: π ≈ 3.14</li>
                </ul>`
            },
            {
                title: 'Lectura de Gráficos y Tablas',
                tip: true,
                body: `<ul>
                    <li>Lee <strong>siempre</strong> los ejes (¿qué representa cada uno?).</li>
                    <li>Identifica tendencias: ¿sube, baja o se mantiene?</li>
                    <li>En gráficos de barras, compara alturas visualmente.</li>
                    <li>En tablas, subraya los datos que la pregunta pide.</li>
                </ul>`
            },
            {
                title: 'Probabilidad y Estadística',
                body: `<ul>
                    <li><strong>Probabilidad:</strong> Casos favorables / Casos totales</li>
                    <li><strong>Media (promedio):</strong> Suma de datos / cantidad de datos</li>
                    <li><strong>Mediana:</strong> El dato del centro cuando están ordenados</li>
                    <li><strong>Moda:</strong> El dato que más se repite</li>
                </ul>`
            }
        ]
    },
    {
        id: 'lectura',
        name: 'Lectura Crítica',
        icon: '📖',
        color: 'emerald',
        colorVar: '--accent-emerald',
        desc: 'Comprensión, análisis e interpretación de textos.',
        guide: [
            {
                title: 'Identificar la Idea Principal',
                tip: true,
                body: `<ul>
                    <li>Pregúntate: <strong>¿De qué habla el texto en una oración?</strong></li>
                    <li>Suele estar en el primer o último párrafo.</li>
                    <li>Las ideas secundarias dan detalles, ejemplos o argumentos de apoyo.</li>
                </ul>`
            },
            {
                title: 'Propósito del Autor',
                body: `<ul>
                    <li><strong>Informar:</strong> Da datos sin opinión personal.</li>
                    <li><strong>Persuadir:</strong> Quiere convencerte de algo (usa opiniones y argumentos).</li>
                    <li><strong>Narrar:</strong> Cuenta una historia con personajes y eventos.</li>
                    <li><strong>Describir:</strong> Detalla características de algo.</li>
                </ul>`
            },
            {
                title: 'Conectores Lógicos',
                tip: true,
                body: `<ul>
                    <li><strong>Sin embargo / No obstante:</strong> Introduce una idea contraria (contraste).</li>
                    <li><strong>Por lo tanto / En consecuencia:</strong> Introduce una conclusión.</li>
                    <li><strong>Además / Asimismo:</strong> Agrega información (adición).</li>
                    <li><strong>Porque / Ya que / Puesto que:</strong> Explica una causa.</li>
                    <li>Subraya los conectores, te dicen la relación entre las ideas.</li>
                </ul>`
            },
            {
                title: 'Significado por Contexto',
                body: `<ul>
                    <li>Si no conoces una palabra, lee la oración completa.</li>
                    <li>Busca pistas: sinónimos, antónimos, ejemplos cercanos.</li>
                    <li>Intenta reemplazar la palabra por cada opción y mira cuál tiene más sentido.</li>
                </ul>`
            }
        ]
    },
    {
        id: 'ciencias',
        name: 'Ciencias Naturales',
        icon: '🔬',
        color: 'amber',
        colorVar: '--accent-amber',
        desc: 'Biología, química y física integradas.',
        guide: [
            {
                title: 'Biología — La Célula',
                body: `<ul>
                    <li><strong>Membrana celular:</strong> Controla qué entra y sale.</li>
                    <li><strong>Núcleo:</strong> Contiene el ADN (instrucciones genéticas).</li>
                    <li><strong>Mitocondria:</strong> Produce energía (ATP). "Central energética".</li>
                    <li><strong>Ribosomas:</strong> Fabrican proteínas.</li>
                    <li><strong>Procariota vs Eucariota:</strong> Procariota NO tiene núcleo definido (bacterias).</li>
                </ul>`
            },
            {
                title: 'Biología — Genética Básica',
                tip: true,
                body: `<ul>
                    <li><strong>Gen dominante (A):</strong> Se expresa siempre que esté presente.</li>
                    <li><strong>Gen recesivo (a):</strong> Solo se expresa en homocigoto (aa).</li>
                    <li><strong>Cuadro de Punnett:</strong> Cruza los alelos de ambos padres para predecir la descendencia.</li>
                    <li>Ejemplo: Aa × Aa → 25% AA, 50% Aa, 25% aa.</li>
                </ul>`
            },
            {
                title: 'Biología — Ecología',
                body: `<ul>
                    <li><strong>Cadena trófica:</strong> Productor → Consumidor primario → Secundario → Terciario → Descomponedor.</li>
                    <li><strong>Fotosíntesis:</strong> CO₂ + H₂O + Luz → Glucosa + O₂</li>
                    <li><strong>Respiración celular:</strong> Glucosa + O₂ → CO₂ + H₂O + Energía (ATP)</li>
                </ul>`
            },
            {
                title: 'Química — Tabla Periódica y Enlaces',
                body: `<ul>
                    <li><strong>Grupos:</strong> Columnas verticales. Mismo número de electrones de valencia.</li>
                    <li><strong>Períodos:</strong> Filas horizontales. Mismo número de capas electrónicas.</li>
                    <li><strong>Enlace iónico:</strong> Metal + No metal (transferencia de electrones).</li>
                    <li><strong>Enlace covalente:</strong> No metal + No metal (comparten electrones).</li>
                    <li><strong>Electronegatividad:</strong> Aumenta hacia arriba y a la derecha.</li>
                </ul>`
            },
            {
                title: 'Física — Cinemática y Leyes de Newton',
                tip: true,
                body: `<ul>
                    <li><strong>Velocidad = Distancia / Tiempo</strong></li>
                    <li><strong>1ª Ley (Inercia):</strong> Un cuerpo en reposo permanece en reposo a menos que actúe una fuerza.</li>
                    <li><strong>2ª Ley:</strong> F = m × a (Fuerza = masa × aceleración)</li>
                    <li><strong>3ª Ley:</strong> Acción y reacción. Fuerzas iguales y opuestas.</li>
                    <li><strong>Energía cinética:</strong> Ec = ½mv². <strong>Energía potencial:</strong> Ep = mgh.</li>
                </ul>`
            }
        ]
    },
    {
        id: 'sociales',
        name: 'Sociales y Ciudadanas',
        icon: '🏛️',
        color: 'rose',
        colorVar: '--accent-rose',
        desc: 'Historia, geografía, constitución y competencias ciudadanas.',
        guide: [
            {
                title: 'Constitución de Colombia',
                tip: true,
                body: `<ul>
                    <li><strong>Ramas del poder:</strong> Legislativa (Congreso), Ejecutiva (Presidente), Judicial (Cortes y Jueces).</li>
                    <li><strong>Tutela:</strong> Mecanismo para proteger derechos fundamentales. Cualquier persona puede interponerla.</li>
                    <li><strong>Derechos fundamentales:</strong> Vida, igualdad, libertad de expresión, educación, salud (Art. 11-41).</li>
                    <li><strong>Estado Social de Derecho:</strong> Colombia se define así en el Art. 1.</li>
                </ul>`
            },
            {
                title: 'Mecanismos de Participación Ciudadana',
                body: `<ul>
                    <li><strong>Voto:</strong> Derecho y deber ciudadano.</li>
                    <li><strong>Plebiscito:</strong> El presidente consulta al pueblo sobre una decisión.</li>
                    <li><strong>Referendo:</strong> El pueblo aprueba o rechaza un proyecto de ley.</li>
                    <li><strong>Consulta popular:</strong> Pregunta al pueblo sobre un asunto de interés.</li>
                    <li><strong>Revocatoria del mandato:</strong> Los ciudadanos pueden revocar a un gobernador o alcalde.</li>
                </ul>`
            },
            {
                title: 'Historia de Colombia (Claves)',
                body: `<ul>
                    <li><strong>1810:</strong> Grito de Independencia (20 de julio).</li>
                    <li><strong>1819:</strong> Batalla de Boyacá. Independencia definitiva.</li>
                    <li><strong>1886:</strong> Constitución centralista.</li>
                    <li><strong>1948:</strong> El Bogotazo (asesinato de Gaitán). Inicio de La Violencia.</li>
                    <li><strong>1991:</strong> Nueva Constitución. Estado Social de Derecho.</li>
                </ul>`
            },
            {
                title: 'Historia Universal (Claves)',
                body: `<ul>
                    <li><strong>Revolución Industrial (s. XVIII-XIX):</strong> Máquina de vapor, urbanización, trabajo asalariado.</li>
                    <li><strong>Revolución Francesa (1789):</strong> Libertad, igualdad, fraternidad. Fin del absolutismo.</li>
                    <li><strong>Primera Guerra Mundial (1914-1918):</strong> Imperios vs. imperios. Tratado de Versalles.</li>
                    <li><strong>Segunda Guerra Mundial (1939-1945):</strong> Nazismo, Holocausto, bomba atómica.</li>
                    <li><strong>Guerra Fría:</strong> EE.UU. (capitalismo) vs. URSS (comunismo). Sin enfrentamiento directo.</li>
                </ul>`
            },
            {
                title: 'Economía Básica',
                tip: true,
                body: `<ul>
                    <li><strong>Oferta y demanda:</strong> Si la demanda sube y la oferta baja → el precio sube.</li>
                    <li><strong>Inflación:</strong> Aumento generalizado de precios. Pierde valor el dinero.</li>
                    <li><strong>PIB:</strong> Producto Interno Bruto. Mide la producción total de un país.</li>
                    <li><strong>Impuestos:</strong> Tributos que los ciudadanos pagan al Estado para financiar servicios públicos.</li>
                </ul>`
            }
        ]
    },
    {
        id: 'ingles',
        name: 'Inglés',
        icon: '🇬🇧',
        color: 'cyan',
        colorVar: '--accent-cyan',
        desc: 'Vocabulario, gramática y comprensión de lectura en inglés.',
        guide: [
            {
                title: 'Tiempos Verbales Clave',
                tip: true,
                body: `<ul>
                    <li><strong>Simple Present:</strong> I work, She works. (Rutinas, hechos)</li>
                    <li><strong>Simple Past:</strong> I worked, She went. (Acciones completadas)</li>
                    <li><strong>Present Continuous:</strong> I am working. (Ahora mismo)</li>
                    <li><strong>Present Perfect:</strong> I have worked. (Experiencia, sin tiempo específico)</li>
                    <li><strong>Future (will/going to):</strong> I will work / I am going to work.</li>
                </ul>`
            },
            {
                title: 'Vocabulario por Contexto',
                body: `<ul>
                    <li>Si no conoces una palabra, lee toda la oración.</li>
                    <li>Busca cognados (palabras similares al español): <em>important, family, natural</em>.</li>
                    <li>Identifica prefijos: <strong>un-</strong> (no), <strong>re-</strong> (otra vez), <strong>dis-</strong> (opuesto).</li>
                    <li>Identifica sufijos: <strong>-tion</strong> (sustantivo), <strong>-ly</strong> (adverbio), <strong>-ful</strong> (lleno de).</li>
                </ul>`
            },
            {
                title: 'Comprensión de Lectura',
                tip: true,
                body: `<ul>
                    <li>Lee primero las preguntas para saber qué buscar.</li>
                    <li>Identifica: <strong>Who?</strong> (¿Quién?) <strong>What?</strong> (¿Qué?) <strong>Where?</strong> (¿Dónde?) <strong>When?</strong> (¿Cuándo?) <strong>Why?</strong> (¿Por qué?)</li>
                    <li>No necesitas entender cada palabra; enfócate en la idea general.</li>
                </ul>`
            },
            {
                title: 'Gramática Frecuente',
                body: `<ul>
                    <li><strong>Comparativos:</strong> -er / more + than (taller than, more important than)</li>
                    <li><strong>Superlativos:</strong> the -est / the most (the tallest, the most important)</li>
                    <li><strong>Condicionales:</strong> If + present → will + verb (If it rains, I will stay home)</li>
                    <li><strong>Modales:</strong> can (poder), must (deber), should (debería)</li>
                </ul>`
            }
        ]
    }
];

// ============================================
// QUESTION BANK — ~50 questions across all areas
// ============================================
const QUESTIONS = [
    // ====== MATEMÁTICAS ======
    {
        area: 'matematicas',
        question: 'Si 5 obreros construyen un muro en 12 días, ¿cuántos días tardarán 10 obreros en construir el mismo muro?',
        options: ['6 días', '24 días', '10 días', '8 días'],
        correct: 0,
        explanation: 'Es una regla de tres inversa: más obreros, menos días. 5 × 12 = 10 × X → X = 60/10 = 6 días.'
    },
    {
        area: 'matematicas',
        question: 'Un producto cuesta $80.000. Si tiene un descuento del 25%, ¿cuánto se paga?',
        options: ['$55.000', '$60.000', '$65.000', '$20.000'],
        correct: 1,
        explanation: 'Descuento = 80.000 × 0.25 = 20.000. Precio final = 80.000 - 20.000 = $60.000.'
    },
    {
        area: 'matematicas',
        question: 'Un triángulo tiene base de 10 cm y altura de 6 cm. ¿Cuál es su área?',
        options: ['60 cm²', '16 cm²', '30 cm²', '36 cm²'],
        correct: 2,
        explanation: 'Área del triángulo = (base × altura) / 2 = (10 × 6) / 2 = 30 cm².'
    },
    {
        area: 'matematicas',
        question: 'En una bolsa hay 3 bolas rojas, 2 azules y 5 verdes. Si se saca una bola al azar, ¿cuál es la probabilidad de que sea azul?',
        options: ['2/10 = 1/5', '2/5', '3/10', '5/10'],
        correct: 0,
        explanation: 'Total de bolas = 3 + 2 + 5 = 10. Probabilidad de azul = 2/10 = 1/5 = 0.2 (20%).'
    },
    {
        area: 'matematicas',
        question: 'Las notas de un estudiante son: 3.5, 4.0, 4.5, 3.0, 5.0. ¿Cuál es la media (promedio)?',
        options: ['3.8', '4.0', '4.2', '3.5'],
        correct: 1,
        explanation: 'Media = (3.5 + 4.0 + 4.5 + 3.0 + 5.0) / 5 = 20.0 / 5 = 4.0.'
    },
    {
        area: 'matematicas',
        question: 'Si un auto recorre 240 km en 3 horas, ¿cuál es su velocidad promedio?',
        options: ['720 km/h', '60 km/h', '80 km/h', '120 km/h'],
        correct: 2,
        explanation: 'Velocidad = Distancia / Tiempo = 240 / 3 = 80 km/h.'
    },
    {
        area: 'matematicas',
        question: '¿Cuál es el valor de x si 3x + 7 = 22?',
        options: ['x = 5', 'x = 7', 'x = 3', 'x = 15'],
        correct: 0,
        explanation: '3x + 7 = 22 → 3x = 22 - 7 → 3x = 15 → x = 15/3 = 5.'
    },
    {
        area: 'matematicas',
        question: 'Una gráfica de barras muestra las ventas mensuales de una tienda. En enero vendieron 50 unidades, en febrero 80 y en marzo 65. ¿En qué mes se vendió más?',
        options: ['Enero', 'Febrero', 'Marzo', 'Los tres meses vendieron igual'],
        correct: 1,
        explanation: 'Febrero tuvo la mayor cantidad de ventas con 80 unidades. Siempre compara las alturas de las barras.'
    },
    {
        area: 'matematicas',
        question: 'Un terreno rectangular mide 15 m de largo y 8 m de ancho. ¿Cuál es su perímetro?',
        options: ['120 m', '46 m', '23 m', '60 m'],
        correct: 1,
        explanation: 'Perímetro = 2 × (largo + ancho) = 2 × (15 + 8) = 2 × 23 = 46 m.'
    },
    {
        area: 'matematicas',
        question: 'Si el 40% de los estudiantes de un colegio son hombres y hay 600 estudiantes en total, ¿cuántas mujeres hay?',
        options: ['240', '360', '400', '200'],
        correct: 1,
        explanation: 'Hombres = 40% de 600 = 240. Mujeres = 600 - 240 = 360. O bien: 60% de 600 = 360.'
    },

    // ====== LECTURA CRÍTICA ======
    {
        area: 'lectura',
        question: `Lee el siguiente texto:

"La deforestación en la Amazonía ha alcanzado niveles alarmantes. Sin embargo, algunos gobiernos han implementado políticas de reforestación que han mostrado resultados prometedores en los últimos años."

¿Cuál es la función del conector "Sin embargo" en el texto?`,
        options: [
            'Introducir una causa del problema',
            'Agregar más información sobre la deforestación',
            'Presentar un contraste o idea opuesta',
            'Dar un ejemplo de deforestación'
        ],
        correct: 2,
        explanation: '"Sin embargo" es un conector de contraste. Introduce una idea que se opone a lo anterior: aunque la deforestación es grave, hay políticas que están funcionando.'
    },
    {
        area: 'lectura',
        question: `"El escritor, con su prosa cargada de metáforas y símbolos, pretende que el lector cuestione las estructuras sociales establecidas."

¿Cuál es el propósito principal del escritor según el texto?`,
        options: [
            'Entretener al lector con historias divertidas',
            'Persuadir al lector para que reflexione críticamente',
            'Informar sobre datos científicos',
            'Describir paisajes naturales'
        ],
        correct: 1,
        explanation: 'El texto indica que el escritor quiere que el lector "cuestione" las estructuras sociales. Esto es persuadir o generar reflexión crítica.'
    },
    {
        area: 'lectura',
        question: `"La educación no debería limitarse a transmitir conocimientos, sino que debe formar ciudadanos capaces de pensar por sí mismos y actuar con responsabilidad social."

¿Cuál es la tesis del autor?`,
        options: [
            'La educación solo debe transmitir conocimientos académicos',
            'Los ciudadanos no necesitan pensar por sí mismos',
            'La educación debe ir más allá del conocimiento e incluir formación ciudadana',
            'La responsabilidad social no es tarea de la educación'
        ],
        correct: 2,
        explanation: 'La tesis es la idea principal que defiende el autor: la educación debe formar ciudadanos críticos y responsables, no solo transmitir conocimiento.'
    },
    {
        area: 'lectura',
        question: `En la frase "El político esgrimió argumentos contundentes durante el debate", la palabra "esgrimió" significa:`,
        options: [
            'Ocultó',
            'Presentó con fuerza',
            'Inventó',
            'Ignoró'
        ],
        correct: 1,
        explanation: '"Esgrimir" en este contexto significa usar o presentar argumentos con firmeza y determinación, como quien empuña un arma.'
    },
    {
        area: 'lectura',
        question: `Lee el texto:

"Las redes sociales han transformado la manera en que nos comunicamos. Por un lado, facilitan el contacto con personas lejanas. Por otro lado, han generado problemas como la desinformación y el ciberacoso."

¿Qué tipo de texto es?`,
        options: [
            'Narrativo',
            'Expositivo-argumentativo',
            'Poético',
            'Instructivo'
        ],
        correct: 1,
        explanation: 'El texto expone un tema (redes sociales) y presenta dos perspectivas (ventajas y desventajas), lo que lo hace expositivo con elementos argumentativos.'
    },
    {
        area: 'lectura',
        question: `"Aunque muchos consideran que la inteligencia artificial reemplazará todos los empleos, la realidad es que esta tecnología complementará las capacidades humanas en la mayoría de los sectores."

¿Qué relación establece el conector "Aunque"?`,
        options: [
            'Causa-efecto',
            'Adición',
            'Concesión (admite algo pero lo contrasta)',
            'Comparación'
        ],
        correct: 2,
        explanation: '"Aunque" es un conector concesivo: admite una postura (la IA reemplazará empleos) pero la contrasta con otra idea que considera más válida.'
    },
    {
        area: 'lectura',
        question: `En un texto argumentativo, ¿cuál de las siguientes opciones es un argumento y no una opinión?`,
        options: [
            '"Yo creo que la educación es importante"',
            '"Según estudios de la UNESCO, los países con mayor inversión en educación tienen mejores índices de desarrollo"',
            '"La educación es lo más bonito del mundo"',
            '"A mí me parece que todos deberían estudiar"'
        ],
        correct: 1,
        explanation: 'Un argumento se basa en evidencia verificable (datos, estudios, hechos). Las opiniones expresan creencias personales sin sustento empírico.'
    },
    {
        area: 'lectura',
        question: `"El río corría mansamente entre las piedras, como si el tiempo no le importara."

¿Qué figura literaria se usa en este fragmento?`,
        options: [
            'Hipérbole',
            'Personificación',
            'Metáfora',
            'Anáfora'
        ],
        correct: 1,
        explanation: 'Se le atribuye al río una cualidad humana: que "no le importara" el tiempo. Esto es una personificación.'
    },

    // ====== CIENCIAS NATURALES ======
    {
        area: 'ciencias',
        question: '¿Cuál es la función principal de la mitocondria en la célula?',
        options: [
            'Almacenar información genética',
            'Producir energía (ATP) mediante respiración celular',
            'Sintetizar proteínas',
            'Controlar qué sustancias entran y salen de la célula'
        ],
        correct: 1,
        explanation: 'La mitocondria es la "central energética" de la célula. Realiza la respiración celular para producir ATP, la molécula de energía.'
    },
    {
        area: 'ciencias',
        question: 'En un cruce entre dos organismos heterocigotos (Aa × Aa), ¿qué porcentaje de la descendencia se espera que sea homocigota recesiva (aa)?',
        options: ['50%', '75%', '25%', '100%'],
        correct: 2,
        explanation: 'Cuadro de Punnett: AA (25%), Aa (50%), aa (25%). Solo el 25% será homocigoto recesivo (aa).'
    },
    {
        area: 'ciencias',
        question: 'En una cadena trófica: Pasto → Conejo → Zorro → Águila. ¿Quién es el consumidor secundario?',
        options: ['El pasto', 'El conejo', 'El zorro', 'El águila'],
        correct: 2,
        explanation: 'Productor = Pasto. Consumidor primario = Conejo (come al productor). Consumidor secundario = Zorro (come al primario). Consumidor terciario = Águila.'
    },
    {
        area: 'ciencias',
        question: '¿Cuál es la ecuación simplificada de la fotosíntesis?',
        options: [
            'Glucosa + O₂ → CO₂ + H₂O + Energía',
            'CO₂ + H₂O + Luz solar → Glucosa + O₂',
            'N₂ + H₂ → NH₃',
            'H₂O → H₂ + O₂'
        ],
        correct: 1,
        explanation: 'La fotosíntesis convierte CO₂ y H₂O en glucosa y O₂ usando energía lumínica. Es lo opuesto a la respiración celular.'
    },
    {
        area: 'ciencias',
        question: '¿Qué tipo de enlace químico se forma entre un átomo de sodio (Na) y uno de cloro (Cl)?',
        options: [
            'Enlace covalente',
            'Enlace metálico',
            'Enlace iónico',
            'Enlace de hidrógeno'
        ],
        correct: 2,
        explanation: 'Na es un metal y Cl es un no metal. El Na transfiere un electrón al Cl, formando iones Na⁺ y Cl⁻ que se atraen por fuerzas electrostáticas: enlace iónico.'
    },
    {
        area: 'ciencias',
        question: 'Según la Segunda Ley de Newton, si un objeto tiene una masa de 10 kg y se le aplica una fuerza neta de 30 N, ¿cuál es su aceleración?',
        options: ['300 m/s²', '3 m/s²', '0.33 m/s²', '20 m/s²'],
        correct: 1,
        explanation: 'F = m × a → a = F/m = 30/10 = 3 m/s².'
    },
    {
        area: 'ciencias',
        question: 'Un objeto se deja caer desde una altura de 20 m. ¿Qué le sucede a su energía potencial y cinética mientras cae?',
        options: [
            'Ambas aumentan',
            'La potencial aumenta y la cinética disminuye',
            'La potencial disminuye y la cinética aumenta',
            'Ambas disminuyen'
        ],
        correct: 2,
        explanation: 'Al caer, la altura disminuye (Ep = mgh disminuye) y la velocidad aumenta (Ec = ½mv² aumenta). La energía se transforma de potencial a cinética.'
    },
    {
        area: 'ciencias',
        question: '¿Cuál de las siguientes es una diferencia entre célula procariota y eucariota?',
        options: [
            'Las procariotas son más grandes',
            'Las eucariotas no tienen membrana celular',
            'Las procariotas no tienen núcleo definido',
            'Las eucariotas no tienen ribosomas'
        ],
        correct: 2,
        explanation: 'Las células procariotas (bacterias) NO tienen núcleo definido; su ADN está libre en el citoplasma. Las eucariotas sí tienen núcleo rodeado por una membrana.'
    },
    {
        area: 'ciencias',
        question: 'La electronegatividad en la tabla periódica aumenta:',
        options: [
            'De derecha a izquierda y de arriba hacia abajo',
            'De izquierda a derecha y de abajo hacia arriba',
            'Solo de izquierda a derecha',
            'Solo de arriba hacia abajo'
        ],
        correct: 1,
        explanation: 'La electronegatividad aumenta hacia la derecha (más no metálico) y hacia arriba (los átomos son más pequeños y atraen más los electrones). El Flúor es el más electronegativo.'
    },
    {
        area: 'ciencias',
        question: '¿Qué ley de Newton explica por qué al empujar una pared sientes que "empuja de vuelta"?',
        options: [
            'Primera Ley (Inercia)',
            'Segunda Ley (F = ma)',
            'Tercera Ley (Acción y Reacción)',
            'Ley de Gravitación Universal'
        ],
        correct: 2,
        explanation: 'La Tercera Ley de Newton: toda acción tiene una reacción igual y opuesta. Al empujar la pared, ella ejerce una fuerza igual pero en sentido contrario sobre ti.'
    },

    // ====== SOCIALES Y CIUDADANAS ======
    {
        area: 'sociales',
        question: '¿Cuál es el mecanismo legal en Colombia para proteger los derechos fundamentales de una persona cuando estos son vulnerados?',
        options: [
            'El referendo',
            'La acción de tutela',
            'El plebiscito',
            'La consulta popular'
        ],
        correct: 1,
        explanation: 'La acción de tutela (Art. 86 de la Constitución) es el mecanismo para proteger los derechos fundamentales. Es rápida (10 días) y cualquier persona puede interponerla.'
    },
    {
        area: 'sociales',
        question: '¿Cuáles son las tres ramas del poder público en Colombia?',
        options: [
            'Militar, Religiosa y Civil',
            'Legislativa, Ejecutiva y Judicial',
            'Federal, Estatal y Municipal',
            'Económica, Social y Cultural'
        ],
        correct: 1,
        explanation: 'La Constitución de 1991 establece tres ramas: Legislativa (Congreso, hace las leyes), Ejecutiva (Presidente, ejecuta las leyes) y Judicial (Cortes y jueces, administra justicia).'
    },
    {
        area: 'sociales',
        question: '¿En qué año se proclamó la actual Constitución Política de Colombia?',
        options: ['1886', '1948', '1991', '2000'],
        correct: 2,
        explanation: 'La Constitución vigente se promulgó en 1991, reemplazando la de 1886. Definió a Colombia como un Estado Social de Derecho y amplió los derechos ciudadanos.'
    },
    {
        area: 'sociales',
        question: '¿Qué evento histórico se conoce como "El Bogotazo"?',
        options: [
            'La firma de la Constitución de 1991',
            'El asesinato de Jorge Eliécer Gaitán en 1948 y las revueltas que siguieron',
            'La batalla de Boyacá en 1819',
            'La independencia de Panamá en 1903'
        ],
        correct: 1,
        explanation: 'El Bogotazo fue la serie de disturbios y violencia desencadenada por el asesinato del líder político Jorge Eliécer Gaitán el 9 de abril de 1948. Marcó el inicio del período conocido como "La Violencia".'
    },
    {
        area: 'sociales',
        question: '¿Qué es la inflación?',
        options: [
            'El aumento del empleo en un país',
            'La disminución de los precios de los productos',
            'El aumento generalizado y sostenido de los precios de bienes y servicios',
            'El crecimiento del PIB'
        ],
        correct: 2,
        explanation: 'La inflación es el aumento general y sostenido de los precios. Cuando hay inflación alta, el dinero pierde poder adquisitivo (compra menos).'
    },
    {
        area: 'sociales',
        question: '¿Cuál fue la principal consecuencia social de la Revolución Industrial?',
        options: [
            'La desaparición de las ciudades',
            'La migración del campo a la ciudad y la aparición de la clase obrera',
            'El fin de la monarquía en todos los países',
            'La eliminación de la pobreza'
        ],
        correct: 1,
        explanation: 'La Revolución Industrial provocó una masiva migración del campo a las ciudades (urbanización), creando la clase obrera que trabajaba en fábricas bajo condiciones precarias.'
    },
    {
        area: 'sociales',
        question: 'Si en un mercado aumenta la demanda de un producto pero la oferta se mantiene igual, ¿qué sucede con el precio?',
        options: [
            'El precio baja',
            'El precio se mantiene igual',
            'El precio sube',
            'El producto desaparece del mercado'
        ],
        correct: 2,
        explanation: 'Según la ley de oferta y demanda: si la demanda aumenta y la oferta permanece constante, el precio tiende a subir porque hay más personas queriendo comprar el mismo producto.'
    },
    {
        area: 'sociales',
        question: 'La Guerra Fría fue un enfrentamiento entre:',
        options: [
            'Francia y Alemania',
            'Estados Unidos (capitalismo) y la Unión Soviética (comunismo)',
            'Inglaterra y España',
            'China y Japón'
        ],
        correct: 1,
        explanation: 'La Guerra Fría (1947-1991) fue un enfrentamiento ideológico, político y económico entre EE.UU. (capitalismo) y la URSS (comunismo). No hubo enfrentamiento militar directo entre ambas potencias.'
    },
    {
        area: 'sociales',
        question: '¿Qué mecanismo de participación ciudadana permite a los ciudadanos revocar el mandato de un alcalde o gobernador?',
        options: [
            'El plebiscito',
            'El referendo',
            'La revocatoria del mandato',
            'La iniciativa legislativa popular'
        ],
        correct: 2,
        explanation: 'La revocatoria del mandato permite a los ciudadanos destituir a un alcalde o gobernador elegido popularmente si no cumple con su programa de gobierno.'
    },
    {
        area: 'sociales',
        question: 'El artículo 1 de la Constitución de Colombia define al país como:',
        options: [
            'Una república federal',
            'Un Estado Social de Derecho',
            'Una monarquía constitucional',
            'Un estado socialista'
        ],
        correct: 1,
        explanation: 'Colombia se define como un "Estado Social de Derecho, organizado en forma de República unitaria, descentralizada, con autonomía de sus entidades territoriales, democrática, participativa y pluralista".'
    },

    // ====== INGLÉS ======
    {
        area: 'ingles',
        question: 'Choose the correct option: "She _____ to school every day."',
        options: ['go', 'goes', 'going', 'gone'],
        correct: 1,
        explanation: 'In Simple Present, third person singular (she/he/it) adds -s or -es to the verb. "She goes" is correct.'
    },
    {
        area: 'ingles',
        question: 'What does the word "although" mean?',
        options: ['Because', 'Therefore', 'Although = Aunque (contrast)', 'And'],
        correct: 2,
        explanation: '"Although" means "aunque" in Spanish. It introduces a contrast, similar to "even though" or "despite the fact that".'
    },
    {
        area: 'ingles',
        question: `Read the text:
"Global warming is causing the polar ice caps to melt at an alarming rate. Scientists predict that sea levels could rise significantly by the end of the century."

What is the main topic of this text?`,
        options: [
            'The benefits of cold weather',
            'The effects of global warming on ice and sea levels',
            'How to prevent flooding',
            'The history of the polar regions'
        ],
        correct: 1,
        explanation: 'The text discusses how global warming melts ice caps and causes sea levels to rise. The main topic is the effects of global warming.'
    },
    {
        area: 'ingles',
        question: 'Choose the correct sentence:',
        options: [
            'He don\'t like coffee.',
            'He doesn\'t likes coffee.',
            'He doesn\'t like coffee.',
            'He not like coffee.'
        ],
        correct: 2,
        explanation: 'In negative Simple Present with third person, use "doesn\'t" + base form of the verb (without -s). "He doesn\'t like coffee" is correct.'
    },
    {
        area: 'ingles',
        question: '"The book was more interesting than the movie." This sentence uses:',
        options: [
            'Superlative form',
            'Comparative form',
            'Simple past',
            'Future tense'
        ],
        correct: 1,
        explanation: '"More interesting than" is a comparative form. It compares two things (book vs. movie). For long adjectives, use "more + adjective + than".'
    },
    {
        area: 'ingles',
        question: 'What is the correct past tense of "go"?',
        options: ['goed', 'went', 'gone', 'going'],
        correct: 1,
        explanation: '"Go" is an irregular verb. Its past simple form is "went" (not "goed"). "Gone" is the past participle (used with have/has).'
    },
    {
        area: 'ingles',
        question: `Complete the dialogue:
A: "_____ you like some water?"
B: "Yes, please."`,
        options: ['Do', 'Would', 'Are', 'Is'],
        correct: 1,
        explanation: '"Would you like...?" is a polite way to offer something. "Do you like water?" asks about preference in general, but "Would you like" is an offer.'
    },
    {
        area: 'ingles',
        question: 'The prefix "un-" in "unhappy" means:',
        options: ['Very', 'Not', 'Again', 'Before'],
        correct: 1,
        explanation: 'The prefix "un-" means "not" or "the opposite of". Unhappy = not happy. Other examples: unfair, unknown, unable.'
    },
    {
        area: 'ingles',
        question: `Read: "If it rains tomorrow, we will cancel the trip."
What type of conditional is this?`,
        options: [
            'Zero conditional (general truths)',
            'First conditional (real/possible future)',
            'Second conditional (hypothetical)',
            'Third conditional (past hypothetical)'
        ],
        correct: 1,
        explanation: 'Structure: If + present simple, will + base verb. This is the first conditional, used for real or possible situations in the future.'
    },
    {
        area: 'ingles',
        question: 'Choose the correct option: "This is _____ tallest building in the city."',
        options: ['a', 'more', 'the', 'most'],
        correct: 2,
        explanation: 'Superlatives always use "the" before them. "The tallest" = el más alto. For short adjectives: the + adjective + -est.'
    }
];
