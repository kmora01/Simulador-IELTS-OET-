/* Vocabulario y expresiones cotidianas (contenido original).
   Cada expresión: [inglés, español, ejemplo, nota (opcional), registro (opcional: 'informal' | 'formal'), hueco (opcional)].
   "hueco" es el texto exacto del ejemplo que se oculta en el ejercicio "Completa"; si no se indica, se usa la expresión. */
window.DATA = window.DATA || {};
(() => {
  const T = (id, ico, name, desc, rows) => ({
    id, ico, name, desc,
    items: rows.map(([en, es, ex, note, tag, gap]) => ({ en, es, ex, note: note || '', tag: tag || '', gap: gap || '' }))
  });

  DATA.daily = {
    topics: [
      T('greet', '👋', 'Saludos y despedidas', 'Cómo saludar, preguntar qué tal y despedirse con naturalidad.', [
        ["How's it going?", '¿Qué tal? ¿Cómo va todo?', "Hey Sam, how's it going?", 'Respuesta típica: "Not bad, thanks. You?"', 'informal'],
        ["What's up?", '¿Qué pasa? ¿Qué hay?', "What's up? You look tired.", 'Muy informal. Se responde "Not much" o "Nothing much".', 'informal'],
        ['Long time no see', '¡Cuánto tiempo sin vernos!', 'Maria! Long time no see. How have you been?', '', 'informal'],
        ['How have you been?', '¿Qué tal te ha ido? / ¿Cómo has estado?', "It's been ages! How have you been?", 'Para alguien que no ves hace tiempo.'],
        ['Nice to meet you', 'Encantado/a de conocerte', "I'm Kevin. Nice to meet you.", 'Al despedirte de alguien nuevo: "Nice meeting you".'],
        ['Not bad', 'No está mal / Bien', "Not bad, thanks. And you?", 'Respuesta muy común a "How are you?".'],
        ['Take care', 'Cuídate', 'See you next week. Take care!', ''],
        ['See you later', 'Hasta luego', "I'm off now. See you later!", 'Más corto: "See ya" (muy informal).'],
        ['Catch you later', 'Nos vemos luego', 'Got to run. Catch you later!', '', 'informal'],
        ['Have a good one', 'Que te vaya bien / Que tengas buen día', 'Thanks for the coffee. Have a good one!', 'Muy usado con dependientes y desconocidos.', 'informal'],
        ["I'd better get going", 'Mejor me voy ya', "It's getting late, I'd better get going.", 'Forma educada de terminar una conversación.'],
        ['Say hi to ...', 'Saluda a ... de mi parte', 'Say hi to your parents for me.', '', '', 'Say hi to'],
        ['Good to see you', 'Me alegra verte', 'Good to see you again, Tom.', 'Para alguien que ya conoces (no "nice to meet you").']
      ]),

      T('small', '☕', 'Conversación casual (small talk)', 'Romper el hielo, hablar del tiempo, el fin de semana y planes.', [
        ['What do you do?', '¿A qué te dedicas?', 'So, what do you do? — I work in a hospital.', 'No significa "¿qué haces ahora?". Para eso: "What are you doing?"'],
        ['What do you do for fun?', '¿Qué haces en tu tiempo libre?', 'What do you do for fun at the weekend?', ''],
        ['Lovely weather, isn\'t it?', 'Qué buen tiempo, ¿no?', "Lovely weather, isn't it? Finally some sun.", 'El tiempo es el tema estrella del small talk británico.'],
        ['Any plans for the weekend?', '¿Algún plan para el fin de semana?', 'Any plans for the weekend? — Not really, just relaxing.', ''],
        ['How was your weekend?', '¿Qué tal tu fin de semana?', 'How was your weekend? Did you go anywhere?', ''],
        ['Where are you from?', '¿De dónde eres?', 'Where are you from originally?', '"Originally" suena más natural si ya vives en otro sitio.'],
        ['I\'m into ...', 'Me gusta / Me interesa ...', "I'm really into cooking at the moment.", 'Va seguido de sustantivo o -ing.', 'informal', "I'm really into"],
        ['It\'s a small world!', '¡El mundo es un pañuelo!', "You know my cousin? It's a small world!", ''],
        ['By the way', 'Por cierto', 'By the way, did you get my message?', 'Para cambiar de tema o añadir algo.'],
        ['Speaking of which', 'Hablando de eso', 'Speaking of which, have you booked the tickets?', ''],
        ['Anyway', 'En fin / Bueno', "Anyway, I should get back to work.", 'Sirve para volver al tema o cerrar la conversación.'],
        ['How come?', '¿Cómo es que...? / ¿Por qué?', "I'm not going tonight. — How come?", 'Más informal que "Why?".', 'informal'],
        ['Fair enough', 'Vale, es razonable / Me parece justo', "I'm too tired to go out. — Fair enough.", 'Aceptas la razón de alguien.', 'informal']
      ]),

      T('react', '💬', 'Reaccionar y opinar', 'Mostrar acuerdo, desacuerdo, sorpresa y dar tu opinión.', [
        ['I couldn\'t agree more', 'Estoy totalmente de acuerdo', "I couldn't agree more. It's far too expensive.", 'Aunque parezca negativa, expresa acuerdo total.'],
        ['I see what you mean, but ...', 'Entiendo lo que dices, pero ...', 'I see what you mean, but I think it\'s risky.', 'Desacuerdo educado.', '', 'I see what you mean'],
        ['That makes sense', 'Tiene sentido', 'Oh, that makes sense now. Thanks.', '"Make sense", no "have sense".'],
        ['No way!', '¡No puede ser! / ¡Ni hablar!', 'She won the lottery? No way!', 'Sorpresa o rechazo según el tono.', 'informal'],
        ['You\'re kidding!', '¡No me digas! / ¡Estás de broma!', "You're kidding! He quit his job?", '', 'informal'],
        ['It\'s up to you', 'Tú decides / Depende de ti', 'Pizza or sushi? — It\'s up to you.', ''],
        ['I don\'t mind', 'Me da igual / No me importa', 'Tea or coffee? — I don\'t mind.', 'Más educado que "I don\'t care".'],
        ['As far as I know', 'Que yo sepa', 'As far as I know, the shop opens at nine.', ''],
        ['If you ask me', 'Si me preguntas / En mi opinión', 'If you ask me, the film was too long.', '', 'informal'],
        ['That\'s a good point', 'Buena observación / Tienes razón en eso', "That's a good point. I hadn't thought of that.", ''],
        ['Fingers crossed', 'Crucemos los dedos / Ojalá', 'The results come out tomorrow. Fingers crossed!', ''],
        ['Never mind', 'No importa / Olvídalo', 'Never mind, I\'ll ask someone else.', ''],
        ['What a shame!', '¡Qué pena!', "You can't come? What a shame!", 'También: "That\'s a pity".'],
        ['Good for you!', '¡Me alegro por ti! / ¡Bien hecho!', 'You passed your exam? Good for you!', '']
      ]),

      T('ask', '🙏', 'Pedir, ofrecer y agradecer', 'Peticiones educadas, favores, disculpas y respuestas a "gracias".', [
        ['Could you do me a favour?', '¿Me haces un favor?', 'Could you do me a favour and water my plants?', 'Ortografía británica "favour"; americana "favor".'],
        ['Would you mind ...?', '¿Te importaría ...?', 'Would you mind closing the window?', 'Va seguido de -ing. Responder "No, not at all" = sí, lo hago.', '', 'Would you mind'],
        ['Do you mind if I ...?', '¿Te importa si ...?', 'Do you mind if I open the window?', '', '', 'Do you mind if I'],
        ['Can I give you a hand?', '¿Te echo una mano?', 'That looks heavy. Can I give you a hand?', ''],
        ['I was wondering if ...', 'Me preguntaba si ...', 'I was wondering if you could help me with this form.', 'Muy educado, ideal para peticiones formales.', 'formal', 'I was wondering if'],
        ['No worries', 'No te preocupes / De nada', 'Sorry I\'m late! — No worries.', 'Responde a gracias o a una disculpa.', 'informal'],
        ['Don\'t mention it', 'No hay de qué', 'Thanks for the lift. — Don\'t mention it.', ''],
        ['My pleasure', 'Un placer / Con gusto', 'Thank you so much! — My pleasure.', 'Un poco más formal.'],
        ['I owe you one', 'Te debo una', 'Thanks for covering my shift. I owe you one!', '', 'informal'],
        ['Sorry to bother you', 'Perdona que te moleste', 'Sorry to bother you, but is this seat free?', ''],
        ['Excuse me', 'Disculpe / Perdón (para llamar la atención)', 'Excuse me, where is the nearest pharmacy?', '"Sorry" es para disculparte; "Excuse me" para pedir paso o atención.'],
        ['Let me know', 'Avísame / Dime', 'Let me know if you need anything.', ''],
        ['Thanks anyway', 'Gracias de todos modos', 'It\'s sold out? OK, thanks anyway.', ''],
        ['Help yourself', 'Sírvete tú mismo', 'There\'s food in the fridge. Help yourself.', '']
      ]),

      T('food', '🍽️', 'Restaurante y cafetería', 'Pedir comida, preguntar, pagar la cuenta.', [
        ['A table for two, please', 'Una mesa para dos, por favor', 'Hi, a table for two, please.', ''],
        ['Are you ready to order?', '¿Están listos para pedir?', 'Are you ready to order, or do you need a minute?', 'Lo dice el camarero.'],
        ['I\'ll have ...', 'Yo voy a pedir ... / Para mí ...', "I'll have the chicken salad, please.", 'Más natural que "I want".', '', "I'll have"],
        ['Could I get ...?', '¿Me pone ...? / ¿Me puede traer ...?', 'Could I get a glass of water, please?', '', '', 'Could I get'],
        ['For here or to go?', '¿Para tomar aquí o para llevar?', 'For here or to go? — To go, please.', 'En Reino Unido: "Eat in or take away?"'],
        ['Can we have the bill, please?', '¿Nos trae la cuenta, por favor?', 'Excuse me, can we have the bill, please?', 'En EE. UU.: "the check".'],
        ['It\'s on me', 'Invito yo / Pago yo', "Put your wallet away, it's on me.", '', 'informal'],
        ['Let\'s split the bill', 'Paguemos a medias / Dividamos la cuenta', "Let's split the bill this time.", ''],
        ['I\'m starving', 'Me muero de hambre', "I'm starving. Let's eat.", '', 'informal'],
        ['I\'m full', 'Estoy lleno/a', "No dessert for me, I'm full.", ''],
        ['Still or sparkling?', '¿Con gas o sin gas?', 'Water for the table — still or sparkling?', '"Still" = sin gas.'],
        ['Keep the change', 'Quédese con el cambio', 'Here you go. Keep the change.', ''],
        ['Does it come with ...?', '¿Viene con ...? / ¿Lleva ...?', 'Does it come with chips?', '', '', 'Does it come with'],
        ['I\'m allergic to ...', 'Soy alérgico/a a ...', "I'm allergic to nuts. Does this dish contain any?", '', '', "I'm allergic to"]
      ]),

      T('shop', '🛒', 'Compras y dinero', 'En la tienda, devoluciones, precios y pagos.', [
        ['I\'m just looking', 'Solo estoy mirando', "Can I help you? — I'm just looking, thanks.", ''],
        ['Do you have this in ...?', '¿Lo tiene en ...? (talla/color)', 'Do you have this in a medium?', '', '', 'Do you have this in'],
        ['Can I try it on?', '¿Me lo puedo probar?', 'I like this jacket. Can I try it on?', ''],
        ['Where are the fitting rooms?', '¿Dónde están los probadores?', 'Excuse me, where are the fitting rooms?', 'En EE. UU.: "dressing rooms".'],
        ['It\'s a bargain', 'Es una ganga', "Only ten pounds? It's a bargain!", ''],
        ['It\'s a rip-off', 'Es un robo / Es carísimo', "Forty dollars for a T-shirt? It's a rip-off.", '', 'informal'],
        ['On sale', 'En oferta / Rebajado', 'These boots are on sale this week.', '"For sale" = en venta (disponible para comprar).'],
        ['Can I pay by card?', '¿Puedo pagar con tarjeta?', 'Can I pay by card, or is it cash only?', '"Pay by card", "pay in cash".'],
        ['I\'d like a refund', 'Quisiera un reembolso', "This doesn't work. I'd like a refund, please.", ''],
        ['Do you have the receipt?', '¿Tiene el tique / recibo?', "You can return it if you have the receipt.", '', '', 'have the receipt'],
        ['Out of stock', 'Agotado', "Sorry, that model is out of stock.", ''],
        ['It costs an arm and a leg', 'Cuesta un ojo de la cara', 'A new phone costs an arm and a leg.', '', 'informal', 'costs an arm and a leg'],
        ['I\'m broke', 'Estoy sin blanca / sin dinero', "I can't go out tonight, I'm broke.", '', 'informal'],
        ['Shop around', 'Comparar precios en varias tiendas', "It's worth shopping around before you buy a car.", '', '', 'shopping around']
      ]),

      T('travel', '✈️', 'Viajes y transporte', 'Aeropuerto, hotel, direcciones y transporte público.', [
        ['Check in', 'Facturar / Registrarse (hotel)', 'We need to check in two hours before the flight.', ''],
        ['Boarding pass', 'Tarjeta de embarque', 'Please have your boarding pass ready.', ''],
        ['The flight is delayed', 'El vuelo está retrasado', 'Bad news: the flight is delayed by an hour.', '', '', 'delayed'],
        ['Carry-on / hand luggage', 'Equipaje de mano', 'You can only take one piece of hand luggage.', '', '', 'hand luggage'],
        ['Could you tell me how to get to ...?', '¿Me podría decir cómo llegar a ...?', 'Could you tell me how to get to the station?', '', '', 'how to get to'],
        ['It\'s within walking distance', 'Se puede ir andando', "The museum is within walking distance of the hotel.", '', '', 'within walking distance'],
        ['Return ticket', 'Billete de ida y vuelta', 'A return ticket to Oxford, please.', 'EE. UU.: "round-trip ticket". Solo ida: "single" / "one-way".'],
        ['Get on / get off', 'Subirse / bajarse (bus, tren)', 'Get off at the third stop.', 'En coche y taxi se usa "get in / get out".', '', 'Get off'],
        ['Miss the bus', 'Perder el autobús', "Hurry up or we'll miss the bus!", '', '', 'miss the bus'],
        ['Rush hour', 'Hora punta', 'The trains are packed during rush hour.', ''],
        ['Traffic jam', 'Atasco', 'Sorry I\'m late, I got stuck in a traffic jam.', ''],
        ['Is breakfast included?', '¿Está incluido el desayuno?', 'How much is the room? Is breakfast included?', ''],
        ['Check out', 'Dejar la habitación / Hacer el check-out', 'What time do we have to check out?', ''],
        ['Jet lag', 'Desfase horario', "I've got terrible jet lag after the flight.", '']
      ]),

      T('home', '🏠', 'Casa y rutina diaria', 'Tareas, horarios y hábitos de todos los días.', [
        ['Do the washing-up', 'Fregar los platos', "I'll cook if you do the washing-up.", 'EE. UU.: "do the dishes".'],
        ['Do the laundry', 'Hacer la colada / lavar la ropa', 'I usually do the laundry on Sundays.', ''],
        ['Take out the rubbish', 'Sacar la basura', "Can you take out the rubbish? It's full.", 'EE. UU.: "take out the trash".'],
        ['Tidy up', 'Ordenar / Recoger', 'Please tidy up your room before the guests arrive.', ''],
        ['Run errands', 'Hacer recados', 'I spent the morning running errands.', '', '', 'running errands'],
        ['Oversleep', 'Quedarse dormido (no despertar a tiempo)', 'I overslept and missed my train.', '', '', 'overslept'],
        ['Have a lie-in', 'Quedarse en la cama hasta tarde', "It's Saturday, so I'm having a lie-in.", 'Británico.', 'informal', 'having a lie-in'],
        ['Grab a bite', 'Comer algo rápido', "Let's grab a bite before the meeting.", '', 'informal'],
        ['Get ready', 'Arreglarse / Prepararse', 'It takes me twenty minutes to get ready.', ''],
        ['Commute', 'Trayecto diario al trabajo / Desplazarse', 'My commute takes about forty minutes.', ''],
        ['Chill out', 'Relajarse', "I'm just going to chill out at home tonight.", '', 'informal'],
        ['Make the bed', 'Hacer la cama', 'I always make the bed after breakfast.', '"Make the bed", no "do the bed".'],
        ['Call it a day', 'Dar por terminado (el día de trabajo)', "We've done enough. Let's call it a day.", '']
      ]),

      T('work', '💼', 'Trabajo y estudios', 'Reuniones, correos, plazos y conversación en la oficina.', [
        ['I\'m snowed under', 'Estoy hasta arriba de trabajo', "I can't help today, I'm snowed under.", '', 'informal'],
        ['Deadline', 'Fecha límite / Plazo', 'The deadline for the report is Friday.', ''],
        ['Catch up', 'Ponerse al día', "Let's catch up after the meeting.", ''],
        ['Get back to you', 'Volver a contactarte / Responderte', "I'll check and get back to you this afternoon.", 'Muy usado en correos.', '', 'get back to you'],
        ['Keep me posted', 'Mantenme informado/a', 'Keep me posted on how the interview goes.', ''],
        ['Take a day off', 'Tomarse un día libre', "I'm taking a day off on Friday.", '', '', 'taking a day off'],
        ['Work overtime', 'Hacer horas extra', 'We had to work overtime to finish the project.', ''],
        ['Call in sick', 'Llamar para decir que estás enfermo', 'Anna called in sick this morning.', '', '', 'called in sick'],
        ['Run late', 'Ir con retraso', "Sorry, I'm running late. I'll be there in ten.", '', '', 'running late'],
        ['Fill in a form', 'Rellenar un formulario', 'Please fill in this form and sign at the bottom.', 'EE. UU. también "fill out".', '', 'fill in'],
        ['Get the hang of it', 'Pillarle el truco / Cogerle el tranquillo', "The new software is tricky, but you'll get the hang of it.", '', 'informal'],
        ['On the same page', 'De acuerdo / En sintonía', "Let's meet first so we're all on the same page.", ''],
        ['Please find attached', 'Adjunto le envío', 'Please find attached the updated schedule.', 'Fórmula típica de correo.', 'formal'],
        ['I look forward to hearing from you', 'Quedo a la espera de su respuesta', 'Thank you for your time. I look forward to hearing from you.', 'Cierre formal de correo. Ojo: "to + -ing".', 'formal']
      ]),

      T('feel', '😊', 'Emociones y estados de ánimo', 'Expresar cómo te sientes con naturalidad.', [
        ['I\'m fed up with ...', 'Estoy harto/a de ...', "I'm fed up with this rain.", '', 'informal', 'fed up with'],
        ['I\'m worn out', 'Estoy agotado/a', "I'm worn out after that shift.", ''],
        ['I\'m over the moon', 'Estoy feliz / encantado/a', "I got the job! I'm over the moon.", ''],
        ['I\'m stressed out', 'Estoy muy estresado/a', "I'm stressed out about the exam.", ''],
        ['It gets on my nerves', 'Me saca de quicio / Me pone de los nervios', 'His constant complaining gets on my nerves.', '', 'informal', 'gets on my nerves'],
        ['I\'m looking forward to ...', 'Tengo ganas de ... / Estoy deseando ...', "I'm looking forward to the holidays.", 'Seguido de sustantivo o -ing.', '', 'looking forward to'],
        ['I can\'t be bothered', 'No me apetece / Me da pereza', "I can't be bothered to cook tonight.", '', 'informal'],
        ['I\'m in a good mood', 'Estoy de buen humor', "You're in a good mood today!", '', '', 'in a good mood'],
        ['I feel down', 'Estoy desanimado/a / de bajón', "I've been feeling a bit down lately.", '', '', 'feeling a bit down'],
        ['I\'m nervous / anxious', 'Estoy nervioso/a / ansioso/a', "I'm nervous about the interview.", '"Nervous" no significa enfadado.', '', 'nervous'],
        ['I\'m embarrassed', 'Me da vergüenza / Estoy avergonzado/a', "I'm so embarrassed, I forgot her name.", 'Falso amigo: no significa "embarazada" (pregnant).', '', 'embarrassed'],
        ['What a relief!', '¡Qué alivio!', 'The test was negative? What a relief!', ''],
        ['Cheer up!', '¡Anímate!', "Cheer up! It's not the end of the world.", '']
      ]),

      T('phrasal', '🔗', 'Phrasal verbs del día a día', 'Los más frecuentes en conversación real.', [
        ['Find out', 'Averiguar / Enterarse', 'I need to find out what time the shop closes.', ''],
        ['Look for', 'Buscar', "I'm looking for my keys.", '', '', 'looking for'],
        ['Look after', 'Cuidar', 'Can you look after the kids tonight?', ''],
        ['Give up', 'Rendirse / Dejar (un hábito)', 'He gave up smoking last year.', '', '', 'gave up'],
        ['Turn up', 'Aparecer / Presentarse', 'She turned up an hour late.', '', '', 'turned up'],
        ['Turn down', 'Rechazar / Bajar (volumen)', 'Could you turn down the music?', ''],
        ['Pick up', 'Recoger / Aprender sin estudiar', "I'll pick you up at eight.", '', '', 'pick you up'],
        ['Put off', 'Posponer', "Don't put off going to the dentist.", ''],
        ['Run out of', 'Quedarse sin', "We've run out of milk.", '', '', 'run out of'],
        ['Get along with', 'Llevarse bien con', 'I get along with my flatmates really well.', ''],
        ['Come up with', 'Ocurrírsele (una idea), idear', 'She came up with a brilliant plan.', '', '', 'came up with'],
        ['Figure out', 'Entender / Resolver', "I can't figure out how this works.", ''],
        ['Hang out', 'Pasar el rato', 'We usually hang out at the park after class.', '', 'informal'],
        ['Set up', 'Montar / Configurar / Organizar', 'Can you help me set up the new printer?', ''],
        ['Work out', 'Hacer ejercicio / Resolver', 'I work out three times a week.', '']
      ]),

      T('idioms', '💡', 'Expresiones idiomáticas', 'Modismos frecuentes que no se traducen palabra por palabra.', [
        ['Piece of cake', 'Pan comido', 'The test was a piece of cake.', '', 'informal'],
        ['Break the ice', 'Romper el hielo', 'He told a joke to break the ice.', ''],
        ['Hit the sack', 'Irse a la cama / a dormir', "I'm exhausted. Time to hit the sack.", '', 'informal'],
        ['Under the weather', 'Pachucho/a / Algo enfermo/a', "I'm feeling a bit under the weather today.", ''],
        ['Once in a blue moon', 'De higos a brevas / Muy de vez en cuando', 'I only eat fast food once in a blue moon.', ''],
        ['Better late than never', 'Más vale tarde que nunca', 'You finally called! Better late than never.', ''],
        ['Hit the nail on the head', 'Dar en el clavo', 'You hit the nail on the head with that comment.', ''],
        ['Cost a fortune', 'Costar una fortuna', 'Their wedding must have cost a fortune.', '', '', 'cost a fortune'],
        ['Call it a night', 'Terminar la noche / Irse a casa', "It's midnight. Let's call it a night.", ''],
        ['Keep an eye on', 'Echar un ojo / Vigilar', 'Can you keep an eye on my bag for a second?', ''],
        ['Play it by ear', 'Improvisar sobre la marcha', "I don't know yet. Let's play it by ear.", ''],
        ['It\'s not my cup of tea', 'No es lo mío / No me va', "Opera isn't really my cup of tea.", '', '', 'my cup of tea'],
        ['Get cold feet', 'Echarse atrás (por miedo)', 'He got cold feet the day before the wedding.', '', '', 'got cold feet'],
        ['Speak of the devil', 'Hablando del rey de Roma', 'Speak of the devil, here comes Jack!', ''],
        ['Sleep on it', 'Consultarlo con la almohada', "Don't decide now. Sleep on it.", '']
      ]),

      T('health', '🤒', 'Salud cotidiana', 'Contar síntomas, pedir cita y hablar de cómo te encuentras.', [
        ['I\'ve got a sore throat', 'Me duele la garganta', "I've got a sore throat and a runny nose.", '', '', 'sore throat'],
        ['A runny nose', 'Moqueo / Nariz que gotea', 'The baby has a runny nose and a cough.', '', '', 'runny nose'],
        ['I feel dizzy', 'Estoy mareado/a', 'I feel dizzy when I stand up quickly.', '', '', 'dizzy'],
        ['I\'d like to make an appointment', 'Quisiera pedir cita', "I'd like to make an appointment with Dr Lee.", '', 'formal', 'make an appointment'],
        ['I\'m coming down with something', 'Me estoy poniendo malo/a', "I think I'm coming down with something.", '', 'informal', 'coming down with'],
        ['Get over (an illness)', 'Recuperarse de (una enfermedad)', 'It took me a week to get over the flu.', '', '', 'get over'],
        ['Take it easy', 'Tómatelo con calma / Descansa', 'Take it easy for a few days and drink plenty of water.', ''],
        ['I sprained my ankle', 'Me torcí el tobillo', 'I sprained my ankle playing football.', '', '', 'sprained'],
        ['Over-the-counter', 'Sin receta (medicamento)', 'You can buy this painkiller over the counter.', '', '', 'over the counter'],
        ['Prescription', 'Receta médica', 'You need a prescription for antibiotics.', ''],
        ['I\'m feeling much better', 'Me siento mucho mejor', "Thanks for asking, I'm feeling much better.", ''],
        ['Get some rest', 'Descansar', 'Go home and get some rest.', ''],
        ['Throw up', 'Vomitar', 'He threw up twice during the night.', 'Formal: "vomit".', 'informal', 'threw up']
      ]),

      T('plans', '📅', 'Planes, citas y tiempo', 'Quedar, proponer, cancelar y hablar de horarios.', [
        ['Are you free on ...?', '¿Estás libre el ...?', 'Are you free on Thursday evening?', '', '', 'Are you free on'],
        ['How about ...?', '¿Qué tal si ...?', 'How about going to the cinema?', 'Seguido de -ing o sustantivo.', '', 'How about'],
        ['Shall we ...?', '¿Hacemos ...? / ¿Vamos a ...?', 'Shall we meet at seven?', 'Británico, para propuestas.', '', 'Shall we'],
        ['Count me in!', '¡Cuenta conmigo! / ¡Me apunto!', 'A picnic on Sunday? Count me in!', 'Lo contrario: "Count me out".', 'informal'],
        ['I\'m afraid I can\'t make it', 'Me temo que no puedo ir', "Sorry, I'm afraid I can't make it tonight.", '"Make it" = llegar / poder asistir.', '', "can't make it"],
        ['Rain check', 'Dejarlo para otro día', 'Can I take a rain check on dinner?', '', 'informal'],
        ['Call off', 'Cancelar', 'They called off the match because of the storm.', '', '', 'called off'],
        ['Let\'s keep in touch', 'Sigamos en contacto', "It was great seeing you. Let's keep in touch!", ''],
        ['In the nick of time', 'Justo a tiempo / Por los pelos', 'We got to the station in the nick of time.', ''],
        ['On time / in time', 'Puntual / a tiempo (con margen)', 'The train left on time.', '"On time" = a la hora exacta; "in time" = con tiempo suficiente.', '', 'on time'],
        ['The day after tomorrow', 'Pasado mañana', "I'm flying home the day after tomorrow.", ''],
        ['Every other day', 'Cada dos días / Días alternos', 'I go running every other day.', ''],
        ['Sooner or later', 'Tarde o temprano', "Sooner or later you'll have to tell him.", '']
      ]),

      T('phone', '📱', 'Teléfono y mensajes', 'Llamadas, mensajes de texto y abreviaturas comunes.', [
        ['Who\'s calling, please?', '¿De parte de quién?', "Good morning. Who's calling, please?", '', 'formal'],
        ['Hold on a second', 'Espera un momento / No cuelgues', "Hold on a second, I'll get a pen.", ''],
        ['Hang up', 'Colgar (el teléfono)', "Don't hang up, I'm still here.", ''],
        ['You\'re breaking up', 'Se corta / No te oigo bien', "Sorry, you're breaking up. Can I call you back?", '', '', 'breaking up'],
        ['Call back', 'Devolver la llamada / Volver a llamar', "I'll call you back in five minutes.", '', '', 'call you back'],
        ['Drop me a line', 'Escríbeme / Mándame un mensaje', 'Drop me a line when you get home.', '', 'informal'],
        ['Leave a message', 'Dejar un mensaje', "She's not here. Would you like to leave a message?", ''],
        ['Text me', 'Mándame un mensaje', 'Text me when you arrive.', '', 'informal'],
        ['BTW', 'Por cierto (by the way)', 'BTW, the meeting moved to 3 pm.', 'Abreviatura escrita.', 'informal'],
        ['ASAP', 'Lo antes posible (as soon as possible)', 'Please reply ASAP.', ''],
        ['FYI', 'Para tu información (for your information)', 'FYI, the office is closed on Monday.', ''],
        ['My battery is about to die', 'Me estoy quedando sin batería', "I have to be quick, my battery is about to die.", '', 'informal', 'battery is about to die']
      ]),

      T('false', '⚠️', 'Falsos amigos (inglés ↔ español)', 'Palabras que parecen iguales pero no lo son. Errores típicos de hispanohablantes.', [
        ['Actually', 'En realidad / De hecho', "Actually, I'm from Chile, not Spain.", '"Actualmente" = currently / nowadays.'],
        ['Eventually', 'Finalmente / Al final', 'Eventually, we found the hotel.', '"Eventualmente" = possibly / occasionally.'],
        ['Embarrassed', 'Avergonzado/a', 'I was so embarrassed when I fell over.', '"Embarazada" = pregnant.'],
        ['Constipated', 'Estreñido/a', "If you're constipated, drink more water.", '"Constipado" = to have a cold.'],
        ['Sensible', 'Sensato/a', "That's a sensible decision.", '"Sensible" en español = sensitive.'],
        ['Library', 'Biblioteca', 'I study at the library every afternoon.', '"Librería" = bookshop.'],
        ['Realise', 'Darse cuenta', "I didn't realise it was so late.", '"Realizar" = carry out / do.', '', 'realise'],
        ['Assist', 'Ayudar', 'A nurse will assist the doctor.', '"Asistir (a clase)" = attend.'],
        ['Carpet', 'Alfombra / Moqueta', 'We need a new carpet in the living room.', '"Carpeta" = folder.'],
        ['Exit', 'Salida', 'The exit is on your left.', '"Éxito" = success.'],
        ['Career', 'Carrera profesional', 'She wants a career in medicine.', '"Carrera universitaria" = degree.'],
        ['Attend', 'Asistir (a un evento)', 'More than 200 people attended the conference.', '"Atender" = to serve / look after.', '', 'attended'],
        ['Molest', 'Abusar (sexualmente) — ¡cuidado!', 'Be careful: molest is a very serious word in English.', '"Molestar" = bother / disturb: "Sorry to bother you".'],
        ['Topic', 'Tema', 'The topic of the essay is climate change.', '"Tópico" = cliché.']
      ])
    ]
  };
})();
