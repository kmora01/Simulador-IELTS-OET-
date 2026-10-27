/* OET Listening — Practice Test 2 (contenido original). */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['oet-l2'] = {
  id: 'oet-l2', exam: 'oet', skill: 'listening', title: 'OET Listening — Practice Test 2',
  summary: 'Back pain consultation · Pre-operative assessment · 6 workplace extracts · Sun protection & clinical handover',
  meta: ['Partes A, B, C', '42 preguntas', '~40 min', 'Audio una vez'], reviewTime: 60,
  parts: [
    {
      title: 'Part A — Extract 1', label: 'A1', intro: 'Questions 1–12 · Consultation extracts',
      speakers: { N: { name: 'Narrator', g: 'm' }, D: { name: 'GP', g: 'f' }, P: { name: 'Mr Fletcher', g: 'm' } },
      audio: [
        { s: 'N', t: 'OET Listening practice test two. Part A. In this part of the test, you will hear two different extracts. In each extract, a health professional is talking to a patient. For questions 1 to 24, complete the notes with information you hear.' },
        { s: 'N', t: 'Extract one. Questions 1 to 12. You hear a GP talking to a patient called Graham Fletcher. For questions 1 to 12, complete the notes with a word or short phrase. You now have thirty seconds to look at the notes.' },
        { pause: 25 },
        { s: 'D', t: 'Good morning, Mr Fletcher. What brings you in today?' },
        { s: 'P', t: "It's my back, doctor. It started about ten days ago, when I was lifting a washing machine at work. I'm a delivery driver, so I'm lifting heavy things all day." },
        { s: 'D', t: 'I see. Where exactly is the pain?' },
        { s: 'P', t: "Low down, on the left side, just above my hip. It's a sort of aching pain most of the time, but if I bend forward, it becomes really sharp." },
        { s: 'D', t: 'Does the pain go anywhere else, for example down your leg?' },
        { s: 'P', t: "Sometimes it goes into my left buttock, but not further down. And I don't have any numbness or tingling in my legs." },
        { s: 'D', t: "That's good to hear. Any problems with your bladder or bowels? Any difficulty passing urine?" },
        { s: 'P', t: 'No, nothing like that.' },
        { s: 'D', t: 'How is it affecting your sleep?' },
        { s: 'P', t: "It's worst when I turn over in bed. It wakes me up two or three times a night." },
        { s: 'D', t: 'And what have you tried for the pain so far?' },
        { s: 'P', t: "I've been taking paracetamol, and my wife bought me a hot water bottle, which helps a bit. I tried resting in bed for a couple of days, but if anything it made it stiffer." },
        { s: 'D', t: "Yes, we don't recommend bed rest for back pain any more. Staying gently active is much better. Have you had back problems before?" },
        { s: 'P', t: "Once, about five years ago, but it cleared up in a week or two." },
        { s: 'D', t: 'Any other medical problems?' },
        { s: 'P', t: "Just high cholesterol. I take a statin for that." },
        { s: 'D', t: "Right. Having examined you, I think this is a muscular strain. I'm going to add ibuprofen to the paracetamol for a week, to be taken with food. I'd also like to refer you to the physiotherapist for some exercises. And I'll give you a fit note so that you can do lighter duties at work for two weeks, with no heavy lifting." },
        { s: 'N', t: 'That is the end of extract one.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'gap', tag: 'oet-a-notes', limit: 3,
        instructions: 'Complete the notes with a word or short phrase.',
        content: `<h4>Patient: Graham Fletcher</h4>
          <p><b>History of complaint</b></p><ul>
          <li>onset 10 days ago while lifting a [[1]] at work</li><li>occupation: [[2]]</li></ul>
          <p><b>Symptoms</b></p><ul>
          <li>pain in lower back, left side, just above the [[3]]</li>
          <li>usually aching; becomes sharp when [[4]]</li>
          <li>occasionally radiates to left [[5]]</li>
          <li>no numbness or tingling; no bladder or bowel problems</li>
          <li>sleep disturbed when [[6]] in bed</li></ul>
          <p><b>Self-management</b></p><ul><li>paracetamol; [[7]] gives some relief</li><li>bed rest increased [[8]]</li></ul>
          <p><b>Past history</b></p><ul><li>similar episode [[9]] ago</li><li>high [[10]] — on statin</li></ul>
          <p><b>Plan</b></p><ul><li>diagnosis: muscular strain</li><li>add [[11]] for one week, with food</li><li>physiotherapy referral</li><li>fit note: [[12]] for two weeks</li></ul>`,
        items: [
          { n: 1, a: ['washing machine'] }, { n: 2, a: ['delivery driver'] }, { n: 3, a: ['hip'] }, { n: 4, a: ['bending forward', 'bending', 'bends forward', 'he bends forward'] },
          { n: 5, a: ['buttock'] }, { n: 6, a: ['turning over', 'turns over', 'turning'] }, { n: 7, a: ['hot water bottle', 'a hot water bottle'] }, { n: 8, a: ['stiffness'] },
          { n: 9, a: ['five years', '5 years'] }, { n: 10, a: ['cholesterol'] }, { n: 11, a: ['ibuprofen'] }, { n: 12, a: ['lighter duties', 'light duties', 'no heavy lifting'] }
        ]
      }]
    },
    {
      title: 'Part A — Extract 2', label: 'A2', intro: 'Questions 13–24 · Consultation extracts',
      speakers: { N: { name: 'Narrator', g: 'm' }, R: { name: 'Pre-assessment nurse', g: 'm' }, P: { name: 'Mrs Hassan', g: 'f' } },
      audio: [
        { s: 'N', t: 'Extract two. Questions 13 to 24. You hear a nurse carrying out a pre-operative assessment with a patient called Leila Hassan. For questions 13 to 24, complete the notes with a word or short phrase. You now have thirty seconds to look at the notes.' },
        { pause: 25 },
        { s: 'R', t: "Hello Mrs Hassan, I'm Ben, one of the pre-assessment nurses. You're having your gallbladder removed next month, is that right?" },
        { s: 'P', t: "Yes. I've had gallstones for about a year. The pain was getting so bad that I ended up in the emergency department twice." },
        { s: 'R', t: "I'm sorry to hear that. I just need to go through some questions to make sure you're fit for the anaesthetic. Have you ever had an operation before?" },
        { s: 'P', t: "Only a caesarean section, when my son was born. That was eight years ago." },
        { s: 'R', t: 'And were there any problems with the anaesthetic that time?' },
        { s: 'P', t: "I felt very sick afterwards. I was vomiting for most of the night." },
        { s: 'R', t: "That's useful to know. The anaesthetist can give you something to prevent that. Do you have any allergies?" },
        { s: 'P', t: "I'm allergic to penicillin. I came out in a rash all over my body when I took it." },
        { s: 'R', t: 'And what medication are you taking at the moment?' },
        { s: 'P', t: "I take levothyroxine for an underactive thyroid, and the contraceptive pill." },
        { s: 'R', t: "OK. The surgeon may ask you to stop the pill four weeks before the operation, because it slightly increases the risk of blood clots. I'll check that for you. Do you smoke?" },
        { s: 'P', t: "No, never. I drink a glass of wine occasionally, that's all." },
        { s: 'R', t: "And how about your general fitness? Can you climb two flights of stairs without stopping?" },
        { s: 'P', t: "Yes, no problem. I go swimming twice a week." },
        { s: 'R', t: "Excellent. Now, your blood pressure today is a little high, one forty-five over ninety. Is that normal for you?" },
        { s: 'P', t: "I'm always nervous in hospitals. At my GP's it's usually fine." },
        { s: 'R', t: "That's very common. We'll ask your GP to check it again. Finally, who will look after your son while you're in hospital?" },
        { s: 'P', t: 'My sister has offered to stay with us for a week.' },
        { s: 'R', t: "Lovely. On the day, please don't eat anything after midnight, but you can drink water until six a.m." },
        { s: 'N', t: 'That is the end of Part A.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'gap', tag: 'oet-a-notes', limit: 3,
        instructions: 'Complete the notes with a word or short phrase.',
        content: `<h4>Patient: Leila Hassan — pre-operative assessment</h4>
          <p><b>Procedure</b></p><ul><li>removal of gallbladder; history of [[13]] for one year</li><li>attended emergency department [[14]]</li></ul>
          <p><b>Previous surgery / anaesthesia</b></p><ul><li>[[15]] eight years ago</li><li>post-operative [[16]] overnight</li></ul>
          <p><b>Allergies</b></p><ul><li>[[17]] — reaction: widespread [[18]]</li></ul>
          <p><b>Medication</b></p><ul><li>levothyroxine for [[19]]</li><li>contraceptive pill — may need to stop [[20]] pre-op (clot risk)</li></ul>
          <p><b>Social / fitness</b></p><ul><li>non-smoker; occasional alcohol</li><li>exercise: [[21]] twice a week</li></ul>
          <p><b>Observations</b></p><ul><li>BP [[22]] — ? anxiety; GP to recheck</li></ul>
          <p><b>Home support</b></p><ul><li>[[23]] will care for son</li></ul>
          <p><b>Instructions</b></p><ul><li>no food after midnight; water allowed until [[24]]</li></ul>`,
        items: [
          { n: 13, a: ['gallstones'] }, { n: 14, a: ['twice', 'two times'] }, { n: 15, a: ['caesarean section', 'caesarean', 'cesarean section', 'c-section'] }, { n: 16, a: ['vomiting', 'nausea and vomiting', 'nausea'] },
          { n: 17, a: ['penicillin'] }, { n: 18, a: ['rash'] }, { n: 19, a: ['underactive thyroid', 'hypothyroidism'] }, { n: 20, a: ['four weeks', '4 weeks'] },
          { n: 21, a: ['swimming'] }, { n: 22, a: ['145/90', '145 over 90'] }, { n: 23, a: ['sister', 'her sister'] }, { n: 24, a: ['6 am', '6am', '6 a.m.', 'six am', '6'] }
        ]
      }]
    },
    {
      title: 'Part B — Workplace extracts', label: 'B', intro: 'Questions 25–30 · Short extracts from the healthcare workplace',
      speakers: { N: { name: 'Narrator', g: 'm' }, A: { name: 'Charge nurse', g: 'm' }, B: { name: 'Dietitian', g: 'f' }, C: { name: 'Registrar', g: 'm' }, D: { name: 'Midwife', g: 'f' }, E: { name: 'Infection control nurse', g: 'f' }, F: { name: 'Radiographer', g: 'm' } },
      audio: [
        { s: 'N', t: 'Part B. In this part of the test, you will hear six different extracts. For questions 25 to 30, choose the answer, A, B or C, which fits best according to what you hear.' },
        { s: 'N', t: 'Question 25. You hear a charge nurse briefing staff about a new electronic system. Now read the question.' },
        { pause: 12 },
        { s: 'A', t: "Just to let you know, the new electronic observation system goes live on Monday. You'll record obs on the tablets instead of the paper charts. The training sessions were last week, but if you missed yours, don't worry. There will be someone from the IT team on the ward every day for the first fortnight to help. Paper charts will still be kept in the office in case the system goes down." },
        { s: 'N', t: 'Question 26. You hear a dietitian talking to a nurse about a patient. Now read the question.' },
        { pause: 12 },
        { s: 'B', t: "I've seen Mr Price this morning. His intake is still very poor, and he's lost another kilo this week. I don't think tube feeding is necessary yet, but I've prescribed high-energy drinks three times a day. What would really help is if someone could sit with him at mealtimes and encourage him, because he tends to give up after a few mouthfuls." },
        { s: 'N', t: 'Question 27. You hear a registrar talking to a junior doctor on the phone. Now read the question.' },
        { pause: 12 },
        { s: 'C', t: "Thanks for calling. From what you've told me, her heart rate and blood pressure are stable, and the pain has settled with the morphine. I don't need to see her straight away, but I'd like a repeat blood test in four hours, and please call me immediately if her temperature goes above thirty-eight or her blood pressure drops." },
        { s: 'N', t: 'Question 28. You hear a midwife talking to a pregnant woman. Now read the question.' },
        { pause: 12 },
        { s: 'D', t: "So, at thirty-six weeks your baby is head down, which is exactly what we want. Your blood pressure is fine. The only thing is that the baby's growth has slowed slightly, so I'd like you to have an extra scan next week, just to be sure. It's very likely to be nothing, but it's better to check." },
        { s: 'N', t: 'Question 29. You hear an infection control nurse speaking at a team meeting. Now read the question.' },
        { pause: 12 },
        { s: 'E', t: "We've had two confirmed cases of norovirus on Ward Six since yesterday. Both patients are now in side rooms. The ward is not closed at this stage, but we're asking that no new patients are admitted to that bay until it's been deep-cleaned. And remember, alcohol gel doesn't work against norovirus, so it's soap and water for everyone." },
        { s: 'N', t: 'Question 30. You hear a radiographer talking to a patient before a procedure. Now read the question.' },
        { pause: 12 },
        { s: 'F', t: "Before we start the scan, I need to ask: is there any chance you might be pregnant? I ask everyone, it's just routine. OK, thank you. You'll need to remove your necklace and earrings, but you can keep your wedding ring on. The scan itself takes about ten minutes, and you'll need to keep very still." },
        { s: 'N', t: 'That is the end of Part B.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'mcq', tag: 'oet-b-gist', instructions: 'For questions 25–30, choose the answer (<b>A, B or C</b>) which fits best according to what you hear.',
        items: [
          { n: 25, q: 'What does the charge nurse tell staff?', opts: ['Paper charts will no longer be available.', 'Support will be available on the ward.', 'Training must be completed before Monday.'], a: 'B' },
          { n: 26, q: 'The dietitian wants the nurse to', opts: ['start tube feeding.', 'weigh the patient daily.', 'help the patient during meals.'], a: 'C' },
          { n: 27, q: 'What does the registrar decide?', opts: ['to monitor the patient and repeat a test', 'to see the patient immediately', 'to increase the dose of morphine'], a: 'A' },
          { n: 28, q: 'Why is the midwife arranging an extra scan?', opts: ['The baby is in the wrong position.', 'The baby\'s growth has slowed.', 'The woman\'s blood pressure is high.'], a: 'B' },
          { n: 29, q: 'The infection control nurse says that', opts: ['the whole ward has been closed.', 'staff should use alcohol gel more often.', 'admissions to one area should be stopped.'], a: 'C' },
          { n: 30, q: 'What is the radiographer doing?', opts: ['explaining the results of a scan', 'carrying out routine checks before a scan', 'asking the patient to remove all jewellery'], a: 'B' }
        ]
      }]
    },
    {
      title: 'Part C — Extract 1', label: 'C1', intro: 'Questions 31–36 · Interview',
      speakers: { N: { name: 'Narrator', g: 'm' }, I: { name: 'Interviewer', g: 'f' }, S: { name: 'Dr Samuel Adeyemi', g: 'm' } },
      audio: [
        { s: 'N', t: 'Part C. In this part of the test, you will hear two different extracts. For questions 31 to 42, choose the answer, A, B or C, which fits best according to what you hear.' },
        { s: 'N', t: 'Extract one. You hear an interview with Dr Samuel Adeyemi, a dermatologist, about sun protection. You now have ninety seconds to read questions 31 to 36.' },
        { pause: 45 },
        { s: 'I', t: 'Dr Adeyemi, skin cancer rates have been rising for decades. Why is that?' },
        { s: 'S', t: "Part of the increase is simply that we're better at detecting it. People are more aware, and they come to see us earlier. But that doesn't explain everything. Cheap foreign holidays from the nineteen seventies onwards meant that many people were exposed to intense sun for short periods, often with burning. And it's those episodes of sunburn, particularly in childhood, that seem to matter most." },
        { s: 'I', t: 'Most people know they should use sunscreen. Are they using it correctly?' },
        { s: 'S', t: "Generally, no. The problem isn't usually the type of sunscreen people buy. Most products are perfectly good. It's that people apply far too little, often less than half the recommended amount, and they forget to reapply after swimming or sweating. So the protection they actually get is much lower than the number on the bottle." },
        { s: 'I', t: 'Some people worry that sunscreen stops the body making vitamin D.' },
        { s: 'S', t: "It's a reasonable question, but in practice, studies of people using sunscreen normally haven't found significant deficiencies. Because nobody applies it perfectly, enough sunlight still reaches the skin. For people who are at genuine risk of low vitamin D, for example those who cover their skin for cultural reasons, a supplement is a better solution than skipping sun protection." },
        { s: 'I', t: 'What about people with darker skin? Is skin cancer a concern for them?' },
        { s: 'S', t: "Darker skin does offer more natural protection, and skin cancer is less common. But when it does occur, it's often diagnosed later, sometimes on the palms or soles of the feet, where people don't think to look. And that late diagnosis makes the outcome worse. So my message is not that it doesn't matter, but that awareness needs to be different." },
        { s: 'I', t: 'Are public health campaigns working?' },
        { s: 'S', t: "There's good evidence from Australia that long-term campaigns can change behaviour, and rates of melanoma in younger Australians are now falling. What made the difference wasn't a single clever advertisement, but decades of consistent messages combined with practical changes, like shade in school playgrounds and hats as part of school uniform." },
        { s: 'I', t: 'And sunbeds?' },
        { s: 'S', t: "I'd like to see them banned altogether. Several countries have done that, and I see no good argument for keeping them. Age restrictions are a start, but adults are at risk too." },
        { s: 'N', t: 'That is the end of extract one.' },
        { pause: 8 }
      ],
      groups: [{
        type: 'mcq', tag: 'oet-c-detail', instructions: 'Choose the answer (<b>A, B or C</b>) which fits best according to what you hear.',
        items: [
          { n: 31, q: 'According to Dr Adeyemi, rising skin cancer rates are partly explained by', opts: ['increased use of sunbeds by children.', 'episodes of sunburn on holidays.', 'a decline in the use of sunscreen.'], a: 'B' },
          { n: 32, q: 'What is the main problem with the way people use sunscreen?', opts: ['They do not apply enough.', 'They buy products of poor quality.', 'They rely on high-factor creams.'], a: 'A' },
          { n: 33, q: 'Dr Adeyemi thinks people at risk of low vitamin D should', opts: ['avoid using sunscreen.', 'spend more time in the sun.', 'take a supplement.'], a: 'C' },
          { n: 34, q: 'What does he say about skin cancer in people with darker skin?', opts: ['It is as common as in people with lighter skin.', 'It is often detected at a later stage.', 'It is not a significant concern.'], a: 'B' },
          { n: 35, q: 'The Australian campaigns were successful mainly because', opts: ['they combined long-term messages with practical measures.', 'they used one highly effective advertisement.', 'they targeted adults rather than children.'], a: 'A' },
          { n: 36, q: "Dr Adeyemi's view on sunbeds is that", opts: ['age limits are sufficient.', 'they are safe for adults.', 'they should be prohibited.'], a: 'C' }
        ]
      }]
    },
    {
      title: 'Part C — Extract 2', label: 'C2', intro: 'Questions 37–42 · Presentation',
      speakers: { N: { name: 'Narrator', g: 'm' }, H: { name: 'Nurse educator', g: 'f' } },
      audio: [
        { s: 'N', t: 'Extract two. You hear a nurse educator called Ruth Morgan giving a presentation about clinical handover. You now have ninety seconds to read questions 37 to 42.' },
        { pause: 45 },
        { s: 'H', t: "Good afternoon. I'd like to talk about handover, the moment when responsibility for a patient passes from one professional to another. It happens thousands of times a day in every hospital, and yet it's one of the points where errors are most likely to occur." },
        { s: 'H', t: "When we audited handovers on our medical wards two years ago, the problem we found wasn't that staff were careless. They were often very thorough. The problem was inconsistency. Every nurse had their own way of handing over, so important information, like a pending blood result, was easily missed, depending on who was speaking." },
        { s: 'H', t: "So we introduced a structured tool, based on the SBAR format: situation, background, assessment and recommendation. I expected resistance from senior staff, but in fact it was the newly qualified nurses who found it hardest. They worried that following a script would make them sound less confident. Once they saw that senior colleagues were using it too, that concern faded." },
        { s: 'H', t: "We also moved handover from the nurses' station to the bedside, wherever possible. This was more controversial. Some staff were concerned about confidentiality, and that's a real issue in shared bays. We agreed that sensitive information would still be shared away from the bed. But the benefit was that patients could correct mistakes and add information. One patient pointed out that he'd been told to stop a medication that was still on his chart." },
        { s: 'H', t: "Did it take longer? Initially, yes, by about five minutes per shift. But after three months, handovers were actually slightly shorter than before, because the structure stopped people from going off on tangents." },
        { s: 'H', t: "The most important lesson for me is that the tool on its own wasn't enough. What made it work was involving staff in designing it. We held workshops where nurses decided what should be included for our patients. Because they'd created it, they felt it belonged to them, rather than being imposed by management." },
        { s: 'N', t: 'That is the end of Part C. You now have one minute to check your answers.' }
      ],
      groups: [{
        type: 'mcq', tag: 'oet-c-detail', instructions: 'Choose the answer (<b>A, B or C</b>) which fits best according to what you hear.',
        items: [
          { n: 37, q: 'What did the audit of handovers reveal?', opts: ['Staff were often careless.', 'Handovers were too brief.', 'Practice varied between individuals.'], a: 'C' },
          { n: 38, q: 'Which group found the structured tool most difficult at first?', opts: ['newly qualified nurses', 'senior nurses', 'doctors'], a: 'A' },
          { n: 39, q: 'How did the team respond to concerns about bedside handover?', opts: ['They returned to the nurses\' station.', 'They shared sensitive details away from the bed.', 'They asked patients to leave the bay.'], a: 'B' },
          { n: 40, q: 'Ruth gives the example of a patient to show that', opts: ['patients can help to identify errors.', 'medication charts are often wrong.', 'patients dislike bedside handover.'], a: 'A' },
          { n: 41, q: 'What happened to the length of handovers?', opts: ['They became much longer.', 'They increased at first and later decreased.', 'They stayed exactly the same.'], a: 'B' },
          { n: 42, q: 'According to Ruth, the key to success was', opts: ['support from management.', 'the SBAR format itself.', 'staff involvement in designing the tool.'], a: 'C' }
        ]
      }]
    }
  ]
};
