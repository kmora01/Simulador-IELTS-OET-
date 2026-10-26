/* OET Listening — Practice Test 1 (contenido original). Partes A, B y C, 42 preguntas. */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['oet-l1'] = {
  id: 'oet-l1', exam: 'oet', skill: 'listening', title: 'OET Listening — Practice Test 1',
  summary: 'Headache consultation · Asthma review · 6 workplace extracts · Night shifts & falls prevention',
  meta: ['Partes A, B, C', '42 preguntas', '~40 min', 'Audio una vez'], reviewTime: 60,
  parts: [
    {
      title: 'Part A — Extract 1', label: 'A1', intro: 'Questions 1–12 · Consultation extracts',
      speakers: { N: { name: 'Narrator', g: 'm' }, D: { name: 'GP', g: 'm' }, P: { name: 'Mrs Dunn', g: 'f' } },
      audio: [
        { s: 'N', t: 'OET Listening practice test. Part A. In this part of the test, you will hear two different extracts. In each extract, a health professional is talking to a patient. For questions 1 to 24, complete the notes with information you hear. Now look at the notes for extract one.' },
        { pause: 30 },
        { s: 'N', t: 'Extract one. Questions 1 to 12. You hear a GP talking to a patient called Rachel Dunn. For questions 1 to 12, complete the notes with a word or short phrase. You now have thirty seconds to look at the notes.' },
        { pause: 20 },
        { s: 'D', t: 'Hello Mrs Dunn, come in and have a seat. What can I do for you today?' },
        { s: 'P', t: "Hello, doctor. It's these headaches. I've been getting them for about two months now and they just don't seem to go away." },
        { s: 'D', t: "I'm sorry to hear that. Can you describe the pain for me?" },
        { s: 'P', t: "It's a throbbing pain, like a pulse. It's not sharp exactly. It's mainly here, behind my right eye, although sometimes it spreads across my forehead." },
        { s: 'D', t: 'And is there any particular time of day when it is worse?' },
        { s: 'P', t: "Definitely the mornings. I often wake up with it. By the evening it's usually eased off a bit." },
        { s: 'D', t: 'Have you noticed any other symptoms when you have a headache? For example, any problems with your vision?' },
        { s: 'P', t: "No, my vision's fine. But bright light really bothers me. I have to close the curtains. And sometimes I feel a bit sick, you know, nauseous, but I've never actually vomited." },
        { s: 'D', t: "OK. Let's think about possible triggers. Has anything changed in your life recently?" },
        { s: 'P', t: "Well, I started a new job in the summer. It's an office job, and I'm in front of a computer screen for most of the day, often nine or ten hours." },
        { s: 'D', t: 'And how about caffeine? How much tea or coffee do you drink?' },
        { s: 'P', t: "I don't really drink tea, but I'd say about five cups of coffee a day. More on busy days." },
        { s: 'D', t: 'And how are you sleeping?' },
        { s: 'P', t: "Not great, to be honest. I go to bed late and get up early for work, so I'm probably getting about five hours a night." },
        { s: 'D', t: 'Have you been taking anything for the pain?' },
        { s: 'P', t: "I tried paracetamol, but it didn't do much, so now I take ibuprofen most days." },
        { s: 'D', t: 'Does anyone in your family suffer from headaches?' },
        { s: 'P', t: 'My mother had migraines for years. My father never had any problems though.' },
        { s: 'D', t: "Right. I've checked your blood pressure and it's normal, which is reassuring. What I'd like you to do is keep a headache diary for the next four weeks. Write down when each headache starts, how bad it is, and what you've eaten and drunk. That will help us to see if there's a pattern." },
        { s: 'N', t: 'That is the end of extract one.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'gap', tag: 'oet-a-notes', limit: 3,
        instructions: 'Complete the notes with a word or short phrase.',
        content: `<h4>Patient: Rachel Dunn</h4>
          <p><b>Presenting complaint</b></p><ul>
          <li>headaches for approximately [[1]]</li>
          <li>pain described as [[2]]</li>
          <li>located mainly behind the [[3]]</li>
          <li>worse in the [[4]]</li></ul>
          <p><b>Associated symptoms</b></p><ul>
          <li>sensitivity to [[5]]</li>
          <li>occasional [[6]] (no vomiting); no visual disturbance</li></ul>
          <p><b>Possible triggers</b></p><ul>
          <li>new office job: 9–10 hours a day at a [[7]]</li>
          <li>drinks about five cups of [[8]] daily</li>
          <li>sleeps approximately [[9]] per night</li></ul>
          <p><b>Medication</b></p><ul><li>paracetamol ineffective; now takes [[10]] most days</li></ul>
          <p><b>Family history</b></p><ul><li>mother had [[11]]</li></ul>
          <p><b>Plan</b></p><ul><li>BP normal</li><li>keep a [[12]] for four weeks</li></ul>`,
        items: [
          { n: 1, a: ['two months', '2 months'] }, { n: 2, a: ['throbbing'] }, { n: 3, a: ['right eye'] }, { n: 4, a: ['mornings', 'morning'] },
          { n: 5, a: ['light', 'bright light'] }, { n: 6, a: ['nausea', 'nauseous', 'feeling sick'] }, { n: 7, a: ['computer screen', 'computer', 'screen'] },
          { n: 8, a: ['coffee'] }, { n: 9, a: ['five hours', '5 hours'] }, { n: 10, a: ['ibuprofen'] }, { n: 11, a: ['migraines', 'migraine'] },
          { n: 12, a: ['headache diary', 'diary'] }
        ]
      }]
    },
    {
      title: 'Part A — Extract 2', label: 'A2', intro: 'Questions 13–24 · Consultation extracts',
      speakers: { N: { name: 'Narrator', g: 'm' }, R: { name: 'Respiratory nurse', g: 'f' }, P: { name: 'Mr Osei', g: 'm' } },
      audio: [
        { s: 'N', t: 'Extract two. Questions 13 to 24. You hear a respiratory nurse talking to a patient called Daniel Osei. For questions 13 to 24, complete the notes with a word or short phrase. You now have thirty seconds to look at the notes.' },
        { pause: 25 },
        { s: 'R', t: "Hello Mr Osei, I'm Clare, one of the respiratory nurses. Your GP has asked me to review your asthma. Can you tell me a bit about it first? When were you diagnosed?" },
        { s: 'P', t: "I was twelve, I think. I had a bad chest infection, and afterwards they told me it was asthma. It was fine for years, but lately it's been getting worse." },
        { s: 'R', t: 'And what do you do for a living?' },
        { s: 'P', t: "I'm a baker. I've got my own small bakery, so I'm there from four in the morning." },
        { s: 'R', t: "OK, that's important, because flour dust can be a trigger. Tell me about your symptoms at the moment." },
        { s: 'P', t: "Well, I get breathless when I'm climbing stairs. Our flat is on the third floor, and I have to stop halfway. And I often wake up at night coughing. My wife says it keeps her awake too." },
        { s: 'R', t: 'Is it worse at any particular time of year?' },
        { s: 'P', t: "Winter is the worst. In summer I'm usually much better." },
        { s: 'R', t: 'Apart from the flour, have you noticed anything else that sets it off?' },
        { s: 'P', t: "Cold air, definitely. When I walk to the bakery in the early morning, I start wheezing straight away. Oh, and we got a cat about six months ago. My daughter really wanted one. I'm not sure if that's related." },
        { s: 'R', t: "It could well be. We can arrange allergy testing. Now, your inhalers. How often are you using your blue reliever?" },
        { s: 'P', t: 'Probably four times a week. Sometimes more.' },
        { s: 'R', t: 'And the brown preventer inhaler, are you taking it twice a day as prescribed?' },
        { s: 'P', t: "I always take it in the morning, but I'm afraid I often forget the evening dose. By the time I get home I'm exhausted." },
        { s: 'R', t: "That's quite common. Could you show me how you use the inhaler? ... OK, you're pressing it at the right time, but you're breathing out straight away. You need to hold your breath for about ten seconds after you inhale, so the medicine can reach your lungs." },
        { s: 'P', t: "Oh, I didn't know that." },
        { s: 'R', t: 'Do you smoke at all?' },
        { s: 'P', t: 'I used to, but I stopped three years ago.' },
        { s: 'R', t: "That's great. And do you do any exercise?" },
        { s: 'P', t: "I play football with some friends at the weekends, though I can't run for long anymore." },
        { s: 'N', t: 'That is the end of Part A.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'gap', tag: 'oet-a-notes', limit: 3,
        instructions: 'Complete the notes with a word or short phrase.',
        content: `<h4>Patient: Daniel Osei</h4>
          <p><b>Background</b></p><ul>
          <li>diagnosed with asthma at age [[13]] after a chest infection</li>
          <li>occupation: [[14]] (exposure to flour dust)</li></ul>
          <p><b>Current symptoms</b></p><ul>
          <li>breathless when [[15]] stairs</li>
          <li>wakes at night [[16]]</li>
          <li>symptoms worse in [[17]]</li></ul>
          <p><b>Triggers</b></p><ul><li>flour dust; [[18]]</li><li>recently acquired a [[19]] — allergy testing to be arranged</li></ul>
          <p><b>Medication</b></p><ul>
          <li>reliever inhaler used [[20]] times a week</li>
          <li>preventer: often misses the [[21]] dose</li>
          <li>technique: needs to [[22]] for about 10 seconds after inhaling</li></ul>
          <p><b>Lifestyle</b></p><ul><li>ex-smoker: stopped [[23]] ago</li><li>plays [[24]] at weekends</li></ul>`,
        items: [
          { n: 13, a: ['twelve', '12'] }, { n: 14, a: ['baker'] }, { n: 15, a: ['climbing'] }, { n: 16, a: ['coughing', 'with a cough', 'cough'] },
          { n: 17, a: ['winter'] }, { n: 18, a: ['cold air'] }, { n: 19, a: ['cat'] }, { n: 20, a: ['four', '4'] }, { n: 21, a: ['evening'] },
          { n: 22, a: ['hold his breath', 'hold breath', 'hold your breath'] }, { n: 23, a: ['three years', '3 years'] }, { n: 24, a: ['football'] }
        ]
      }]
    },
    {
      title: 'Part B — Workplace extracts', label: 'B', intro: 'Questions 25–30 · Short extracts from the healthcare workplace',
      speakers: { N: { name: 'Narrator', g: 'm' }, A: { name: 'Nurse', g: 'f' }, B: { name: 'Pharmacist', g: 'm' }, C: { name: 'Ward manager', g: 'f' }, D: { name: 'Consultant', g: 'm' }, E: { name: 'Physiotherapist', g: 'f' }, F: { name: 'Nurse', g: 'm' } },
      audio: [
        { s: 'N', t: 'Part B. In this part of the test, you will hear six different extracts. In each extract, you will hear people talking in a different healthcare setting. For questions 25 to 30, choose the answer, A, B or C, which fits best according to what you hear. You will have time to look at each question before you hear the extract.' },
        { s: 'N', t: 'Question 25. You hear a nurse giving a handover about a patient. Now read the question.' },
        { pause: 12 },
        { s: 'A', t: "Mr Lee in bed four is day two after his hip replacement. He had a bit of a rough night. His pain was about seven out of ten until we gave him oral morphine at three a.m., and after that he settled. His dressing was changed this morning. It's clean and dry, so there's no need to touch it until tomorrow. The main thing today is that physio want him up and walking to the bathroom with the frame, so please do encourage him. He's a bit reluctant." },
        { s: 'N', t: 'Question 26. You hear a pharmacist talking to a nurse about a patient\'s medication. Now read the question.' },
        { pause: 12 },
        { s: 'B', t: "Hi, it's Tom from pharmacy. I'm calling about Mrs Grant on your ward. I see she's on simvastatin, and the team has just prescribed clarithromycin for her chest infection. Those two together can significantly increase the risk of muscle damage, so we'd recommend holding the simvastatin while she's on the antibiotic. Could you let the doctor know? I've added a note to the chart as well." },
        { s: 'N', t: 'Question 27. You hear a ward manager talking to her staff at the start of a shift. Now read the question.' },
        { pause: 12 },
        { s: 'C', t: "Morning everyone. Just a quick one before we start. The infection control team will be carrying out their hand hygiene audit at some point next week. They won't tell us which day. Nothing has changed in the policy, but please remember the basics: bare below the elbows, no watches, and use the gel every time you enter and leave a bay. Our results last time were good, so let's keep it that way." },
        { s: 'N', t: 'Question 28. You hear a consultant giving feedback to a medical student. Now read the question.' },
        { pause: 12 },
        { s: 'D', t: "Well done. Your examination was thorough, and you took a very well organised history. You summarised it nicely at the end, too. Where you could improve is when you explained the blood results. You used terms like eGFR and creatinine, and I could see from her face that the patient had no idea what you meant. Try to put it in plain language: something like, the test shows your kidneys aren't working quite as well as they should." },
        { s: 'N', t: 'Question 29. You hear a physiotherapist talking on the phone to a patient\'s daughter. Now read the question.' },
        { pause: 12 },
        { s: 'E', t: "Hello, is that Mrs Ward? It's Sarah, the physiotherapist looking after your father. He's doing really well with his exercises, and we're hoping he can go home next week. Before he's discharged, though, we'd like to come and have a look at the house with an occupational therapist, to check the stairs and the bathroom and see whether he needs any rails or other equipment. Would Thursday morning suit you?" },
        { s: 'N', t: 'Question 30. You hear a nurse reporting an incident to a senior colleague. Now read the question.' },
        { pause: 12 },
        { s: 'F', t: "I need to let you know about something that happened about an hour ago. I found Mrs Patel on the floor beside her bed. She says she tried to get up to go to the toilet without calling for help. I've checked her over and there are no obvious injuries, and her observations are normal. The doctor's on the way to review her. I've checked her medication chart too, and there's nothing there that would have made her drowsy. I'll complete the incident form before the end of my shift." },
        { s: 'N', t: 'That is the end of Part B.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'mcq', tag: 'oet-b-gist', instructions: 'For questions 25–30, choose the answer (<b>A, B or C</b>) which fits best according to what you hear.',
        items: [
          { n: 25, q: 'What does the nurse say about the patient?', opts: ['His dressing needs to be changed again today.', 'His pain was well controlled throughout the night.', 'He should be encouraged to start walking.'], a: 'C' },
          { n: 26, q: 'Why is the pharmacist calling?', opts: ['to recommend changing the time of a dose', 'to warn about a drug interaction', 'to explain a new dose of an antibiotic'], a: 'B' },
          { n: 27, q: 'The ward manager is talking to staff in order to', opts: ['announce a change to the hand hygiene policy.', 'remind them about an upcoming audit.', 'ask for volunteers for infection control training.'], a: 'B' },
          { n: 28, q: 'What does the consultant think the student should improve?', opts: ['summarising the patient\'s history', 'explaining test results to patients', 'his examination technique'], a: 'B' },
          { n: 29, q: 'The physiotherapist is phoning to arrange', opts: ['a visit to assess the patient\'s home.', 'a change to the patient\'s exercise programme.', 'the delivery of some equipment.'], a: 'A' },
          { n: 30, q: 'What is the nurse reporting?', opts: ['A patient was given the wrong medication.', 'A patient fell while trying to get out of bed.', 'A patient\'s observations have become abnormal.'], a: 'B' }
        ]
      }]
    },
    {
      title: 'Part C — Extract 1', label: 'C1', intro: 'Questions 31–36 · Interview',
      speakers: { N: { name: 'Narrator', g: 'm' }, I: { name: 'Interviewer', g: 'm' }, H: { name: 'Dr Hannah Clarke', g: 'f' } },
      audio: [
        { s: 'N', t: 'Part C. In this part of the test, you will hear two different extracts. In each extract, you will hear health professionals talking about aspects of their work. For questions 31 to 42, choose the answer, A, B or C, which fits best according to what you hear.' },
        { s: 'N', t: 'Extract one. You hear an interview with Dr Hannah Clarke, a researcher who studies the effects of shift work on healthcare staff. You now have ninety seconds to read questions 31 to 36.' },
        { pause: 45 },
        { s: 'I', t: 'Dr Clarke, thank you for joining us. How did you first become interested in shift work?' },
        { s: 'H', t: "People often assume it was a big research question that drew me in, but actually it was personal. As a junior doctor, I worked a run of seven night shifts, and on the last one I nearly gave a patient the wrong dose of a drug. A colleague spotted it. Nothing happened, but it frightened me, and I started reading about why tired people make mistakes." },
        { s: 'I', t: 'And what is the main problem for people who work at night? Is it simply that they don\'t get enough sleep?' },
        { s: 'H', t: "That's part of it, of course. Many night workers sleep two or three hours less than they need. But I'd argue the bigger issue is that they're working against their body clock. Our internal clock tells us to be alert during the day and to sleep at night, and it doesn't adjust quickly. So even someone who sleeps eight hours during the day may still be at their least alert at four in the morning. Caffeine helps, but it can't override that." },
        { s: 'I', t: 'What about napping during a night shift? Some hospitals discourage it.' },
        { s: 'H', t: "The evidence is actually quite positive. A short nap, ideally around twenty minutes, can improve alertness for several hours. The key is to keep it short. If you sleep for more than about half an hour, you risk waking from deep sleep and feeling groggy, which can be dangerous if you're called to an emergency straight away." },
        { s: 'I', t: 'Many hospitals rotate staff between day and night shifts. Is there a better or worse way to do this?' },
        { s: 'H', t: "Yes. Rotas that move forward, so mornings, then afternoons, then nights, are much easier for the body than those that move backwards. It's similar to the difference between flying west and flying east. The number of consecutive nights matters too. Personally, I'd like to see a limit of about four in a row, although I accept that's difficult for some services." },
        { s: 'I', t: 'Is there a particular moment when staff are most at risk?' },
        { s: 'H', t: "One that's often overlooked is the drive home after the final night shift. Studies show that this is when accidents are most likely. People feel relieved that the shift is over, and that's exactly when concentration drops. I always tell staff: if you feel drowsy, don't drive. Take a nap first or use public transport." },
        { s: 'I', t: 'Finally, what should hospitals be doing?' },
        { s: 'H', t: "Training is useful, but on its own it isn't enough. What makes the biggest difference is having a quiet, comfortable place where staff can actually rest during their breaks. In many hospitals, there's nowhere to go except the corridor or the car. Providing proper rest facilities is a relatively cheap change with a big impact on safety." },
        { s: 'N', t: 'That is the end of extract one.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'mcq', tag: 'oet-c-detail', instructions: 'Choose the answer (<b>A, B or C</b>) which fits best according to what you hear.',
        items: [
          { n: 31, q: 'Dr Clarke became interested in shift work because', opts: ['she wanted to answer a major research question.', 'she almost made a serious error when she was tired.', 'a colleague asked her to investigate the problem.'], a: 'B' },
          { n: 32, q: 'According to Dr Clarke, the main difficulty for night workers is', opts: ['that their body clock does not adapt quickly.', 'the total number of hours they sleep.', 'their dependence on caffeine.'], a: 'A' },
          { n: 33, q: 'What does she say about napping during a night shift?', opts: ['It should be discouraged in emergency departments.', 'It is only helpful if staff sleep deeply.', 'It is beneficial as long as it is brief.'], a: 'C' },
          { n: 34, q: 'Dr Clarke believes that shift rotas should', opts: ['move from morning to afternoon to night shifts.', 'avoid night shifts completely.', 'include at least seven consecutive nights.'], a: 'A' },
          { n: 35, q: 'What does she say about driving home after night shifts?', opts: ['Public transport is usually more dangerous.', 'It is a time of high risk that people underestimate.', 'Staff should be banned from driving after nights.'], a: 'B' },
          { n: 36, q: 'Dr Clarke thinks the most effective change hospitals can make is', opts: ['offering more training on fatigue.', 'reducing the length of breaks.', 'providing suitable places for staff to rest.'], a: 'C' }
        ]
      }]
    },
    {
      title: 'Part C — Extract 2', label: 'C2', intro: 'Questions 37–42 · Presentation',
      speakers: { N: { name: 'Narrator', g: 'm' }, S: { name: 'Physiotherapist', g: 'f' } },
      audio: [
        { s: 'N', t: 'Extract two. You hear a physiotherapist called Grace Hollis giving a presentation about a falls prevention programme for older adults. You now have ninety seconds to read questions 37 to 42.' },
        { pause: 45 },
        { s: 'S', t: "Good afternoon. I'd like to talk about the falls prevention programme we've been running in our community service for the past four years, and some of the lessons we've learned along the way." },
        { s: 'S', t: "When we started, our approach was what you might call traditional. We assessed each patient, gave them a printed sheet of strength and balance exercises, and asked them to do them at home three times a week. On paper, it was evidence-based. In practice, it didn't work. When we followed people up after three months, fewer than one in five were still doing the exercises. The problem wasn't the exercises themselves. It was that people simply stopped doing them once they were on their own." },
        { s: 'S', t: "So we changed our approach. We introduced weekly group classes in local community centres. We expected the main benefit to be supervision, making sure people did the exercises correctly. But what really made the difference was the social side. People came for the exercise and stayed for the tea and conversation afterwards. Attendance has stayed above eighty percent, and our falls rate among participants has dropped considerably." },
        { s: 'S', t: "We also learned that exercise is only part of the picture. One thing that is often neglected is eyesight. Many of the people we see haven't had an eye test for years, and poor vision is a significant risk factor. We now ask everyone when they last saw an optician and refer them if necessary." },
        { s: 'S', t: "Medication is another area. We work closely with pharmacists, who review each participant's medicines. Sleeping tablets and other sedatives are a particular concern, because they affect balance, especially at night. In some cases, the GP has been able to reduce or stop them." },
        { s: 'S', t: "People sometimes ask me about hip protectors, the padded underwear designed to reduce the risk of fracture. They can work, but in our experience very few people are willing to wear them every day, so their benefit in real life is limited." },
        { s: 'S', t: "Looking ahead, there's a lot of interest in technology: wearable sensors that detect falls, apps that guide exercises at home, and so on. I'm not against these at all, but I'd urge some caution. Our experience suggests that technology works best when it supports human contact, not when it replaces it. For many of our patients, the class is the highlight of their week." },
        { s: 'N', t: 'That is the end of Part C. You now have one minute to check your answers.' }
      ],
      groups: [{
        type: 'mcq', tag: 'oet-c-detail', instructions: 'Choose the answer (<b>A, B or C</b>) which fits best according to what you hear.',
        items: [
          { n: 37, q: 'Why did the original programme fail?', opts: ['The exercises were not based on evidence.', 'Patients did not continue the exercises at home.', 'The assessments took too long to complete.'], a: 'B' },
          { n: 38, q: 'What does Grace say was the main reason for the success of the group classes?', opts: ['the social contact they provided', 'the close supervision of exercises', 'their location in community centres'], a: 'A' },
          { n: 39, q: 'What does Grace say about eyesight?', opts: ['It is checked during every physiotherapy assessment.', 'It is a risk factor that is frequently overlooked.', 'It is less important than muscle strength.'], a: 'B' },
          { n: 40, q: 'Pharmacists are involved in the programme in order to', opts: ['provide medication to prevent fractures.', 'teach patients how to take their medicines.', 'identify medicines that may affect balance.'], a: 'C' },
          { n: 41, q: 'Grace\'s view of hip protectors is that', opts: ['they have little benefit because people rarely wear them.', 'they should be offered to all participants.', 'they are more effective than exercise programmes.'], a: 'A' },
          { n: 42, q: 'What is Grace\'s attitude towards new technology?', opts: ['She thinks it will soon replace group classes.', 'She believes it should complement personal contact.', 'She is opposed to its use with older patients.'], a: 'B' }
        ]
      }]
    }
  ]
};
