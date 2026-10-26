/* IELTS Listening — Practice Test 1 (contenido original). */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['ielts-l1'] = {
  id: 'ielts-l1', exam: 'ielts', skill: 'listening', title: 'IELTS Listening — Practice Test 1',
  summary: 'Leisure centre · Nature reserve · Student project · Lecture on urban heat',
  meta: ['4 partes', '40 preguntas', '~30 min', 'Audio una vez'], reviewTime: 120,
  parts: [
    {
      title: 'Part 1', label: 'Part 1', intro: 'Questions 1–10',
      speakers: { N: { name: 'Narrator', g: 'm' }, R: { name: 'Receptionist', g: 'f' }, C: { name: 'Mark', g: 'm' } },
      audio: [
        { s: 'N', t: 'Part 1. You will hear a telephone conversation between a receptionist at a leisure centre and a man who wants to become a member. First, you have some time to look at questions 1 to 5.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen carefully and answer questions 1 to 5.' },
        { s: 'R', t: 'Good morning, Riverside Leisure Centre, Hannah speaking. How can I help you?' },
        { s: 'C', t: "Hi. I'd like to join the centre, please. I've just moved to the area and a friend recommended you." },
        { s: 'R', t: "Lovely. I can take your details over the phone and set up the membership right now, if you like." },
        { s: 'C', t: 'Great, thanks.' },
        { s: 'R', t: 'So, could I have your full name, please?' },
        { s: 'C', t: "It's Mark Pemberton." },
        { s: 'R', t: 'Could you spell the surname for me?' },
        { s: 'C', t: 'Sure. P, E, M, B, E, R, T, O, N.' },
        { s: 'R', t: 'Thank you. And what is your address?' },
        { s: 'C', t: "It's Flat 3, 14 Cedar Road. That's C, E, D, A, R." },
        { s: 'R', t: 'Cedar Road. Is that the one near the railway station?' },
        { s: 'C', t: "No, I think that one is Cedar Close. Mine is on the other side of town, near the hospital." },
        { s: 'R', t: 'Ah yes, I know it. And may I ask what you do for a living? We only ask for statistical purposes.' },
        { s: 'C', t: 'Of course. Well, I originally trained as an engineer, but these days I work as an architect.' },
        { s: 'R', t: "Thank you. Now, we have three types of membership. There's full membership, which lets you use all the facilities at any time. There's off-peak membership, which covers weekdays before four p.m. and all day at weekends. And there's a swim-only option." },
        { s: 'C', t: "I work from home a lot, so I'm usually free during the day. I was going to go for full membership, but actually off-peak sounds like it would suit me better." },
        { s: 'R', t: 'OK, off-peak it is.' },
        { s: 'C', t: 'And how much is that per month?' },
        { s: 'R', t: "Off-peak is normally thirty-eight pounds a month, but we have a special offer for new members at the moment, so for the first year it's thirty-two pounds." },
        { s: 'C', t: "Oh, that's good." },
        { s: 'N', t: 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen and answer questions 6 to 10.' },
        { s: 'R', t: 'Now, are there any classes you might be interested in? We run lots of them: spinning, Pilates, yoga, circuit training.' },
        { s: 'C', t: "I did Pilates for a while, but I found it a bit slow. I'd really like to try yoga, though. I've heard it's good for your back." },
        { s: 'R', t: "It is. All classes are included in your membership, but you need to book them online. Next, all new members have an induction session with one of our trainers, who will show you how to use the gym equipment safely. They're on Tuesdays and Thursdays." },
        { s: 'C', t: 'Tuesday is difficult for me. I have a regular meeting that day. So Thursday, please.' },
        { s: 'R', t: 'No problem. When you come in for your induction, please remember to bring a photo with you, so that we can make your membership card.' },
        { s: 'C', t: 'Does it need to be a passport photo?' },
        { s: 'R', t: "Any recent photo is fine, as long as your face is clear. You don't need to bring any identification." },
        { s: 'C', t: 'OK.' },
        { s: 'R', t: 'And just for our records, could you tell me how you heard about us? Was it from our website?' },
        { s: 'C', t: 'Actually, it was a leaflet. Someone put one through my door. And my friend mentioned you too, of course.' },
        { s: 'R', t: "That's useful to know. Finally, payment. We can take payment by credit card each month, or by direct debit." },
        { s: 'C', t: "Direct debit is easier, I think. Then I don't have to remember." },
        { s: 'R', t: "Perfect. I'll email you the form now." },
        { s: 'N', t: 'That is the end of Part 1.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'gap', limit: 2, tag: 'form-completion',
        instructions: 'Complete the form below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
        content: `<h4 style="text-align:center">Riverside Leisure Centre — New Member Form</h4>
          <table><tr><td>Name</td><td>Mark [[1]]</td></tr>
          <tr><td>Address</td><td>Flat 3, 14 [[2]] Road</td></tr>
          <tr><td>Occupation</td><td>[[3]]</td></tr>
          <tr><td>Type of membership</td><td>[[4]]</td></tr>
          <tr><td>Monthly cost (first year)</td><td>£ [[5]]</td></tr>
          <tr><td>Class of interest</td><td>[[6]]</td></tr>
          <tr><td>Induction day</td><td>[[7]]</td></tr>
          <tr><td>Must bring</td><td>a [[8]] for the membership card</td></tr>
          <tr><td>Heard about centre from</td><td>a [[9]]</td></tr>
          <tr><td>Payment method</td><td>direct [[10]]</td></tr></table>`,
        items: [
          { n: 1, a: ['Pemberton'] }, { n: 2, a: ['Cedar'] }, { n: 3, a: ['architect', 'an architect'] }, { n: 4, a: ['off-peak', 'off peak', 'offpeak'] },
          { n: 5, a: ['32', 'thirty-two'] }, { n: 6, a: ['yoga'] }, { n: 7, a: ['Thursday', 'Thursdays'] }, { n: 8, a: ['photo', 'photograph'] },
          { n: 9, a: ['leaflet'] }, { n: 10, a: ['debit'] }
        ]
      }]
    },
    {
      title: 'Part 2', label: 'Part 2', intro: 'Questions 11–20',
      speakers: { N: { name: 'Narrator', g: 'm' }, L: { name: 'Laura (ranger)', g: 'f' } },
      audio: [
        { s: 'N', t: 'Part 2. You will hear a ranger talking to a group of visitors at a nature reserve. First, you have some time to look at questions 11 to 14.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen carefully and answer questions 11 to 14.' },
        { s: 'L', t: "Good morning everyone, and welcome to Hollin Park Nature Reserve. My name's Laura, and I'm one of the rangers here. Before you set off, I'll tell you a little about the reserve, and then I'll show you on the map where everything is." },
        { s: 'L', t: "Now, a lot of visitors assume that this land used to be farmland, and it's true that there were farms all around here in the past. There was even a plan in the nineteen sixties to build a small airfield on the site, but that never went ahead. In fact, until nineteen eighty-five this whole area was a gravel quarry, and the lake you can see was created when the quarry was flooded." },
        { s: 'L', t: "We're always trying to improve things for visitors. Many of you have asked us to stay open later in the evenings, but unfortunately we haven't been able to do that yet. We're also still in discussions with the council about a shuttle bus from the railway station. What we did manage this year is the launch of our free app, which includes an audio guide to all the main trails." },
        { s: 'L', t: "A few rules. Dogs are welcome, and as long as they're under control, they can be off the lead in the woodland. You're also free to leave the paths and explore the meadow. What we do ask is that you don't feed the ducks or any of the other birds. Bread in particular is very bad for them." },
        { s: 'L', t: "And for those of you planning to come back: children under five get in free. Not under sixteen, as some websites say. Parking is charged separately, at the machines in the car park. And if you buy your tickets online before your visit, they're two pounds cheaper than at the gate." },
        { s: 'N', t: 'Before you hear the rest of the talk, you have some time to look at questions 15 to 20.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen and answer questions 15 to 20.' },
        { s: 'L', t: "OK, let's look at the map. We're standing at the entrance, at the bottom of the map, and just in front of us is the visitor centre. The café is right next to the visitor centre, on the right-hand side as you look at it from here. It does excellent cakes." },
        { s: 'L', t: "On the other side of the visitor centre, on the left, between it and the car park, is the children's playground, which was rebuilt last spring." },
        { s: 'L', t: "If you follow the main path up from the visitor centre, you'll reach the lake. Bird-watchers should head for the bird hide. It's straight across the lake from the visitor centre, right on the northern shore. You'll get the best views of the herons from there." },
        { s: 'L', t: "If you'd like to go out on the water, the boat hire is on the eastern shore of the lake, between the water and the path that goes round it." },
        { s: 'L', t: "Now, in the middle of the meadow, on the west side of the lake, there's a wildflower area, so please don't walk through the flowers there. And to the east, on the far side of the path, there's a field we're turning into an orchard, but that's closed to the public at the moment." },
        { s: 'L', t: "Further up, in the top right-hand corner of the reserve, is the woodland. Hidden among the trees there, you'll find the butterfly garden. It's at its best in July." },
        { s: 'L', t: "And finally, the picnic area. Take the path to the left of the lake and keep going past the meadow until you reach the top left-hand corner of the reserve. There are tables there, and it's usually nice and quiet. Right, enjoy your visit!" },
        { s: 'N', t: 'That is the end of Part 2.' },
        { pause: 8 }
      ],
      groups: [
        {
          type: 'mcq', instructions: 'Choose the correct letter, <b>A, B or C</b>.', tag: 'mcq',
          items: [
            { n: 11, q: 'Before 1985, the site of the nature reserve was', opts: ['a farm.', 'a quarry.', 'an airfield.'], a: 'B' },
            { n: 12, q: 'What new service has been introduced this year?', opts: ['an app with an audio guide', 'longer opening hours', 'a shuttle bus from the station'], a: 'A' },
            { n: 13, q: 'Visitors are asked to', opts: ['keep dogs on a lead at all times.', 'stay on the marked paths.', 'avoid feeding the birds.'], a: 'C' },
            { n: 14, q: 'What does the speaker say about tickets?', opts: ['Children under sixteen do not pay.', 'They are cheaper if bought online.', 'The price includes parking.'], a: 'B' }
          ]
        },
        {
          type: 'match', tag: 'map', compact: false, showOptions: false,
          instructions: 'Label the map below. Choose the correct letter, <b>A–H</b>, next to Questions 15–20.',
          svg: `<svg viewBox="0 0 400 300" font-family="Arial" font-size="11" role="img" aria-label="Map of Hollin Park Nature Reserve">
            <rect x="2" y="2" width="396" height="296" fill="#eef6e8" stroke="#7a8b6b"/>
            <rect x="285" y="6" width="110" height="105" fill="#cfe3c3" stroke="#7a8b6b" stroke-dasharray="3 2"/>
            <text x="340" y="104" text-anchor="middle" fill="#3b5b2b" font-weight="700">Woodland</text>
            <g fill="#6b9a52"><circle cx="300" cy="25" r="6"/><circle cx="318" cy="40" r="6"/><circle cx="360" cy="20" r="6"/><circle cx="378" cy="45" r="6"/><circle cx="305" cy="80" r="6"/><circle cx="375" cy="80" r="6"/></g>
            <text x="70" y="185" text-anchor="middle" fill="#3b5b2b" font-style="italic">Meadow</text>
            <ellipse cx="200" cy="140" rx="112" ry="76" fill="none" stroke="#9c7b4f" stroke-width="3" stroke-dasharray="6 4"/>
            <ellipse cx="200" cy="140" rx="80" ry="45" fill="#a9d3ef" stroke="#4d8db8"/>
            <text x="200" y="144" text-anchor="middle" fill="#245a80" font-weight="700">Lake</text>
            <line x1="200" y1="216" x2="200" y2="236" stroke="#9c7b4f" stroke-width="3" stroke-dasharray="6 4"/>
            <rect x="168" y="236" width="64" height="30" fill="#fff" stroke="#333"/><text x="200" y="249" text-anchor="middle" font-size="9.5">Visitor</text><text x="200" y="260" text-anchor="middle" font-size="9.5">Centre</text>
            <rect x="14" y="240" width="72" height="46" fill="#ddd" stroke="#666"/><text x="50" y="267" text-anchor="middle">Car Park</text>
            <line x1="200" y1="266" x2="200" y2="292" stroke="#333" stroke-width="2"/><polygon points="194,284 206,284 200,276" fill="#333"/>
            <text x="200" y="296" text-anchor="middle" font-weight="700" font-size="9">ENTRANCE</text>
            <g font-weight="700" font-size="12" text-anchor="middle">
              <circle cx="75" cy="140" r="10" fill="#fff" stroke="#333"/><text x="75" y="144">A</text>
              <circle cx="200" cy="80" r="10" fill="#fff" stroke="#333"/><text x="200" y="84">B</text>
              <circle cx="338" cy="58" r="10" fill="#fff" stroke="#333"/><text x="338" y="62">C</text>
              <circle cx="350" cy="190" r="10" fill="#fff" stroke="#333"/><text x="350" y="194">D</text>
              <circle cx="40" cy="35" r="10" fill="#fff" stroke="#333"/><text x="40" y="39">E</text>
              <circle cx="258" cy="251" r="10" fill="#fff" stroke="#333"/><text x="258" y="255">F</text>
              <circle cx="128" cy="251" r="10" fill="#fff" stroke="#333"/><text x="128" y="255">G</text>
              <circle cx="296" cy="140" r="10" fill="#fff" stroke="#333"/><text x="296" y="144">H</text>
            </g>
          </svg>`,
          options: 'ABCDEFGH'.split('').map(k => ({ k, t: '' })),
          items: [
            { n: 15, q: 'Bird hide', a: 'B' }, { n: 16, q: 'Picnic area', a: 'E' }, { n: 17, q: "Children's playground", a: 'G' },
            { n: 18, q: 'Café', a: 'F' }, { n: 19, q: 'Butterfly garden', a: 'C' }, { n: 20, q: 'Boat hire', a: 'H' }
          ]
        }
      ]
    },
    {
      title: 'Part 3', label: 'Part 3', intro: 'Questions 21–30',
      speakers: { N: { name: 'Narrator', g: 'm' }, E: { name: 'Ellie', g: 'f' }, T: { name: 'Tom', g: 'm' } },
      audio: [
        { s: 'N', t: 'Part 3. You will hear two students, Ellie and Tom, discussing a research project about food waste. First, you have some time to look at questions 21 to 26.' },
        { pause: 25 },
        { s: 'N', t: 'Now listen carefully and answer questions 21 to 26.' },
        { s: 'T', t: "So, Ellie, we need to prepare the presentation for our food waste project. Shall we start by going over why we chose the topic? The tutor will probably ask." },
        { s: 'E', t: "Sure. Well, Dr Adams gave us that list of suggested topics, but to be honest none of them really appealed to me. The real reason was that I worked in the university canteen last summer, and I couldn't believe how much food got thrown away at the end of every day." },
        { s: 'T', t: "Right. And I remember we were worried at first because there isn't much existing research on universities specifically, which made it harder, not easier." },
        { s: 'E', t: 'Exactly. Then there was the method. We originally planned to hand out questionnaires, but the response rate in the pilot was terrible.' },
        { s: 'T', t: "Yes, only about one in ten came back. So in the end we decided to weigh the food left on students' plates when they returned their trays. That gave us much more reliable data. We did a few short interviews with kitchen staff as well, but those were really just background." },
        { s: 'E', t: "I still think our sample was a bit small. Six hundred plates doesn't sound like much." },
        { s: 'T', t: "Actually, for a project like this, six hundred is perfectly acceptable. What bothers me more is when we collected the data. It was all during the exam period, and students eat very differently then. They skip meals and grab snacks." },
        { s: 'E', t: "That's a fair point. We should mention it as a limitation. Now, how should we open the presentation? I thought we could show a photo of one of the full bins." },
        { s: 'T', t: "Hmm, everyone does that. Why don't we start with that figure we found, that almost forty percent of the food served was never eaten? That really makes people sit up." },
        { s: 'E', t: "OK, I agree. A photo might work later, but the number is more striking." },
        { s: 'T', t: "Then we need our recommendations. Composting came up a lot in the interviews." },
        { s: 'E', t: "But composting doesn't actually reduce waste, does it? It just deals with it afterwards. I'd leave that out. I think offering smaller portion sizes is the most obvious one." },
        { s: 'T', t: "Definitely. What about charging for extra bread? A lot of the bread was wasted." },
        { s: 'E', t: "Students would hate that, and the canteen manager said it would be too complicated. And reducing the number of dishes on the menu would just lead to complaints." },
        { s: 'T', t: "True. But labelling the portion sizes on the menu, so students know how much they're getting, seems sensible, and it's cheap." },
        { s: 'E', t: "Yes, let's recommend that and the smaller portions." },
        { s: 'N', t: 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen and answer questions 27 to 30.' },
        { s: 'T', t: "We also need to say something about our sources. What did you think of the government report?" },
        { s: 'E', t: "It was clearly written, but it was published in two thousand and nine. A lot has changed in catering since then, so I'm not sure how much weight we can give it." },
        { s: 'T', t: "Agreed. And the journal article by Lindqvist? I wondered whether it was relevant, because it's about hospital kitchens." },
        { s: 'E', t: "I think the findings do apply to us. The real problem is that it's full of statistical models I couldn't follow. It's far too technical for our audience." },
        { s: 'T', t: "Fair enough. Then there's the supermarket website." },
        { s: 'E', t: "Well, they make a lot of claims about how much they've reduced waste, but of course they want to look good. I wouldn't trust it without independent evidence." },
        { s: 'T', t: "And finally, the student union survey." },
        { s: 'E', t: "That was the best thing we found. It gave us really clear figures on how often students eat in the canteen. We should definitely use those numbers." },
        { s: 'N', t: 'That is the end of Part 3.' },
        { pause: 8 }
      ],
      groups: [
        {
          type: 'mcq', instructions: 'Choose the correct letter, <b>A, B or C</b>.', tag: 'mcq',
          items: [
            { n: 21, q: 'Why did the students choose food waste as their topic?', opts: ['Their tutor recommended it.', 'Ellie had seen the problem at work.', 'There was a lot of existing research.'], a: 'B' },
            { n: 22, q: 'What was their main method of collecting data?', opts: ['questionnaires', 'weighing leftover food', 'interviews with staff'], a: 'B' },
            { n: 23, q: 'What does Tom think is the main weakness of their data?', opts: ['The sample was too small.', 'Only one canteen was studied.', 'It was collected at an unusual time.'], a: 'C' },
            { n: 24, q: 'They agree to begin the presentation with', opts: ['a striking statistic.', 'a photograph.', 'a definition of food waste.'], a: 'A' }
          ]
        },
        {
          type: 'multi', nums: [25, 26], tag: 'multi-select',
          instructions: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
          q: 'Which TWO recommendations will the students make?',
          opts: ['offering smaller portions', 'charging for extra bread', 'introducing composting', 'showing portion sizes on the menu', 'reducing the number of dishes'], a: ['A', 'D']
        },
        {
          type: 'match', tag: 'matching', optionsTitle: 'Opinions',
          instructions: 'What is the students’ opinion of each source? Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–E</b>, next to Questions 27–30.',
          options: [{ k: 'A', t: 'too out of date' }, { k: 'B', t: 'too technical' }, { k: 'C', t: 'useful for statistics' }, { k: 'D', t: 'likely to be biased' }, { k: 'E', t: 'not relevant to universities' }],
          items: [{ n: 27, q: 'the government report', a: 'A' }, { n: 28, q: 'the journal article', a: 'B' }, { n: 29, q: 'the supermarket website', a: 'D' }, { n: 30, q: 'the student union survey', a: 'C' }]
        }
      ]
    },
    {
      title: 'Part 4', label: 'Part 4', intro: 'Questions 31–40',
      speakers: { N: { name: 'Narrator', g: 'm' }, P: { name: 'Lecturer', g: 'f' } },
      audio: [
        { s: 'N', t: 'Part 4. You will hear a lecture about the urban heat island effect. First, you have some time to look at questions 31 to 40.' },
        { pause: 30 },
        { s: 'N', t: 'Now listen carefully and answer questions 31 to 40.' },
        { s: 'P', t: "Good afternoon. Today I'm going to talk about a phenomenon that affects almost every large city in the world: the urban heat island. Put simply, an urban heat island is a city that is significantly warmer than the countryside that surrounds it. What surprises many people is that the difference is usually greatest not in the middle of the day, but at night, when cities release the heat they have absorbed during the day." },
        { s: 'P', t: "So what causes it? The first factor is the materials we build with. Dark surfaces such as roads and roofs absorb a great deal of solar energy. Materials such as asphalt and concrete are particularly good at storing heat and releasing it slowly." },
        { s: 'P', t: "The second factor is a lack of vegetation. In the countryside, plants cool the air through a process called evapotranspiration, which is essentially the evaporation of water from leaves. Cities have far fewer plants, so they lose this natural cooling." },
        { s: 'P', t: "Third, cities produce waste heat. Factories and air conditioners contribute, but in most cities the largest source of waste heat is vehicles. And finally, the shape of the city matters. Tall buildings close together trap heat and reduce the wind that would otherwise carry warm air away." },
        { s: 'P', t: "Now let's turn to the effects. The most obvious one is economic. When temperatures rise, people use more electricity for cooling, which increases costs and puts pressure on power supplies during heatwaves. There are also serious effects on health. Heat-related illnesses increase, and the group most at risk is the elderly, particularly those who live alone. Air quality is also affected, because higher temperatures speed up the chemical reactions that produce ground-level ozone, or what we commonly call smog." },
        { s: 'P', t: "So what can be done? One of the simplest solutions is the cool roof. Painting roofs white means they reflect sunlight instead of absorbing it, and this can reduce the temperature inside a building considerably. Green roofs, covered with plants, have a similar effect and also manage rainwater." },
        { s: 'P', t: "Finally, urban planners are paying more attention to the layout of streets, aligning them with the prevailing winds, and they are rediscovering an old idea: the use of water. Fountains, canals and ponds can lower the temperature of the surrounding area by several degrees, and they make public spaces more pleasant too." },
        { s: 'N', t: 'That is the end of Part 4. You now have two minutes to check your answers.' }
      ],
      groups: [{
        type: 'gap', limit: 1, tag: 'note-completion',
        instructions: 'Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.',
        content: `<h4 style="text-align:center">The Urban Heat Island Effect</h4>
          <p><b>Definition</b></p><ul><li>a city is warmer than the surrounding countryside — the difference is greatest at [[31]]</li></ul>
          <p><b>Causes</b></p><ul><li>materials such as asphalt and [[32]] store heat</li>
          <li>a lack of [[33]], which cools the air through evapotranspiration</li>
          <li>waste heat, mainly from [[34]]</li>
          <li>tall buildings trap heat and reduce [[35]]</li></ul>
          <p><b>Effects</b></p><ul><li>greater use of [[36]] for cooling</li>
          <li>heat-related illness, especially among the [[37]]</li>
          <li>poorer air quality: more ground-level ozone, or [[38]]</li></ul>
          <p><b>Solutions</b></p><ul><li>cool roofs painted [[39]]</li>
          <li>green roofs; streets aligned with prevailing winds</li>
          <li>features that use [[40]], e.g. fountains and canals</li></ul>`,
        items: [
          { n: 31, a: ['night'] }, { n: 32, a: ['concrete'] }, { n: 33, a: ['vegetation', 'plants'] }, { n: 34, a: ['vehicles'] }, { n: 35, a: ['wind'] },
          { n: 36, a: ['electricity'] }, { n: 37, a: ['elderly'] }, { n: 38, a: ['smog'] }, { n: 39, a: ['white'] }, { n: 40, a: ['water'] }
        ]
      }]
    }
  ]
};
