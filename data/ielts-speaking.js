/* IELTS Speaking — temas originales, práctica y frases útiles. */
window.DATA = window.DATA || {};
DATA.speaking = DATA.speaking || {};

DATA.speaking.ielts = {
  part1: [
    { topic: 'Work or studies', qs: ['Do you work or are you a student?', 'What do you like most about your job or your studies?', 'Is there anything you would like to change about it?', 'What job would you like to have in the future?'] },
    { topic: 'Your hometown', qs: ['Where is your hometown?', 'What do you like about living there?', 'Has your hometown changed much since you were a child?', 'Would you recommend it to tourists? Why?'] },
    { topic: 'Weekends', qs: ['What do you usually do at the weekend?', 'Do you prefer to spend weekends at home or going out?', 'What did you do last weekend?', 'Do you think weekends should be longer?'] },
    { topic: 'Music', qs: ['What kind of music do you enjoy?', 'Did you learn to play a musical instrument as a child?', 'Do you prefer listening to music alone or with other people?', 'Has the music you like changed as you have got older?'] },
    { topic: 'Cooking', qs: ['Do you like cooking?', 'Who usually cooks in your family?', 'What is a dish you can cook well?', 'Do you think children should learn to cook at school?'] },
    { topic: 'Technology', qs: ['How often do you use your phone each day?', 'What do you mostly use the internet for?', 'Is there any technology you could not live without?', 'Do you think people spend too much time on their phones?'] },
    { topic: 'Sleep', qs: ['How many hours do you usually sleep?', 'Do you ever take a nap during the day?', 'What do you do if you cannot sleep?', 'Do you think people sleep less than in the past?'] },
    { topic: 'Walking', qs: ['Do you walk a lot in your daily life?', 'Where do you like to go for a walk?', 'Did you walk more when you were younger?', 'Do you think cities should have more areas for walking?'] }
  ],
  part2: [
    {
      id: 's1', theme: 'skills and learning', card: 'Describe a skill you learned that you think is useful.', bullets: ['what the skill is', 'when and how you learned it', 'how often you use it'], close: 'and explain why you think this skill is useful.',
      followUp: 'Do you think you could teach this skill to someone else?',
      part3: ['Which skills do you think are most important for young people to learn today?', 'Is it better to learn skills at school or from experience?', 'How has technology changed the way people learn new skills?', 'Do you think older people find it harder to learn new things? Why?']
    },
    {
      id: 's2', theme: 'helping others', card: 'Describe a time when you helped someone.', bullets: ['who you helped', 'what the situation was', 'what you did to help'], close: 'and explain how you felt about helping this person.',
      followUp: 'Do you often help people in your daily life?',
      part3: ['Why do some people enjoy volunteering?', 'Should schools encourage students to do community work?', 'Do you think people are less willing to help strangers than in the past?', 'What responsibility do governments have to help people in need?']
    },
    {
      id: 's3', theme: 'places and travel', card: 'Describe a place you visited that you would like to go back to.', bullets: ['where it is', 'when you went there and who with', 'what you did there'], close: 'and explain why you would like to return.',
      followUp: 'Do you usually prefer to visit new places or places you already know?',
      part3: ['What are the benefits of travelling to other countries?', 'How can tourism damage the places people visit?', 'Do you think virtual travel could ever replace real travel?', 'Why do some cities attract more tourists than others?']
    },
    {
      id: 's4', theme: 'books and media', card: 'Describe a book, film or series that made a strong impression on you.', bullets: ['what it was', 'when you read or watched it', 'what it was about'], close: 'and explain why it made such a strong impression on you.',
      followUp: 'Would you read or watch it again?',
      part3: ['Do you think children read less than they did in the past?', 'What makes a story popular with many different people?', 'Should governments support the film industry in their country?', 'How do films and series influence the way people think?']
    },
    {
      id: 's5', theme: 'health and lifestyle', card: 'Describe a healthy habit you have or would like to have.', bullets: ['what the habit is', 'when you started it or want to start it', 'how difficult it is to keep'], close: 'and explain how it affects your health.',
      followUp: 'Do your friends have the same habit?',
      part3: ['Why do many people find it difficult to live a healthy lifestyle?', 'Whose responsibility is it to make sure people stay healthy: individuals or governments?', 'How has people\'s diet changed in your country in recent years?', 'Do you think advertising for unhealthy food should be banned?']
    },
    {
      id: 's6', theme: 'people we admire', card: 'Describe a person who has had an important influence on your life.', bullets: ['who this person is', 'how you know them', 'what they have done for you'], close: 'and explain why they have been so important to you.',
      followUp: 'Do you still keep in contact with this person?',
      part3: ['What qualities make someone a good role model?', 'Do celebrities have a responsibility to set a good example?', 'Are parents or teachers more influential in a child\'s life?', 'How might the people we admire change as we get older?']
    }
  ]
};

DATA.speaking.oetPrompts = [
  { q: 'Explain to a patient, without medical jargon, why they need to fast before a blood test tomorrow morning.', hint: 'Usa frases simples, comprueba comprensión: “Does that make sense?”' },
  { q: 'A patient is anxious about having an MRI scan. Reassure them and explain what will happen.', hint: 'Valida la emoción: “It\'s completely understandable to feel nervous.”' },
  { q: 'Ask a patient about their chest pain using open questions.', hint: 'Empieza con “Can you tell me more about…?” y resume después.' },
  { q: 'Explain to a parent how to give liquid paracetamol to their child safely.', hint: 'Divide la información en pasos y pide que repita las instrucciones clave.' },
  { q: 'A patient does not want to stop smoking. Explore their reasons and encourage them.', hint: 'No juzgues: explora ideas, preocupaciones y expectativas (ICE).' },
  { q: 'Explain to an elderly patient how to use a walking frame at home to prevent falls.', hint: 'Pregunta qué sabe ya el paciente antes de explicar.' },
  { q: 'Tell a patient that their surgery has been postponed until next week.', hint: 'Disculpa, explica el motivo brevemente y ofrece próximos pasos.' }
];

DATA.speaking.shadowing = {
  ielts: [
    'To be honest, I have never really thought about it before, but I suppose it depends on the situation.',
    'One of the main reasons I enjoy living in my city is that there is always something going on.',
    'Although technology has made our lives easier in many ways, it has also created some new problems.',
    'If I had more free time, I would definitely take up a musical instrument, probably the guitar.',
    'In my opinion, governments should invest more in public transport rather than building new roads.',
    'It is often said that travel broadens the mind, and I think that is particularly true for young people.',
    'What I find most interesting about this topic is how quickly attitudes have changed in recent years.'
  ],
  oet: [
    'Good morning, my name is Daniel and I am one of the nurses on the ward today. May I confirm your full name and date of birth?',
    'I can see that you are quite worried about the operation. Would you like to tell me what concerns you most?',
    'Before I explain the treatment, could you tell me what you already know about your condition?',
    'This medication can sometimes make you feel a little dizzy, so please stand up slowly.',
    'Just to make sure I have explained everything clearly, could you tell me in your own words how you will take the tablets?',
    'If the pain gets worse, or you notice any bleeding, please come back straight away or call this number.',
    'Is there anything else you would like to ask me before we finish?'
  ]
};

DATA.speaking.phrases = [
  {
    group: 'IELTS: ganar tiempo', items: [
      { en: "That's an interesting question. Let me think about it for a moment.", es: 'Es una pregunta interesante. Déjame pensarlo un momento.' },
      { en: "I've never really thought about that, but I'd say…", es: 'Nunca lo había pensado, pero diría que…' },
      { en: 'Well, it depends on what you mean by…', es: 'Bueno, depende de lo que entiendas por…' },
      { en: 'There are a couple of reasons for that. First of all…', es: 'Hay un par de razones. En primer lugar…' }
    ]
  },
  {
    group: 'IELTS: opinar y matizar', items: [
      { en: 'From my point of view, the main advantage is that…', es: 'Desde mi punto de vista, la principal ventaja es que…' },
      { en: "I'm inclined to think that…", es: 'Me inclino a pensar que…' },
      { en: 'On the other hand, it could be argued that…', es: 'Por otro lado, se podría argumentar que…' },
      { en: "That's not always the case, though. For example…", es: 'Aunque no siempre es así. Por ejemplo…' },
      { en: 'Generally speaking, people in my country tend to…', es: 'En general, la gente de mi país tiende a…' }
    ]
  },
  {
    group: 'OET: empatía y relación', items: [
      { en: "I can see this has been really difficult for you.", es: 'Veo que esto ha sido muy difícil para usted.' },
      { en: "It's completely understandable to feel that way.", es: 'Es totalmente comprensible sentirse así.' },
      { en: "I'm sorry to hear that. How has it been affecting your daily life?", es: 'Lamento oír eso. ¿Cómo le ha afectado en su día a día?' },
      { en: 'Is there anything in particular that is worrying you?', es: '¿Hay algo en particular que le preocupe?' }
    ]
  },
  {
    group: 'OET: estructura y explicación', items: [
      { en: "First, I'd like to ask you a few questions, and then I'll explain the options.", es: 'Primero me gustaría hacerle unas preguntas y luego le explicaré las opciones.' },
      { en: 'What do you already know about this condition?', es: '¿Qué sabe ya sobre esta afección?' },
      { en: 'In simple terms, this means that…', es: 'En términos sencillos, esto significa que…' },
      { en: 'Does that make sense so far?', es: '¿Hasta aquí tiene sentido?' },
      { en: 'Could you tell me in your own words what you will do at home?', es: '¿Podría decirme con sus palabras qué hará en casa?' }
    ]
  },
  {
    group: 'OET: negociar y cerrar', items: [
      { en: 'I understand your concern. Would you be willing to try it for a week and see how you feel?', es: 'Entiendo su preocupación. ¿Estaría dispuesto a probarlo una semana y ver cómo se siente?' },
      { en: "What would make it easier for you to…?", es: '¿Qué le facilitaría…?' },
      { en: "Let's go over the plan once more: …", es: 'Repasemos el plan una vez más: …' },
      { en: "If you have any questions later, please don't hesitate to contact us.", es: 'Si más tarde tiene preguntas, no dude en contactarnos.' }
    ]
  }
];
