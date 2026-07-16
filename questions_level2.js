// ============================================
// ICFES Prep Pro — Question Bank LEVEL 2
// ============================================

const QUESTIONS_LEVEL2 = [
    // ====== MATEMÁTICAS — NIVEL 2 ======
    {
        area: 'matematicas',
        question: 'Un tanque se llena con una llave en 6 horas y con otra en 4 horas. Si se abren ambas al mismo tiempo, ¿en cuántas horas se llena el tanque?',
        options: ['2 horas', '2.4 horas', '5 horas', '10 horas'],
        correct: 1,
        explanation: 'En 1 hora la primera llave llena 1/6 y la segunda 1/4 del tanque. Juntas: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 por hora. Tiempo = 12/5 = 2.4 horas.'
    },
    {
        area: 'matematicas',
        question: 'Si un artículo sube un 20% y luego baja un 20%, ¿cuál es el cambio neto en el precio?',
        options: ['Queda igual', 'Baja un 4%', 'Sube un 4%', 'Baja un 2%'],
        correct: 1,
        explanation: 'Si el precio es $100, sube 20% → $120. Luego baja 20% de 120 → $120 - $24 = $96. Bajó $4, es decir un 4% respecto al original.'
    },
    {
        area: 'matematicas',
        question: '¿Cuál es el siguiente número en la secuencia: 2, 6, 18, 54, ...?',
        options: ['108', '72', '162', '160'],
        correct: 2,
        explanation: 'Es una secuencia geométrica donde cada término se multiplica por 3. 54 × 3 = 162.'
    },
    {
        area: 'matematicas',
        question: 'Un círculo tiene un radio de 5 cm. ¿Cuál es su área aproximada?',
        options: ['31.4 cm²', '78.5 cm²', '25 cm²', '15.7 cm²'],
        correct: 1,
        explanation: 'Área = π × r² = 3.14 × 5² = 3.14 × 25 = 78.5 cm².'
    },
    {
        area: 'matematicas',
        question: 'En una encuesta, 40 personas prefieren fútbol, 25 prefieren baloncesto y 15 prefieren tenis. ¿Qué porcentaje prefiere baloncesto?',
        options: ['25%', '31.25%', '37.5%', '50%'],
        correct: 1,
        explanation: 'Total = 40 + 25 + 15 = 80 personas. Porcentaje de baloncesto = (25/80) × 100 = 31.25%.'
    },
    {
        area: 'matematicas',
        question: 'Si 2x - 5 = 3x + 1, ¿cuál es el valor de x?',
        options: ['x = -6', 'x = 6', 'x = -4', 'x = 4'],
        correct: 0,
        explanation: '2x - 5 = 3x + 1 → 2x - 3x = 1 + 5 → -x = 6 → x = -6.'
    },
    {
        area: 'matematicas',
        question: 'Un dado justo se lanza dos veces. ¿Cuál es la probabilidad de obtener un 6 en ambos lanzamientos?',
        options: ['1/6', '1/12', '1/36', '2/6'],
        correct: 2,
        explanation: 'La probabilidad de 6 en un lanzamiento es 1/6. Como son eventos independientes: P = 1/6 × 1/6 = 1/36.'
    },
    {
        area: 'matematicas',
        question: 'Los datos son: 3, 5, 5, 7, 8, 8, 8, 10. ¿Cuál es la moda?',
        options: ['5', '7', '8', '6.75'],
        correct: 2,
        explanation: 'La moda es el dato que más se repite. El 8 aparece 3 veces, más que cualquier otro valor.'
    },
    {
        area: 'matematicas',
        question: 'Un rectángulo tiene un área de 48 cm² y un ancho de 6 cm. ¿Cuál es su largo?',
        options: ['6 cm', '8 cm', '42 cm', '12 cm'],
        correct: 1,
        explanation: 'Área = largo × ancho → 48 = largo × 6 → largo = 48/6 = 8 cm.'
    },
    {
        area: 'matematicas',
        question: 'Si un tren viaja a 90 km/h, ¿cuántos kilómetros recorre en 40 minutos?',
        options: ['60 km', '45 km', '3600 km', '36 km'],
        correct: 0,
        explanation: '40 minutos = 40/60 = 2/3 de hora. Distancia = 90 × 2/3 = 60 km.'
    },

    // ====== LECTURA CRÍTICA — NIVEL 2 ======
    {
        area: 'lectura',
        question: `Lee el siguiente texto:

"El cambio climático no es un problema del futuro: es una realidad del presente. Los glaciares se derriten, los océanos se calientan y las especies desaparecen a un ritmo sin precedentes. Es imperativo que los gobiernos actúen ahora."

¿Cuál es el tono del texto?`,
        options: [
            'Neutral e informativo',
            'Humorístico y despreocupado',
            'Urgente y exhortativo',
            'Nostálgico y melancólico'
        ],
        correct: 2,
        explanation: 'El autor usa palabras como "imperativo" y "ahora", y presenta la situación como grave y actual. Esto genera un tono de urgencia y exhortación (invitar a actuar).'
    },
    {
        area: 'lectura',
        question: `"Todo lo sólido se desvanece en el aire." — Karl Marx

Esta frase es un ejemplo de:`,
        options: [
            'Símil (comparación con "como")',
            'Metáfora (significado figurado)',
            'Hipérbole (exageración)',
            'Onomatopeya (imitación de sonidos)'
        ],
        correct: 1,
        explanation: 'Es una metáfora porque no se refiere literalmente a que los sólidos se evaporan, sino a que las tradiciones, valores y estructuras sociales se transforman y desaparecen con el tiempo.'
    },
    {
        area: 'lectura',
        question: `Lee el texto:

"Los videojuegos han sido señalados como causa de violencia juvenil. No obstante, múltiples estudios científicos no han logrado establecer una relación causal directa. De hecho, algunos investigadores sugieren que pueden mejorar habilidades cognitivas como la coordinación y la resolución de problemas."

¿Qué se puede inferir del texto?`,
        options: [
            'Los videojuegos son la principal causa de violencia',
            'La evidencia científica no respalda que los videojuegos causen violencia directamente',
            'Todos los científicos están de acuerdo en que los videojuegos son beneficiosos',
            'Los videojuegos deben prohibirse'
        ],
        correct: 1,
        explanation: 'El texto presenta la acusación ("han sido señalados") pero la contrasta con evidencia ("no han logrado establecer una relación causal directa"). La inferencia correcta es que la ciencia no respalda esa relación causal.'
    },
    {
        area: 'lectura',
        question: `"Primero, se seleccionan los ingredientes frescos. Luego, se lavan y se cortan en trozos pequeños. A continuación, se cocinan a fuego medio durante 20 minutos. Finalmente, se sirve caliente."

¿Qué tipo de texto es este?`,
        options: [
            'Argumentativo',
            'Narrativo',
            'Instructivo',
            'Expositivo'
        ],
        correct: 2,
        explanation: 'Es un texto instructivo porque da pasos ordenados para realizar una tarea (receta). Usa conectores de secuencia: "primero", "luego", "a continuación", "finalmente".'
    },
    {
        area: 'lectura',
        question: `"La libertad no consiste en hacer lo que se quiere, sino en querer lo que se debe." — Ramón de Campoamor

¿Cuál es la idea principal de esta cita?`,
        options: [
            'La libertad es poder hacer cualquier cosa',
            'La verdadera libertad implica responsabilidad y consciencia del deber',
            'Las personas no deben tener libertad',
            'La libertad y el deber son conceptos opuestos'
        ],
        correct: 1,
        explanation: 'La cita contrasta la libertad como capricho ("hacer lo que se quiere") con la libertad como responsabilidad consciente ("querer lo que se debe"). La verdadera libertad implica compromiso ético.'
    },
    {
        area: 'lectura',
        question: `En el enunciado "Los resultados, por consiguiente, demuestran la efectividad del tratamiento", el conector "por consiguiente" indica:`,
        options: [
            'Contraste',
            'Adición',
            'Consecuencia',
            'Causa'
        ],
        correct: 2,
        explanation: '"Por consiguiente" es un conector de consecuencia, similar a "por lo tanto" o "en consecuencia". Introduce un resultado o conclusión derivada de lo anterior.'
    },
    {
        area: 'lectura',
        question: `Lee el texto:

"Cien años de soledad, de Gabriel García Márquez, no es simplemente una novela sobre la familia Buendía. Es un espejo de toda Latinoamérica: sus ciclos de violencia, su soledad histórica y su eterna búsqueda de identidad."

¿Cuál es el propósito del autor del texto?`,
        options: [
            'Resumir la trama de la novela',
            'Criticar negativamente la obra de García Márquez',
            'Interpretar el significado profundo de la novela más allá de su argumento',
            'Contar la biografía de García Márquez'
        ],
        correct: 2,
        explanation: 'El autor va más allá de la trama ("no es simplemente...") para ofrecer una interpretación simbólica: la novela como reflejo de Latinoamérica. Es un análisis interpretativo.'
    },
    {
        area: 'lectura',
        question: `"Mil veces te lo he dicho: no dejes la puerta abierta."

La expresión "mil veces" es un ejemplo de:`,
        options: [
            'Metáfora',
            'Personificación',
            'Hipérbole',
            'Símil'
        ],
        correct: 2,
        explanation: 'La hipérbole es una exageración intencional para enfatizar algo. Obviamente no se lo ha dicho literalmente mil veces, sino que exagera para expresar su frustración.'
    },

    // ====== CIENCIAS NATURALES — NIVEL 2 ======
    {
        area: 'ciencias',
        question: '¿Cuál es la diferencia principal entre mitosis y meiosis?',
        options: [
            'La mitosis produce 4 células y la meiosis produce 2',
            'La mitosis produce 2 células idénticas (diploides) y la meiosis produce 4 células con la mitad de cromosomas (haploides)',
            'La meiosis ocurre solo en plantas',
            'No hay diferencia, son el mismo proceso'
        ],
        correct: 1,
        explanation: 'La mitosis produce 2 células diploides (2n) idénticas a la madre (crecimiento/reparación). La meiosis produce 4 células haploides (n) diferentes (gametos/reproducción sexual).'
    },
    {
        area: 'ciencias',
        question: '¿Cuál es la función principal del ADN?',
        options: [
            'Producir energía para la célula',
            'Almacenar y transmitir la información genética',
            'Proteger a la célula de virus',
            'Transportar oxígeno en la sangre'
        ],
        correct: 1,
        explanation: 'El ADN (ácido desoxirribonucleico) es la molécula que almacena toda la información genética necesaria para el desarrollo y funcionamiento del organismo, y se transmite de padres a hijos.'
    },
    {
        area: 'ciencias',
        question: 'Una solución con pH = 3 es:',
        options: [
            'Neutra',
            'Básica (alcalina)',
            'Ácida',
            'Imposible de determinar'
        ],
        correct: 2,
        explanation: 'La escala de pH va de 0 a 14. pH < 7 = ácido, pH = 7 = neutro, pH > 7 = básico. Un pH de 3 es ácido (ej. vinagre, jugo de limón).'
    },
    {
        area: 'ciencias',
        question: 'Si la velocidad de un objeto aumenta de 0 a 20 m/s en 5 segundos, ¿cuál es su aceleración?',
        options: ['100 m/s²', '4 m/s²', '25 m/s²', '15 m/s²'],
        correct: 1,
        explanation: 'Aceleración = (Velocidad final - Velocidad inicial) / Tiempo = (20 - 0) / 5 = 4 m/s².'
    },
    {
        area: 'ciencias',
        question: '¿Qué sucede con la energía total en un sistema cerrado según la ley de conservación de la energía?',
        options: [
            'Siempre aumenta',
            'Siempre disminuye',
            'Se mantiene constante (no se crea ni se destruye, solo se transforma)',
            'Depende de la temperatura'
        ],
        correct: 2,
        explanation: 'La ley de conservación de la energía establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra. La energía total permanece constante.'
    },
    {
        area: 'ciencias',
        question: '¿Cuál es la diferencia entre un elemento y un compuesto?',
        options: [
            'No hay diferencia',
            'Un elemento está formado por un solo tipo de átomo; un compuesto por dos o más tipos de átomos unidos químicamente',
            'Un compuesto es más pequeño que un elemento',
            'Un elemento siempre es un gas'
        ],
        correct: 1,
        explanation: 'Un elemento es una sustancia pura de un solo tipo de átomo (ej. O₂, Fe). Un compuesto está formado por dos o más elementos unidos químicamente (ej. H₂O, NaCl).'
    },
    {
        area: 'ciencias',
        question: 'En el ciclo del agua, ¿cómo se llama el proceso en el que el agua líquida se convierte en vapor?',
        options: [
            'Condensación',
            'Precipitación',
            'Evaporación',
            'Filtración'
        ],
        correct: 2,
        explanation: 'La evaporación es el paso de líquido a gas (vapor de agua). La condensación es el proceso inverso: gas a líquido (formación de nubes).'
    },
    {
        area: 'ciencias',
        question: 'Un bloque de 5 kg está en reposo sobre una mesa. ¿Cuál es la fuerza de gravedad que actúa sobre él? (g = 10 m/s²)',
        options: ['5 N', '50 N', '15 N', '0.5 N'],
        correct: 1,
        explanation: 'Peso (fuerza de gravedad) = masa × gravedad = 5 kg × 10 m/s² = 50 N (Newtons).'
    },
    {
        area: 'ciencias',
        question: '¿Cuál de los siguientes es un ejemplo de adaptación evolutiva?',
        options: [
            'Un perro que aprende a sentarse cuando se le ordena',
            'El color blanco de los osos polares que los camufla en la nieve',
            'Una planta que crece hacia la ventana porque hay luz',
            'Un estudiante que mejora sus notas estudiando más'
        ],
        correct: 1,
        explanation: 'La adaptación evolutiva es un rasgo heredado que mejora la supervivencia. El pelaje blanco del oso polar es resultado de selección natural a lo largo de generaciones, no de un aprendizaje individual.'
    },
    {
        area: 'ciencias',
        question: '¿Cuál de las siguientes sustancias es un ácido común?',
        options: [
            'Bicarbonato de sodio (NaHCO₃)',
            'Ácido clorhídrico (HCl)',
            'Hidróxido de sodio (NaOH)',
            'Agua pura (H₂O)'
        ],
        correct: 1,
        explanation: 'El HCl (ácido clorhídrico) es un ácido fuerte. El NaOH es una base fuerte. El NaHCO₃ es una sal básica. El agua pura es neutra (pH 7). Los ácidos liberan iones H⁺ en solución.'
    },

    // ====== SOCIALES Y CIUDADANAS — NIVEL 2 ======
    {
        area: 'sociales',
        question: '¿Cuál es la diferencia entre un referendo y un plebiscito en Colombia?',
        options: [
            'Son exactamente lo mismo',
            'En el referendo el pueblo vota sobre una norma jurídica; en el plebiscito el presidente consulta al pueblo sobre una decisión política',
            'El plebiscito lo convoca el Congreso y el referendo el presidente',
            'El referendo solo se usa en elecciones presidenciales'
        ],
        correct: 1,
        explanation: 'El referendo somete a votación popular un proyecto de norma jurídica (ley, reforma constitucional). El plebiscito es una consulta del presidente al pueblo sobre una decisión de su competencia.'
    },
    {
        area: 'sociales',
        question: '¿Qué es el PIB (Producto Interno Bruto)?',
        options: [
            'La cantidad de dinero que tiene un gobierno en sus reservas',
            'El valor total de todos los bienes y servicios producidos en un país durante un período determinado',
            'El total de impuestos recaudados por el Estado',
            'La deuda externa de un país'
        ],
        correct: 1,
        explanation: 'El PIB mide el valor monetario total de todos los bienes y servicios finales producidos dentro de las fronteras de un país durante un período (generalmente un año). Es el principal indicador del tamaño de una economía.'
    },
    {
        area: 'sociales',
        question: '¿Qué organismo internacional fue creado después de la Segunda Guerra Mundial para mantener la paz y seguridad internacional?',
        options: [
            'La Unión Europea',
            'La Organización de las Naciones Unidas (ONU)',
            'La OTAN',
            'El Fondo Monetario Internacional'
        ],
        correct: 1,
        explanation: 'La ONU fue fundada en 1945 tras la Segunda Guerra Mundial con el propósito principal de mantener la paz y seguridad internacionales, promover los derechos humanos y fomentar la cooperación.'
    },
    {
        area: 'sociales',
        question: '¿Cuál es la función principal de la Corte Constitucional en Colombia?',
        options: [
            'Elegir al presidente de la república',
            'Guardar la integridad y supremacía de la Constitución',
            'Administrar los impuestos del país',
            'Dirigir las Fuerzas Armadas'
        ],
        correct: 1,
        explanation: 'La Corte Constitucional es el máximo tribunal de la jurisdicción constitucional. Su función es velar por que las leyes y actos del Estado sean conformes a la Constitución (control de constitucionalidad).'
    },
    {
        area: 'sociales',
        question: '¿Qué sistema económico se caracteriza por la propiedad privada de los medios de producción, la libre competencia y la mínima intervención del Estado?',
        options: [
            'Socialismo',
            'Capitalismo',
            'Comunismo',
            'Feudalismo'
        ],
        correct: 1,
        explanation: 'El capitalismo se basa en la propiedad privada, el libre mercado y la búsqueda de ganancias. El socialismo plantea propiedad colectiva. El comunismo busca eliminar la propiedad privada. El feudalismo era un sistema medieval basado en la tierra.'
    },
    {
        area: 'sociales',
        question: 'La Declaración Universal de los Derechos Humanos fue proclamada en:',
        options: [
            '1776 por Estados Unidos',
            '1789 por Francia',
            '1948 por la ONU',
            '1991 por Colombia'
        ],
        correct: 2,
        explanation: 'La Declaración Universal de los Derechos Humanos fue adoptada por la Asamblea General de la ONU el 10 de diciembre de 1948. Establece los derechos fundamentales que deben protegerse universalmente.'
    },
    {
        area: 'sociales',
        question: '¿Qué es la globalización?',
        options: [
            'Un sistema político de un solo gobierno mundial',
            'El proceso de creciente interconexión económica, cultural, política y tecnológica entre países del mundo',
            'La colonización de nuevos territorios',
            'Un tipo de gobierno dictatorial'
        ],
        correct: 1,
        explanation: 'La globalización es el proceso por el cual los países se interconectan cada vez más en lo económico (comercio), cultural (intercambio de ideas), político y tecnológico (internet, comunicaciones).'
    },
    {
        area: 'sociales',
        question: 'En Colombia, ¿quién elige al Presidente de la República?',
        options: [
            'El Congreso de la República',
            'Los ciudadanos mediante voto popular directo',
            'La Corte Suprema de Justicia',
            'Los gobernadores de los departamentos'
        ],
        correct: 1,
        explanation: 'El Presidente de Colombia es elegido por los ciudadanos mediante voto popular directo para un período de 4 años. Si ningún candidato obtiene más del 50%, se realiza una segunda vuelta.'
    },
    {
        area: 'sociales',
        question: '¿Cuál fue una causa principal de la Revolución Francesa de 1789?',
        options: [
            'La invasión de Francia por Alemania',
            'La desigualdad social entre la nobleza/clero privilegiados y el pueblo (Tercer Estado) empobrecido',
            'La caída del muro de Berlín',
            'El descubrimiento de América'
        ],
        correct: 1,
        explanation: 'La Revolución Francesa surgió por la profunda desigualdad: la nobleza y el clero tenían privilegios y no pagaban impuestos, mientras el Tercer Estado (pueblo, burguesía) sostenía la carga fiscal y no tenía derechos políticos.'
    },
    {
        area: 'sociales',
        question: '¿Qué es un Estado laico?',
        options: [
            'Un Estado que prohíbe todas las religiones',
            'Un Estado que tiene una religión oficial obligatoria',
            'Un Estado que separa sus instituciones políticas de las instituciones religiosas y garantiza la libertad de culto',
            'Un Estado gobernado por líderes religiosos'
        ],
        correct: 2,
        explanation: 'Un Estado laico no adopta ninguna religión como oficial, separa las instituciones del Estado de las religiosas, y garantiza la libertad de culto para todos. No prohíbe las religiones, sino que no favorece ninguna.'
    },

    // ====== INGLÉS — NIVEL 2 ======
    {
        area: 'ingles',
        question: 'Choose the correct form: "The letter _____ yesterday."',
        options: ['was sent', 'is sent', 'sent', 'sending'],
        correct: 0,
        explanation: 'This is a passive voice sentence in the past. Structure: was/were + past participle. "The letter was sent" (La carta fue enviada).'
    },
    {
        area: 'ingles',
        question: 'What does "She has been studying for three hours" indicate?',
        options: [
            'She finished studying three hours ago',
            'She started studying three hours ago and is still studying now',
            'She will study for three hours',
            'She studies every three hours'
        ],
        correct: 1,
        explanation: 'This is the Present Perfect Continuous tense. It indicates an action that started in the past and continues to the present. "Has been studying" = has been doing it and is still doing it.'
    },
    {
        area: 'ingles',
        question: `Read the text:
"Despite receiving many job offers, Maria decided to continue her studies at the university. She believed that a higher education would open more doors in the long run."

Why did Maria reject the job offers?`,
        options: [
            'She didn\'t like working',
            'She thought education would give her better opportunities in the future',
            'She already had a very good job',
            'The jobs were too far from her home'
        ],
        correct: 1,
        explanation: 'The text says she "believed that a higher education would open more doors in the long run" — she thought studying more would create better opportunities in the future.'
    },
    {
        area: 'ingles',
        question: 'Choose the correct sentence:',
        options: [
            'If I would have money, I will travel.',
            'If I had money, I would travel.',
            'If I has money, I would travel.',
            'If I have money, I would travel.'
        ],
        correct: 1,
        explanation: 'This is the Second Conditional (hypothetical/unreal present). Structure: If + past simple, would + base verb. "If I had money, I would travel" (Si tuviera dinero, viajaría).'
    },
    {
        area: 'ingles',
        question: '"He told me that he _____ the movie the night before."',
        options: ['watches', 'had watched', 'is watching', 'will watch'],
        correct: 1,
        explanation: 'This is reported speech. The original: "I watched the movie last night." In reported speech, past simple becomes past perfect: "had watched". "Last night" becomes "the night before".'
    },
    {
        area: 'ingles',
        question: 'What is the meaning of the phrasal verb "give up"?',
        options: [
            'To give something to someone above you',
            'To stop trying; to quit',
            'To return something',
            'To increase the volume'
        ],
        correct: 1,
        explanation: '"Give up" means to stop trying or to quit something. Example: "Don\'t give up on your dreams" (No renuncies a tus sueños).'
    },
    {
        area: 'ingles',
        question: `Complete: "You _____ wear a seatbelt. It's the law."`,
        options: ['should', 'might', 'must', 'could'],
        correct: 2,
        explanation: '"Must" expresses obligation or necessity. Since wearing a seatbelt is the law, it\'s mandatory. "Should" is a recommendation, "might" and "could" express possibility.'
    },
    {
        area: 'ingles',
        question: `Read: "The Amazon rainforest produces approximately 20% of the world's oxygen. However, deforestation threatens this vital ecosystem."

What does "vital" mean in this context?`,
        options: [
            'Dangerous',
            'Essential; extremely important',
            'Small and insignificant',
            'Related to vitamins'
        ],
        correct: 1,
        explanation: '"Vital" means essential or extremely important. The Amazon is described as vital because it produces a significant amount of oxygen. It\'s a cognate (similar to "vital" in Spanish).'
    },
    {
        area: 'ingles',
        question: 'Choose the correct relative pronoun: "The woman _____ lives next door is a doctor."',
        options: ['which', 'who', 'where', 'what'],
        correct: 1,
        explanation: '"Who" is used for people. "Which" is for things/animals. "Where" is for places. "The woman who lives next door" (La mujer que vive al lado).'
    },
    {
        area: 'ingles',
        question: '"My sister is _____ person I know."',
        options: [
            'the most kind',
            'the kindest',
            'more kind',
            'kinder'
        ],
        correct: 1,
        explanation: '"Kind" is a short adjective (one syllable). Superlative form: the + adjective + -est = "the kindest". For longer adjectives you would use "the most + adjective".'
    }
];
