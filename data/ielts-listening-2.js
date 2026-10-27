/* IELTS Listening — Practice Test 2 (contenido original). */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['ielts-l2'] = {
  id: 'ielts-l2', exam: 'ielts', skill: 'listening', title: 'IELTS Listening — Practice Test 2',
  summary: 'Hall booking · Cycling festival · Sleep & memory project · Coral reef restoration',
  meta: ['4 partes', '40 preguntas', '~30 min', 'Audio una vez'], reviewTime: 120,
  parts: [
    {
      title: 'Part 1', label: 'Part 1', intro: 'Questions 1–10',
      speakers: { N: { name: 'Narrator', g: 'm' }, A: { name: 'Hall manager', g: 'm' }, S: { name: 'Sarah', g: 'f' } },
      audio: [
        { s: 'N', t: 'Part 1. You will hear a woman phoning a community centre to book a hall for a party. First, you have some time to look at questions 1 to 5.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen carefully and answer questions 1 to 5.' },
        { s: 'A', t: 'Good afternoon, Brookfield Community Centre. Peter speaking.' },
        { s: 'S', t: "Hello. I'd like to book a room for my mother's seventieth birthday party." },
        { s: 'A', t: 'Of course. Can I take your name first?' },
        { s: 'S', t: "Yes, it's Sarah Okafor. That's O, K, A, F, O, R." },
        { s: 'A', t: 'Thank you. And what date were you thinking of?' },
        { s: 'S', t: "We'd originally planned it for May, but my brother can't come then, so it will be Saturday the fourteenth of June." },
        { s: 'A', t: "Let me check. Yes, June the fourteenth is free. How many guests are you expecting?" },
        { s: 'S', t: "We've invited about eighty people, but realistically I think around sixty will come." },
        { s: 'A', t: "Then I'd suggest the Garden Room. The Main Hall holds two hundred, which would feel rather empty, and the Oak Room only takes forty." },
        { s: 'S', t: 'The Garden Room sounds lovely. How much does it cost?' },
        { s: 'A', t: "It's normally fifty-five pounds an hour, but for private family events at the weekend we charge forty-five pounds an hour." },
        { s: 'N', t: 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen and answer questions 6 to 10.' },
        { s: 'S', t: 'Is there a kitchen we can use?' },
        { s: 'A', t: "Yes, there's a fully equipped kitchen next door. Use of the kitchen is an extra twenty pounds for the evening, and that includes plates and glasses." },
        { s: 'S', t: 'Great. Is there a deposit?' },
        { s: 'A', t: "There's a deposit of one hundred and fifty pounds. You'll get it back in full as long as the hall is left clean. You don't need to worry about stacking the chairs; our caretaker does that." },
        { s: 'S', t: 'And can we have music? We were thinking of a small band.' },
        { s: 'A', t: "Music is fine, but because of the neighbours, it has to finish by eleven p.m. The building itself must be empty by half past eleven." },
        { s: 'S', t: "That's fine. What about parking? Some of the guests are quite elderly." },
        { s: 'A', t: "Our own car park is very small, but you can use the large car park behind the library, which is free after six p.m. It's only a two-minute walk." },
        { s: 'S', t: 'Perfect. And how do I pay?' },
        { s: 'A', t: "We don't take cards over the phone, I'm afraid. The easiest way is by bank transfer. I'll email you our details." },
        { s: 'S', t: 'Wonderful. Thank you so much.' },
        { s: 'N', t: 'That is the end of Part 1.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'gap', limit: 2, tag: 'form-completion',
        instructions: 'Complete the notes below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
        content: `<h4 style="text-align:center">Brookfield Community Centre — Booking Notes</h4>
          <table><tr><td>Customer</td><td>Sarah [[1]]</td></tr>
          <tr><td>Date</td><td>Saturday 14 [[2]]</td></tr>
          <tr><td>Expected guests</td><td>about [[3]]</td></tr>
          <tr><td>Room</td><td>the [[4]] Room</td></tr>
          <tr><td>Cost</td><td>£ [[5]] per hour</td></tr>
          <tr><td>Kitchen</td><td>extra £ [[6]] (plates and glasses included)</td></tr>
          <tr><td>Deposit</td><td>£150 — returned if the hall is left [[7]]</td></tr>
          <tr><td>Music</td><td>must finish by [[8]] p.m.</td></tr>
          <tr><td>Parking</td><td>car park behind the [[9]]</td></tr>
          <tr><td>Payment</td><td>by bank [[10]]</td></tr></table>`,
        items: [
          { n: 1, a: ['Okafor'] }, { n: 2, a: ['June'] }, { n: 3, a: ['60', 'sixty'] }, { n: 4, a: ['Garden'] }, { n: 5, a: ['45', 'forty-five'] },
          { n: 6, a: ['20', 'twenty'] }, { n: 7, a: ['clean'] }, { n: 8, a: ['11', 'eleven', '11pm', '11 pm'] }, { n: 9, a: ['library'] }, { n: 10, a: ['transfer'] }
        ]
      }]
    },
    {
      title: 'Part 2', label: 'Part 2', intro: 'Questions 11–20',
      speakers: { N: { name: 'Narrator', g: 'm' }, R: { name: 'Radio presenter', g: 'm' } },
      audio: [
        { s: 'N', t: 'Part 2. You will hear a local radio presenter talking about a cycling festival. First, you have some time to look at questions 11 to 15.' },
        { pause: 25 },
        { s: 'N', t: 'Now listen carefully and answer questions 11 to 15.' },
        { s: 'R', t: "And now some news for anyone who enjoys life on two wheels. The Harbourside Cycling Festival returns next weekend, and this year it's bigger than ever. The festival began ten years ago as a single charity ride organised by a group of nurses from the city hospital, and although it has grown enormously, raising money for the hospital's children's ward is still its main aim." },
        { s: 'R', t: "The biggest change this year is the location. In previous years everything happened in Victoria Park, but the park is being redeveloped, so the festival has moved to the old docks along the river. Organisers say the new site has more space and better access by train." },
        { s: 'R', t: "Entry to the festival site itself is free for everyone. You only pay if you take part in one of the organised rides, and even then, children under twelve ride free with a paying adult." },
        { s: 'R', t: "If you don't have a bike, don't worry. You can't hire one at the site this year, I'm afraid, because of a problem with insurance, but the city's bike-share scheme will be offering free thirty-minute rides all weekend." },
        { s: 'R', t: "Finally, the organisers have asked me to stress one thing: helmets are compulsory on all organised rides, including for adults. Lights are recommended for the evening events, but they're not required." },
        { s: 'N', t: 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen and answer questions 16 to 20.' },
        { s: 'R', t: "So, let's run through the programme. The festival opens on Friday evening with the Light Ride, a gentle ten-kilometre ride through the city centre on bikes decorated with lights. It's very popular with families." },
        { s: 'R', t: "On Saturday morning, serious cyclists can take on the Coastal Challenge, a hundred-kilometre route along the coast. You'll need a reasonable level of fitness for that one. Saturday afternoon is when the bike repair workshops run. Bring your own bike and a mechanic will show you how to fix a puncture and adjust your brakes." },
        { s: 'R', t: "The stunt show was originally planned for Saturday evening, but it has now been moved to Sunday afternoon, so that it doesn't clash with the football match. And on Sunday morning, there's the Kids' Balance Bike Race for children aged two to five. Do get there early, as places are limited." },
        { s: 'R', t: "The festival closes on Sunday evening with the awards ceremony, where the fastest riders and the biggest fundraisers will receive their prizes." },
        { s: 'N', t: 'That is the end of Part 2.' },
        { pause: 8 }
      ],
      groups: [
        {
          type: 'mcq', tag: 'mcq', instructions: 'Choose the correct letter, <b>A, B or C</b>.',
          items: [
            { n: 11, q: 'The festival was first organised by', opts: ['a group of hospital staff.', 'the city council.', 'a local cycling club.'], a: 'A' },
            { n: 12, q: 'What is different about this year\'s festival?', opts: ['It lasts longer.', 'It takes place in a new location.', 'It supports a different charity.'], a: 'B' },
            { n: 13, q: 'Who has to pay?', opts: ['all visitors to the festival site', 'children under twelve', 'adults taking part in organised rides'], a: 'C' },
            { n: 14, q: 'Visitors without a bike can', opts: ['use the bike-share scheme for free.', 'hire a bike at the festival site.', 'borrow a bike from the organisers.'], a: 'A' },
            { n: 15, q: 'On organised rides, all riders must', opts: ['have lights on their bikes.', 'wear a helmet.', 'register in advance.'], a: 'B' }
          ]
        },
        {
          type: 'match', tag: 'matching', optionsTitle: 'Times',
          instructions: 'When does each event take place? Choose the correct letter, <b>A–E</b>, next to Questions 16–20.',
          options: [{ k: 'A', t: 'Friday evening' }, { k: 'B', t: 'Saturday morning' }, { k: 'C', t: 'Saturday afternoon' }, { k: 'D', t: 'Sunday morning' }, { k: 'E', t: 'Sunday afternoon' }],
          items: [
            { n: 16, q: 'Light Ride', a: 'A' }, { n: 17, q: 'Coastal Challenge', a: 'B' }, { n: 18, q: 'repair workshops', a: 'C' },
            { n: 19, q: 'stunt show', a: 'E' }, { n: 20, q: 'Balance Bike Race', a: 'D' }
          ]
        }
      ]
    },
    {
      title: 'Part 3', label: 'Part 3', intro: 'Questions 21–30',
      speakers: { N: { name: 'Narrator', g: 'm' }, M: { name: 'Maya', g: 'f' }, J: { name: 'Josh', g: 'm' } },
      audio: [
        { s: 'N', t: 'Part 3. You will hear two psychology students, Maya and Josh, discussing their research project on sleep and memory. First, you have some time to look at questions 21 to 25.' },
        { pause: 25 },
        { s: 'N', t: 'Now listen carefully and answer questions 21 to 25.' },
        { s: 'J', t: "So, Maya, we need to finalise the design of our sleep study before we meet Professor Grant on Friday." },
        { s: 'M', t: "Right. I've been thinking about the research question. At first we wanted to look at whether sleep improves all kinds of memory, but that's far too broad." },
        { s: 'J', t: "Agreed. I think we should focus on vocabulary learning, since that's something every student can relate to." },
        { s: 'M', t: "Yes, learning words in a foreign language. Participants learn a list of words in the evening and we test them the next morning." },
        { s: 'J', t: "And how many participants do we need? I was hoping for at least fifty." },
        { s: 'M', t: "I'd love that, but realistically we'll be lucky to get thirty in the time we have. Professor Grant said thirty would be acceptable for a pilot study." },
        { s: 'J', t: "OK, thirty it is. Now, how do we measure sleep? I suggested using sleep diaries." },
        { s: 'M', t: "The problem with diaries is that people aren't very accurate about how long they actually slept. The department has some wristbands that track movement. They're not as precise as laboratory equipment, but they're much better than diaries." },
        { s: 'J', t: "Good idea. We should check that they're available in March, though." },
        { s: 'M', t: "What worries me most is caffeine. If some participants drink coffee late in the evening, it'll affect their sleep and our results." },
        { s: 'J', t: "We can't control everything they do at home, but we can ask them not to have caffeine after two p.m. on the study day, and record whether they followed the instruction." },
        { s: 'M', t: "Fine. And for the comparison group, I think they should learn the words in the morning and be tested in the evening, so they're awake the whole time." },
        { s: 'J', t: "That's the standard design. Let's go with it." },
        { s: 'N', t: 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.' },
        { pause: 20 },
        { s: 'N', t: 'Now listen and answer questions 26 to 30.' },
        { s: 'J', t: "Let's go through the procedure step by step, so we can write it up." },
        { s: 'M', t: "OK. First, participants sign a consent form. Then they complete a short questionnaire about their usual sleep habits." },
        { s: 'J', t: "Next, they're given the wristband and shown how to wear it." },
        { s: 'M', t: "Then the learning session. They study forty word pairs on a computer for twenty minutes." },
        { s: 'J', t: "And immediately after that, we give them a short test, so we know how much they learned before sleeping. That's our baseline." },
        { s: 'M', t: "Then they go home and sleep as normal. The next morning they come back, return the wristband, and take the final test." },
        { s: 'J', t: "And finally, we explain the purpose of the study. Professor Grant said that's essential, since we won't tell them everything at the start." },
        { s: 'N', t: 'That is the end of Part 3.' },
        { pause: 8 }
      ],
      groups: [
        {
          type: 'mcq', tag: 'mcq', instructions: 'Choose the correct letter, <b>A, B or C</b>.',
          items: [
            { n: 21, q: 'The students decide to focus their research on', opts: ['all types of memory.', 'learning foreign-language vocabulary.', 'memory for faces.'], a: 'B' },
            { n: 22, q: 'How many participants will they recruit?', opts: ['twenty', 'thirty', 'fifty'], a: 'B' },
            { n: 23, q: 'Why does Maya prefer wristbands to sleep diaries?', opts: ['They are more accurate.', 'They are cheaper.', 'They are as precise as laboratory equipment.'], a: 'A' },
            { n: 24, q: 'How will they deal with the problem of caffeine?', opts: ['by excluding coffee drinkers', 'by measuring caffeine levels', 'by asking participants to avoid it after a certain time'], a: 'C' },
            { n: 25, q: 'The comparison group will', opts: ['learn the words in the morning.', 'sleep in a laboratory.', 'take no tests.'], a: 'A' }
          ]
        },
        {
          type: 'gap', limit: 1, tag: 'note-completion',
          instructions: 'Complete the flow chart below. Write <b>ONE WORD ONLY</b> for each answer.',
          content: `<h4 style="text-align:center">Study procedure</h4>
            <p>Participants sign a [[26]] form</p><p style="text-align:center">↓</p>
            <p>They complete a [[27]] about usual sleep habits</p><p style="text-align:center">↓</p>
            <p>They receive a wristband</p><p style="text-align:center">↓</p>
            <p>They study 40 word pairs on a [[28]]</p><p style="text-align:center">↓</p>
            <p>A short test gives a [[29]] score</p><p style="text-align:center">↓</p>
            <p>Next morning: final test</p><p style="text-align:center">↓</p>
            <p>The [[30]] of the study is explained</p>`,
          items: [{ n: 26, a: ['consent'] }, { n: 27, a: ['questionnaire'] }, { n: 28, a: ['computer'] }, { n: 29, a: ['baseline'] }, { n: 30, a: ['purpose'] }]
        }
      ]
    },
    {
      title: 'Part 4', label: 'Part 4', intro: 'Questions 31–40',
      speakers: { N: { name: 'Narrator', g: 'm' }, P: { name: 'Lecturer', g: 'm' } },
      audio: [
        { s: 'N', t: 'Part 4. You will hear a lecture about coral reef restoration. First, you have some time to look at questions 31 to 40.' },
        { pause: 30 },
        { s: 'N', t: 'Now listen carefully and answer questions 31 to 40.' },
        { s: 'P', t: "Good morning. Today we're looking at coral reefs and the efforts being made to restore them. Although reefs cover less than one percent of the ocean floor, they support around a quarter of all marine species, which is why they are often compared to rainforests." },
        { s: 'P', t: "Corals are animals, but they depend on tiny algae that live inside their tissue. The algae provide the coral with food, and also give it its colour. When the water becomes too warm, the coral expels the algae and turns white. This is known as bleaching. If temperatures return to normal quickly, the coral can recover, but prolonged bleaching usually kills it." },
        { s: 'P', t: "Rising sea temperatures are the main threat, but reefs also suffer from pollution, particularly from fertilisers that wash off farmland, and from overfishing, which removes the fish that keep algae under control." },
        { s: 'P', t: "So what can be done? One of the most common restoration methods is coral gardening. Small fragments of healthy coral are grown in underwater nurseries, often hanging from structures that look like trees, until they are large enough to be transplanted onto the damaged reef." },
        { s: 'P', t: "A second approach is to build artificial structures that give young corals a surface to grow on. These have been made from many materials, but one of the most promising is a special type of concrete designed to resemble natural rock." },
        { s: 'P', t: "More recently, scientists have been experimenting with selective breeding, choosing corals that survived previous heatwaves and breeding them to produce more heat-tolerant offspring. Some researchers are even using sound: playing recordings of healthy reefs through underwater speakers appears to attract young fish back to damaged areas." },
        { s: 'P', t: "However, restoration has limitations. The main one is scale. Even the largest projects cover only a few hectares, while reefs are being lost over thousands of square kilometres. It's also expensive. That's why most scientists agree that restoration can only buy time. The long-term survival of reefs depends on reducing carbon emissions." },
        { s: 'N', t: 'That is the end of Part 4. You now have two minutes to check your answers.' }
      ],
      groups: [{
        type: 'gap', limit: 1, tag: 'note-completion',
        instructions: 'Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.',
        content: `<h4 style="text-align:center">Coral Reef Restoration</h4>
          <p><b>Background</b></p><ul><li>reefs support about a quarter of marine species — often compared to [[31]]</li>
          <li>algae living in coral provide food and [[32]]</li>
          <li>warm water causes coral to turn white: this is called [[33]]</li></ul>
          <p><b>Threats</b></p><ul><li>rising temperatures</li><li>pollution, especially [[34]] from farmland</li><li>[[35]], which removes fish that control algae</li></ul>
          <p><b>Restoration methods</b></p><ul><li>coral gardening: fragments grown in underwater [[36]]</li>
          <li>artificial structures, e.g. made of special [[37]]</li>
          <li>selective [[38]] of heat-tolerant corals</li>
          <li>using [[39]] to attract young fish</li></ul>
          <p><b>Limitations</b></p><ul><li>projects are too small in [[40]]; also expensive</li><li>reducing carbon emissions is essential</li></ul>`,
        items: [
          { n: 31, a: ['rainforests', 'rainforest'] }, { n: 32, a: ['colour', 'color'] }, { n: 33, a: ['bleaching'] }, { n: 34, a: ['fertilisers', 'fertilizers', 'fertiliser', 'fertilizer'] },
          { n: 35, a: ['overfishing'] }, { n: 36, a: ['nurseries'] }, { n: 37, a: ['concrete'] }, { n: 38, a: ['breeding'] }, { n: 39, a: ['sound', 'recordings'] }, { n: 40, a: ['scale'] }
        ]
      }]
    }
  ]
};
