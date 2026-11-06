/* Frases comunes, expresiones coloquiales y dichos populares (contenido original).
   Mismo formato que data/daily.js: [inglés, español, ejemplo, nota, registro, hueco]. */
window.DATA = window.DATA || {};
(() => {
  const T = (id, ico, name, desc, rows) => ({
    id, ico, name, desc,
    items: rows.map(([en, es, ex, note, tag, gap]) => ({ en, es, ex, note: note || '', tag: tag || '', gap: gap || '' }))
  });

  DATA.sayings = {
    topics: [
      T('everyday', '🗣️', 'Frases comunes del día a día', 'Frases cortas que los nativos usan constantemente.', [
        ["I'm on my way", 'Voy de camino / Ya voy', "I'm on my way, I'll be there in ten minutes.", ''],
        ["It's not a big deal", 'No es para tanto / No pasa nada', "You forgot the milk? It's not a big deal.", ''],
        ['Make yourself at home', 'Estás en tu casa / Ponte cómodo', 'Come in, make yourself at home.', ''],
        ['Take your time', 'Tómate tu tiempo / Sin prisa', "There's no rush, take your time.", ''],
        ["I'll be right back", 'Vuelvo enseguida', "Wait here, I'll be right back.", ''],
        ['It depends', 'Depende', 'Are you coming tonight? — It depends on how I feel.', ''],
        ["That's it", 'Eso es todo / Ya está / ¡Eso es!', "Two coffees and that's it, thanks.", ''],
        ['Here you are', 'Aquí tienes', 'Here you are, your change.', 'También: "Here you go".'],
        ["I'm not sure", 'No estoy seguro/a', "I'm not sure what time it starts.", ''],
        ['What do you mean?', '¿Qué quieres decir?', 'What do you mean, it\'s cancelled?', ''],
        ['Go ahead', 'Adelante / Hazlo', 'Can I use your phone? — Sure, go ahead.', ''],
        ['It was worth it', 'Valió la pena', 'The hike was hard, but it was worth it.', ''],
        ['Sounds good', 'Me parece bien / Perfecto', "Let's meet at six. — Sounds good.", '', 'informal'],
        ["I'm getting used to it", 'Me estoy acostumbrando', "The weather here is cold, but I'm getting used to it.", '"Get used to" + sustantivo o -ing.', '', 'getting used to it'],
        ['What a coincidence!', '¡Qué casualidad!', 'You were at the same concert? What a coincidence!', ''],
        ["Don't worry about it", 'No te preocupes por eso', "I'm sorry I broke it. — Don't worry about it.", '']
      ]),

      T('colloquial', '😎', 'Expresiones coloquiales', 'Respuestas rápidas y muletillas de la conversación informal.', [
        ['Tell me about it!', '¡Dímelo a mí! / ¡A quién se lo dices!', "This job is so stressful. — Tell me about it!", 'No pide más información: muestra que te pasa lo mismo.', 'informal'],
        ['You can say that again!', '¡Y que lo digas!', "It's freezing today. — You can say that again!", '', 'informal'],
        ["I'm all ears", 'Soy todo oídos', "Go on, tell me what happened. I'm all ears.", ''],
        ['My bad', 'Culpa mía / Error mío', "Oops, I took your seat. My bad!", '', 'informal'],
        ['Same here', 'Yo también / Igualmente', "I'm so tired. — Same here.", '', 'informal'],
        ["It's a deal", 'Trato hecho', "I'll cook and you wash up. — It's a deal!", 'También: "Deal!"'],
        ['Go for it!', '¡Adelante! / ¡A por ello!', "You want to apply for the job? Go for it!", '', 'informal'],
        ['Suit yourself', 'Como quieras / Tú sabrás', "You don't want dessert? Suit yourself.", 'Puede sonar algo seco.', 'informal'],
        ['No big deal', 'No es nada / No pasa nada', 'Thanks for helping! — No big deal.', '', 'informal'],
        ['Whatever', 'Lo que sea / Me da igual', 'Whatever, I don\'t care where we eat.', 'Puede sonar maleducado según el tono.', 'informal'],
        ['I bet', 'Seguro / Me imagino', 'I was so nervous before the exam. — I bet you were!', '', 'informal', 'I bet'],
        ['Hang in there', 'Aguanta / Ánimo, no te rindas', "Exams are almost over. Hang in there!", '', 'informal'],
        ['Got it', 'Entendido / Vale', 'Turn left at the bank. — Got it.', '', 'informal'],
        ['Cool', 'Genial / Vale', 'See you at eight? — Cool.', 'Muy informal: "guay", "vale".', 'informal'],
        ['Beats me', 'Ni idea', "Where's the remote? — Beats me.", '', 'informal'],
        ['Just kidding', 'Es broma / Solo bromeaba', "I'm leaving the country. Just kidding!", '', 'informal']
      ]),

      T('proverbs', '📜', 'Dichos y refranes populares', 'Refranes ingleses con su equivalente en español.', [
        ['Actions speak louder than words', 'Obras son amores, que no buenas razones', "He keeps promising to help, but actions speak louder than words.", 'Literal: las acciones hablan más alto que las palabras.', '', 'louder than words'],
        ['Better safe than sorry', 'Más vale prevenir que curar', "Take an umbrella. Better safe than sorry.", 'Literal: mejor seguro que arrepentido.', '', 'than sorry'],
        ['Every cloud has a silver lining', 'No hay mal que por bien no venga', "I lost my job, but every cloud has a silver lining: now I can study.", '', '', 'a silver lining'],
        ["Don't count your chickens before they hatch", 'No vendas la piel del oso antes de cazarlo', "You haven't got the job yet. Don't count your chickens before they hatch.", '', '', 'before they hatch'],
        ['The early bird catches the worm', 'A quien madruga, Dios le ayuda', "Let's get to the sale early. The early bird catches the worm.", '', '', 'catches the worm'],
        ['When in Rome, do as the Romans do', 'Allá donde fueres, haz lo que vieres', "Everyone eats late here. When in Rome, do as the Romans do.", '', '', 'do as the Romans do'],
        ["Don't judge a book by its cover", 'Las apariencias engañan', "The restaurant looks old, but don't judge a book by its cover.", '', '', 'by its cover'],
        ['Birds of a feather flock together', 'Dios los cría y ellos se juntan', "They're both obsessed with football. Birds of a feather flock together.", '', '', 'flock together'],
        ['Practice makes perfect', 'La práctica hace al maestro', "Keep doing mock tests. Practice makes perfect.", '', '', 'makes perfect'],
        ['No pain, no gain', 'El que algo quiere, algo le cuesta', "The training is tough, but no pain, no gain.", '', '', 'no gain'],
        ['Out of sight, out of mind', 'Ojos que no ven, corazón que no siente', "Hide the chocolate. Out of sight, out of mind.", '', '', 'out of mind'],
        ['Where there\'s a will, there\'s a way', 'Querer es poder', "It looks impossible, but where there's a will, there's a way.", '', '', "there's a way"],
        ["It's no use crying over spilt milk", 'A lo hecho, pecho', "The exam is over. It's no use crying over spilt milk.", 'EE. UU.: "spilled milk".', '', 'crying over spilt milk'],
        ['Two heads are better than one', 'Cuatro ojos ven más que dos', "Let's solve it together. Two heads are better than one.", '', '', 'better than one'],
        ['Time flies', 'El tiempo vuela', "It's already December? Time flies!", 'Completo: "Time flies when you\'re having fun".'],
        ['The grass is always greener on the other side', 'Nadie está contento con lo que tiene', "He wants my job and I want his. The grass is always greener on the other side.", '', '', 'greener on the other side'],
        ['Easier said than done', 'Del dicho al hecho hay mucho trecho', "Just stop worrying? That's easier said than done.", '', '', 'said than done'],
        ['A bird in the hand is worth two in the bush', 'Más vale pájaro en mano que ciento volando', "Accept the offer. A bird in the hand is worth two in the bush.", '', '', 'worth two in the bush'],
        ["Don't put all your eggs in one basket", 'No te lo juegues todo a una carta', "Apply to several universities. Don't put all your eggs in one basket.", '', '', 'in one basket'],
        ['Rome wasn\'t built in a day', 'No se ganó Zamora en una hora', "Your English will improve. Rome wasn't built in a day.", '', '', 'built in a day'],
        ['Kill two birds with one stone', 'Matar dos pájaros de un tiro', "I'll visit my aunt and see the dentist on the same trip — kill two birds with one stone.", '', '', 'with one stone'],
        ['Look before you leap', 'Piensa antes de actuar', "Read the contract first. Look before you leap.", '', '', 'before you leap']
      ]),

      T('animals', '🐾', 'Modismos con animales', 'Expresiones con animales que no se traducen literalmente.', [
        ["Let the cat out of the bag", 'Irse de la lengua / Revelar un secreto', "It was a surprise party, but Tom let the cat out of the bag.", '', '', 'let the cat out of the bag'],
        ["It's raining cats and dogs", 'Llueve a cántaros', "Take a taxi, it's raining cats and dogs.", '', '', 'cats and dogs'],
        ['The elephant in the room', 'El tema que nadie se atreve a mencionar', "Nobody talked about the budget cuts, the elephant in the room.", ''],
        ['Hold your horses', 'Para el carro / Espera un momento', "Hold your horses! We haven't decided yet.", '', 'informal'],
        ['A little bird told me', 'Me lo ha contado un pajarito', "A little bird told me it's your birthday.", ''],
        ['Like a fish out of water', 'Como pez fuera del agua', "At the party I felt like a fish out of water.", ''],
        ['When pigs fly', 'Cuando las ranas críen pelo', "He'll clean his room when pigs fly.", ''],
        ['Smell a rat', 'Olerse algo raro / Oler a chamusquina', "The price was too low. I smelled a rat.", '', '', 'smelled a rat'],
        ['The black sheep', 'La oveja negra', "I'm the black sheep of the family.", ''],
        ['Butterflies in my stomach', 'Mariposas / nervios en el estómago', "I always get butterflies in my stomach before an exam.", ''],
        ['Straight from the horse\'s mouth', 'De fuente fiable / De boca del interesado', "It's true, I heard it straight from the horse's mouth.", '', '', "from the horse's mouth"],
        ['Cry wolf', 'Dar falsas alarmas', "Don't cry wolf or nobody will believe you.", '']
      ]),

      T('food-idioms', '🍰', 'Modismos con comida', 'Comida en sentido figurado.', [
        ['Spill the beans', 'Desembuchar / Contar un secreto', "Come on, spill the beans! What did he say?", '', 'informal'],
        ['The icing on the cake', 'La guinda del pastel', "The trip was great, and the sunny weather was the icing on the cake.", ''],
        ['You can\'t have your cake and eat it', 'No se puede tener todo / No se puede estar en misa y repicando', "You want a big salary and no responsibility? You can't have your cake and eat it.", '', '', 'have your cake and eat it'],
        ['In a nutshell', 'En pocas palabras / En resumen', "In a nutshell, the project was a success.", ''],
        ['Bring home the bacon', 'Ganar el pan / Mantener a la familia', "She works two jobs to bring home the bacon.", '', 'informal'],
        ['Take it with a pinch of salt', 'Tomarlo con pinzas / No creérselo del todo', "He exaggerates, so take it with a pinch of salt.", 'EE. UU.: "a grain of salt".', '', 'with a pinch of salt'],
        ['Have a lot on my plate', 'Tener mucho entre manos', "I can't help this week, I have a lot on my plate.", '', '', 'a lot on my plate'],
        ['Bread and butter', 'El sustento / Lo básico, el pan de cada día', "Small repairs are the bread and butter of our business.", ''],
        ['Go bananas', 'Volverse loco / Ponerse como loco', "The fans went bananas when they scored.", '', 'informal', 'went bananas'],
        ['A couch potato', 'Un sedentario / Que no se levanta del sofá', "Stop being a couch potato and come for a walk.", '', 'informal'],
        ['Sell like hot cakes', 'Venderse como churros', "The new phones are selling like hot cakes.", '', '', 'selling like hot cakes'],
        ['Butter someone up', 'Hacerle la pelota a alguien', "He's buttering up the boss because he wants a raise.", '', 'informal', 'buttering up']
      ]),

      T('body', '🫀', 'Modismos con el cuerpo', 'Expresiones con partes del cuerpo.', [
        ['Break a leg!', '¡Mucha suerte! (antes de actuar)', "It's your first concert tonight? Break a leg!", 'Se dice a actores y músicos.'],
        ['Cost an arm and a leg', 'Costar un ojo de la cara', "That car cost an arm and a leg.", '', '', 'an arm and a leg'],
        ['Pull someone\'s leg', 'Tomarle el pelo a alguien', "Relax, I'm just pulling your leg.", '', 'informal', 'pulling your leg'],
        ['Keep your chin up', 'Ánimo / No te desanimes', "Keep your chin up — you'll pass next time.", ''],
        ['Get something off your chest', 'Desahogarse', "I need to get this off my chest: I'm unhappy at work.", '', '', 'off my chest'],
        ['By heart', 'De memoria', "I know the whole song by heart.", ''],
        ['On the tip of my tongue', 'En la punta de la lengua', "What's his name? It's on the tip of my tongue.", ''],
        ['Give someone a hand', 'Echarle una mano a alguien', "Can you give me a hand with these boxes?", '', '', 'give me a hand'],
        ['See eye to eye', 'Estar de acuerdo', "We don't always see eye to eye on politics.", ''],
        ['Cold feet', 'Echarse para atrás (por nervios)', "She got cold feet and cancelled the trip.", '', '', 'cold feet'],
        ['My hands are tied', 'Tengo las manos atadas', "I'd like to help, but my hands are tied.", ''],
        ['Face the music', 'Afrontar las consecuencias', "He broke the window, now he has to face the music.", '']
      ]),

      T('situations', '🎭', 'Frases para situaciones', 'Qué decir en momentos concretos: felicitar, consolar, animar…', [
        ['Congratulations!', '¡Felicidades! / ¡Enhorabuena!', "You passed? Congratulations!", 'Para logros. Para cumpleaños: "Happy birthday!"'],
        ['Good luck!', '¡Buena suerte!', "Good luck with your exam tomorrow!", ''],
        ["I'm sorry for your loss", 'Te acompaño en el sentimiento / Mi más sentido pésame', "I heard about your grandmother. I'm so sorry for your loss.", '', 'formal', 'sorry for your loss'],
        ['Get well soon', 'Que te mejores', "Get well soon! We miss you at work.", ''],
        ['Cheers!', '¡Salud! / ¡Gracias! (Reino Unido)', "Cheers! To our new home.", 'En Reino Unido también significa "gracias" o "adiós".', 'informal'],
        ['Bless you', '¡Salud! / ¡Jesús! (al estornudar)', "Achoo! — Bless you!", ''],
        ['Enjoy your meal', 'Que aproveche / Buen provecho', "Here are your pizzas. Enjoy your meal!", ''],
        ['Have a safe trip', 'Buen viaje', "Have a safe trip and text me when you land.", ''],
        ['Well done!', '¡Bien hecho!', "You finished the marathon? Well done!", ''],
        ["Don't give up", 'No te rindas', "Don't give up, you're almost there.", ''],
        ['Happy holidays', 'Felices fiestas', "Happy holidays! See you in January.", ''],
        ['I hope it goes well', 'Espero que te vaya bien', "Good luck with the interview. I hope it goes well.", '']
      ]),

      T('fillers', '🤔', 'Muletillas y conectores hablados', 'Para ganar tiempo y sonar natural al hablar (útil en Speaking).', [
        ['Well, ...', 'Bueno, ... / Pues, ...', "Well, I've never really thought about it.", 'Para empezar una respuesta con naturalidad.', '', 'Well'],
        ['Let me think', 'Déjame pensar', "My favourite book? Let me think...", ''],
        ['To be honest', 'Para ser sincero/a', "To be honest, I didn't like the film.", ''],
        ['I mean', 'O sea / Quiero decir', "It was good. I mean, not amazing, but good.", '', 'informal'],
        ['You know', '¿Sabes? / Ya sabes', "It's that place near the station, you know?", '', 'informal'],
        ['Kind of / sort of', 'Más o menos / Un poco', "I'm kind of tired today.", '', 'informal', 'kind of'],
        ["That's a good question", 'Buena pregunta', "That's a good question. I'd say it depends on the person.", 'Muy útil en IELTS Speaking Part 3.'],
        ['As I was saying', 'Como iba diciendo', "Anyway, as I was saying, the trip was amazing.", ''],
        ['Basically', 'Básicamente / En resumen', "Basically, we need more time.", ''],
        ['On the other hand', 'Por otro lado', "It's cheap. On the other hand, it's far from the centre.", ''],
        ["What I'm trying to say is", 'Lo que intento decir es', "What I'm trying to say is that we need a plan.", ''],
        ['Having said that', 'Dicho esto / Aun así', "It's expensive. Having said that, it's worth it.", '']
      ])
    ]
  };
})();
