/* OET Reading — Practice Test 1 (contenido original; no es una guía clínica). */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['oet-r1'] = {
  id: 'oet-r1', exam: 'oet', skill: 'reading', title: 'OET Reading — Practice Test 1',
  summary: 'Hypoglycaemia (Part A) · 6 workplace texts · Antibiotic stewardship · Rural telehealth',
  meta: ['Part A 15 min', 'Parts B+C 45 min', '42 preguntas'],
  stages: [{ label: 'Part A', duration: 900, parts: [0] }, { label: 'Parts B & C', duration: 2700, parts: [1, 2, 3] }],
  parts: [
    {
      title: 'Part A — Hypoglycaemia in adults', label: 'Part A', intro: 'Expeditious reading · 15 minutes · Questions 1–20',
      passage: `<p class="muted"><i>Practice material only. Not intended as clinical guidance.</i></p>
<h3>Text A — Recognising hypoglycaemia</h3>
<p>Hypoglycaemia is defined as a capillary blood glucose level below <b>4.0 mmol/L</b> in a person with diabetes. It is most common in patients treated with insulin or with oral sulfonylureas.</p>
<p><b>Early (autonomic) symptoms:</b> sweating, trembling, palpitations, hunger, anxiety.<br><b>Later (neuroglycopenic) symptoms:</b> confusion, drowsiness, difficulty concentrating, slurred speech, changes in behaviour.<br><b>Severe:</b> seizures, loss of consciousness.</p>
<p><b>Risk factors:</b> missed or delayed meals, alcohol, unplanned exercise, recent increase in insulin dose, renal impairment.</p>
<p>Older patients may not experience typical early symptoms and may present with confusion alone, which can be mistaken for dementia or stroke.</p>
<h3>Text B — Treatment algorithm</h3>
<p><b>1. Conscious, orientated and able to swallow</b><br>Give 15–20 g of fast-acting carbohydrate (see Text C). Recheck capillary glucose after <b>15 minutes</b>. If still below 4.0 mmol/L, repeat treatment up to <b>three</b> times. If glucose remains low after three cycles, contact a doctor and consider IV glucose or IM glucagon.<br>Once glucose is above 4.0 mmol/L, give a long-acting carbohydrate (e.g. two biscuits or a slice of bread) or the next meal if it is due.</p>
<p><b>2. Conscious but confused or uncooperative</b><br>If able to swallow, squeeze 1.5–2 tubes of glucose gel between the teeth and gums. If this is not possible, give glucagon <b>1 mg</b> IM.</p>
<p><b>3. Unconscious or having seizures</b><br>Call the emergency team. Do not give anything by mouth. If IV access is available, give <b>10%</b> glucose 150–200 mL over 15 minutes. If not, give glucagon 1 mg IM. Glucagon may be less effective in patients with prolonged fasting, liver disease or high alcohol intake.</p>
<h3>Text C — Fast-acting carbohydrate (each option ≈ 15–20 g)</h3>
<table class="tbl" style="border:1px solid var(--border)"><tr><th>Product</th><th>Amount</th></tr>
<tr><td>Glucose tablets (4 g each)</td><td>4–5 tablets</td></tr>
<tr><td>Glucose gel (10 g per tube)</td><td>1.5–2 tubes</td></tr>
<tr><td>Pure fruit juice</td><td>150–200 mL</td></tr>
<tr><td>Non-diet fizzy drink</td><td>150–200 mL</td></tr>
<tr><td>Jelly sweets</td><td>4–5 sweets</td></tr></table>
<p>Chocolate and biscuits are <b>not</b> suitable as initial treatment: their fat content slows the absorption of glucose. Orange juice should be avoided in patients with renal impairment because of its potassium content.</p>
<h3>Text D — After an episode</h3>
<ul><li>Record the episode, treatment given and times in the notes and on the blood glucose chart.</li>
<li>Do not omit the next insulin dose, but ask the prescriber to review it.</li>
<li>Inform the diabetes specialist nurse if the patient has two or more episodes in 24 hours, or any severe episode requiring glucagon or IV glucose.</li>
<li>Patients who drive should be advised not to drive for <b>45 minutes</b> after blood glucose returns to normal, and to check their glucose before every journey.</li>
<li>Remind patients to carry a source of fast-acting glucose at all times.</li></ul>`,
      groups: [
        {
          type: 'match', tag: 'oet-ra-match', title: 'Questions 1–7', showOptions: false,
          instructions: 'For each question, decide which text (<b>A, B, C or D</b>) the information comes from. You may use any letter more than once.<br><b>In which text can you find information about…</b>',
          options: 'ABCD'.split('').map(k => ({ k, t: '' })),
          items: [
            { n: 1, q: 'what to give once a patient has recovered, to prevent a further drop in glucose?', a: 'B' },
            { n: 2, q: 'why certain foods should not be used for initial treatment?', a: 'C' },
            { n: 3, q: 'the signs of a severe episode?', a: 'A' },
            { n: 4, q: 'when a specialist should be informed?', a: 'D' },
            { n: 5, q: 'advice for patients who drive?', a: 'D' },
            { n: 6, q: 'a drink that is unsuitable for some patients?', a: 'C' },
            { n: 7, q: 'how older patients may present?', a: 'A' }
          ]
        },
        {
          type: 'gap', tag: 'oet-ra-short', limit: 4, title: 'Questions 8–14',
          instructions: 'Answer each of the questions with a word, short phrase or number from one of the texts.',
          content: `<p>8. Below what capillary blood glucose level is a patient considered hypoglycaemic? [[8]]</p>
            <p>9. How long should you wait before rechecking glucose after oral treatment? [[9]]</p>
            <p>10. How many glucose tablets should a patient be given? [[10]]</p>
            <p>11. What dose of glucagon is given intramuscularly? [[11]]</p>
            <p>12. What concentration of IV glucose should be used? [[12]]</p>
            <p>13. What volume of fruit juice should be given? [[13]]</p>
            <p>14. Which oral medicines increase the risk of hypoglycaemia? [[14]]</p>`,
          items: [
            { n: 8, a: ['4.0 mmol/L', '4 mmol/L', '4.0', '4', '4.0mmol/L', '4mmol/L'] }, { n: 9, a: ['15 minutes', '15 mins', 'fifteen minutes', '15'] },
            { n: 10, a: ['4-5', '4–5', '4 to 5', '4-5 tablets', '4–5 tablets', '4 to 5 tablets', 'four to five'] }, { n: 11, a: ['1 mg', '1mg'] },
            { n: 12, a: ['10%', '10 %', '10 percent', '10'] }, { n: 13, a: ['150-200 mL', '150–200 mL', '150-200 ml', '150–200 ml', '150-200', '150–200', '150 to 200 ml', '150 to 200 mL'] },
            { n: 14, a: ['sulfonylureas', 'sulphonylureas', 'oral sulfonylureas'] }
          ]
        },
        {
          type: 'gap', tag: 'oet-ra-sentence', limit: 3, title: 'Questions 15–20',
          instructions: 'Complete each of the sentences with a word or short phrase from one of the texts.',
          content: `<p>15. An awareness of a rapid or irregular heartbeat, known as [[15]], is an early symptom.</p>
            <p>16. For a confused patient who can swallow, glucose gel is placed between the [[16]].</p>
            <p>17. If glucose is still low after [[17]] treatment cycles, a doctor should be contacted.</p>
            <p>18. An unconscious patient must not be given anything [[18]].</p>
            <p>19. After an episode, the next insulin dose should not be [[19]].</p>
            <p>20. Patients should wait [[20]] after recovery before driving.</p>`,
          items: [
            { n: 15, a: ['palpitations'] }, { n: 16, a: ['teeth and gums'] }, { n: 17, a: ['three', '3'] },
            { n: 18, a: ['by mouth', 'orally'] }, { n: 19, a: ['omitted'] }, { n: 20, a: ['45 minutes', '45 mins', 'forty-five minutes'] }
          ]
        }
      ]
    },
    {
      title: 'Part B — Workplace texts', label: 'Part B', intro: 'Questions 21–26 · Six short texts',
      passage: `<h3>Text 1 — Policy: personal mobile phones</h3>
<p>Staff may carry personal mobile phones while on duty but must not use them in clinical areas except in an emergency. Phones must be set to silent at all times. Photographs of patients must never be taken on personal devices, even with the patient’s consent. Where clinical photography is required, the department’s approved camera must be used and images uploaded directly to the patient record.</p>
<h3>Text 2 — Memo: sharps bins</h3>
<p>From 1 March, sharps bins will be collected weekly instead of fortnightly. Please note that bins must be closed and locked when they are three-quarters full, not when they are completely full. Overfilled bins will not be collected by the waste contractor and present a serious risk of needlestick injury. Labels must be completed with the ward name and date on assembly.</p>
<h3>Text 3 — Manual extract: infusion pump cleaning</h3>
<p>Clean the pump with a detergent wipe after each patient and whenever visibly soiled. Do not immerse the pump in liquid or allow fluid to enter the battery compartment. Alcohol-based wipes may be used on the casing but must not be used on the display screen, as they can damage its protective coating. Allow the device to dry fully before use.</p>
<h3>Text 4 — Email: medicine fridge temperatures</h3>
<p>Dear all, a reminder that fridge temperatures must be recorded twice daily, at the start of the early and late shifts. If the reading falls outside the range of 2–8°C, do not use any of the contents. Label the fridge ‘Do not use’, move the medicines to the quarantine fridge in the treatment room, and contact pharmacy, who will advise whether the stock can still be used. Thanks, Ward Pharmacist</p>
<h3>Text 5 — Guideline: patients who lack capacity</h3>
<p>Where a patient is assessed as lacking capacity to consent to a specific treatment, the clinician responsible must act in the patient’s best interests. Relatives and carers should be consulted to help establish the patient’s known wishes, beliefs and values. However, they cannot give consent on the patient’s behalf unless they hold a valid lasting power of attorney for health and welfare decisions.</p>
<h3>Text 6 — Notice: patient identification bands</h3>
<p>All inpatients must wear an identification band. If a band cannot be applied to the wrist, it should be placed on the ankle. If a band is removed for any reason, for example to insert a cannula, the staff member who removed it is responsible for replacing it immediately. Bands must be checked before any medication is administered.</p>`,
      groups: [{
        type: 'mcq', tag: 'oet-rb', instructions: 'For questions 21–26, choose the answer (<b>A, B or C</b>) which you think fits best according to the text.',
        items: [
          { n: 21, q: '<b>Text 1.</b> The purpose of the policy is to', opts: ['explain when patients may be photographed on staff phones.', 'set out restrictions on the use of personal phones.', 'prohibit staff from bringing phones into the hospital.'], a: 'B' },
          { n: 22, q: '<b>Text 2.</b> What are staff told to do?', opts: ['Wait until bins are full before arranging collection.', 'Contact the contractor every week.', 'Lock bins before they become completely full.'], a: 'C' },
          { n: 23, q: '<b>Text 3.</b> The manual warns that', opts: ['some cleaning products can damage part of the pump.', 'the pump should be rinsed under running water.', 'alcohol wipes must not be used on any part of the pump.'], a: 'A' },
          { n: 24, q: '<b>Text 4.</b> If a fridge temperature is outside the correct range, staff should', opts: ['dispose of all the medicines immediately.', 'move the medicines and seek advice from pharmacy.', 'record the temperature again at the next shift.'], a: 'B' },
          { n: 25, q: '<b>Text 5.</b> According to the guideline, relatives', opts: ['should be consulted but may not be able to give consent.', 'are always able to consent on the patient’s behalf.', 'should not be involved in treatment decisions.'], a: 'A' },
          { n: 26, q: '<b>Text 6.</b> The notice makes clear', opts: ['which patients need two identification bands.', 'when a band should be placed on the ankle instead of the wrist.', 'that the nurse in charge must replace removed bands.'], a: 'B' }
        ]
      }]
    },
    {
      title: 'Part C — Text 1', label: 'C1', intro: 'Questions 27–34',
      passage: `<h3>Prescribing less: the challenge of antibiotic stewardship in general practice</h3>
<p>In many health systems, around four out of five antibiotic prescriptions are issued in primary care, a large proportion of them for respiratory tract infections that would resolve on their own. Dr Amira Haddad, a GP and researcher, remembers the pressure vividly. ‘Early in my career, I’d see thirty patients a day, and the quickest way to end a difficult consultation was to write a prescription. It felt like being kind. In fact, it was often the opposite.’</p>
<p>The dangers of overuse are well documented. Each unnecessary course exposes the patient to side effects such as diarrhoea and allergic reactions, and contributes to the selection of resistant bacteria, both in the individual and in the wider community. Yet the link between a single prescription and the global problem of resistance can seem abstract to busy clinicians — and even more so to patients who simply want to feel better.</p>
<p>Patient expectation is frequently cited as the main driver of inappropriate prescribing. Haddad’s research, however, suggests a more complicated picture. ‘When we asked patients directly, many said they hadn’t come for antibiotics at all. They wanted an explanation, reassurance that it wasn’t serious, and advice on managing their symptoms. Doctors were overestimating how much patients wanted a prescription.’ In other words, clinicians were often responding to an expectation that did not exist.</p>
<p>One strategy that has gained support is the ‘delayed’ or ‘back-up’ prescription, in which the patient is given a prescription but advised to use it only if symptoms worsen or fail to improve after a set number of days. Studies show that most patients given a delayed prescription never use it, and that satisfaction rates are similar to those of patients who receive antibiotics immediately. Haddad is cautiously positive. ‘It’s a useful tool, particularly when there is genuine uncertainty. But if it becomes a way of avoiding a conversation, we’ve missed the point.’</p>
<p>Point-of-care tests offer another approach. A finger-prick test for C-reactive protein (CRP), a marker of inflammation, can help distinguish between infections likely to benefit from antibiotics and those that are not. In some countries its use is widespread and has been associated with substantial reductions in prescribing. Critics point out that the test adds time and cost to consultations, and that results in the intermediate range can still leave the clinician uncertain. ‘It doesn’t make the decision for you,’ says Haddad, ‘but showing a patient a normal result can be very persuasive.’</p>
<p>Perhaps the most effective interventions, though, are the least technological. Practices that receive regular feedback comparing their prescribing rates with those of similar practices tend to reduce their prescribing, especially when the feedback comes from a respected peer rather than a distant authority. Training in communication skills — how to explain the natural course of an illness and which warning signs to watch for — has also been shown to reduce prescribing without lowering patient satisfaction.</p>
<p>Haddad believes the profession is at a turning point. ‘Twenty years ago, prescribing an antibiotic for a sore throat was seen as good practice. Now, more and more clinicians see it as something that needs justification. But change is uneven, and when practices are under pressure, old habits return. Stewardship has to be built into the system, not left to individual willpower.’</p>`,
      groups: [{
        type: 'mcq', tag: 'oet-rc', instructions: 'For questions 27–34, choose the answer (<b>A, B, C or D</b>) which you think fits best according to the text.',
        items: [
          { n: 27, q: 'In the first paragraph, Dr Haddad suggests that early in her career she', opts: ['saw fewer patients than she does today.', 'believed antibiotics were rarely necessary.', 'sometimes prescribed antibiotics to end consultations quickly.', 'was criticised by colleagues for overprescribing.'], a: 'C' },
          { n: 28, q: 'According to the second paragraph, the link between individual prescriptions and resistance', opts: ['can be hard for both clinicians and patients to appreciate.', 'has not yet been clearly established.', 'is mainly a concern for hospital doctors.', 'is easily explained to most patients.'], a: 'A' },
          { n: 29, q: "What did Haddad's research show?", opts: ['Most patients expected to receive antibiotics.', 'Patients were dissatisfied with explanations.', 'Doctors rarely asked patients about symptoms.', "Doctors overestimated patients' wish for antibiotics."], a: 'D' },
          { n: 30, q: "In the fourth paragraph, the word 'it' in “if it becomes a way of avoiding a conversation” refers to", opts: ['genuine uncertainty.', 'a delayed prescription.', 'patient satisfaction.', 'an immediate prescription.'], a: 'B' },
          { n: 31, q: "Haddad's attitude towards delayed prescribing is best described as", opts: ['generally supportive, with some reservations.', 'strongly opposed.', 'enthusiastic and uncritical.', 'indifferent.'], a: 'A' },
          { n: 32, q: 'One criticism of CRP testing mentioned in the text is that', opts: ['patients find the finger-prick test painful.', 'it has increased prescribing in some countries.', 'some results do not resolve the clinician’s uncertainty.', 'it cannot detect inflammation.'], a: 'C' },
          { n: 33, q: 'According to the sixth paragraph, feedback on prescribing rates is most effective when', opts: ['it is provided by a national authority.', 'it is combined with point-of-care testing.', 'it is given only once a year.', 'it comes from a respected colleague.'], a: 'D' },
          { n: 34, q: 'In the final paragraph, Haddad argues that', opts: ['most clinicians have already changed their habits.', 'reducing prescribing depends on systems rather than individual effort.', 'prescribing for sore throats remains good practice.', 'pressure on practices has decreased.'], a: 'B' }
        ]
      }]
    },
    {
      title: 'Part C — Text 2', label: 'C2', intro: 'Questions 35–42',
      passage: `<h3>Telehealth and the rural nurse</h3>
<p>For nurses working in remote communities, distance has always shaped practice. A patient with a deteriorating wound might once have faced a four-hour round trip to see a specialist; a nurse uncertain about a rash could do little more than describe it over the phone. The rapid spread of telehealth — consultations by video, remote monitoring devices and secure image sharing — has changed this landscape, though not always in the ways its advocates predicted.</p>
<p>Siobhan Kerr, a nurse practitioner in a coastal community of around two thousand people, describes the early days of her clinic’s video service as ‘chaotic’. Connections dropped, older patients struggled with the technology, and specialists were often reluctant to make decisions without seeing patients in person. ‘We were sold a vision of seamless care,’ she says. ‘What we got was a lot of frozen screens.’ The turning point, she believes, came not from better equipment but from changing who sat in front of the camera. Instead of patients connecting from home, they now attend the clinic, where a nurse joins the call, conducts the examination and relays findings to the specialist.</p>
<p>This ‘nurse-assisted’ model has clear advantages. The nurse can use clinical judgement to highlight relevant signs, and the specialist gains a trusted pair of hands. For patients, it removes the anxiety of managing the technology alone. But it also changes the nurse’s role in ways that are not always recognised. Kerr notes that nurses now spend considerable time preparing for and documenting remote consultations, work which is rarely reflected in staffing models. ‘On paper, the specialist is doing the consultation. In reality, a lot of the work is ours.’</p>
<p>Remote monitoring has proved similarly double-edged. Patients with heart failure, for example, can send daily weight and blood pressure readings from home, allowing early detection of fluid retention, and several studies have reported fewer hospital admissions among monitored patients. However, the data must be reviewed by someone, and alerts can be frequent. Nurses describe ‘alert fatigue’: a tendency to become desensitised to warnings when most of them turn out to be false alarms. Some services have responded by adjusting thresholds or adding a triage step, but there is no consensus on the best approach.</p>
<p>Equity is another concern. Telehealth is often presented as a way of reducing inequality between urban and rural areas, yet the communities with the greatest need frequently have the poorest internet connections, and older residents and those on low incomes are less likely to own suitable devices. ‘If we’re not careful,’ says Kerr, ‘we’ll create a two-tier system, with the best-connected patients getting the most attention.’</p>
<p>None of this means that telehealth has failed. Kerr is clear that it has transformed some aspects of her work — wound care in particular, where she can share high-quality images with a specialist and receive advice the same day. What she resists is the idea that technology alone is the solution. ‘The best results come when telehealth is used to strengthen the relationship between local nurses and specialists, not to replace local care. The technology is the easy part. The relationships take time.’</p>`,
      groups: [{
        type: 'mcq', tag: 'oet-rc', instructions: 'For questions 35–42, choose the answer (<b>A, B, C or D</b>) which you think fits best according to the text.',
        items: [
          { n: 35, q: 'In the first paragraph, the writer suggests that telehealth', opts: ['has made specialist visits unnecessary.', 'has not developed exactly as its supporters expected.', 'is mainly used for describing rashes.', 'has been rejected by rural nurses.'], a: 'B' },
          { n: 36, q: "Kerr describes the clinic's early video service as", opts: ['unreliable and difficult for some patients.', 'popular with specialists.', 'better than face-to-face care.', 'expensive to set up.'], a: 'A' },
          { n: 37, q: 'According to Kerr, the video service improved when', opts: ['the clinic bought new equipment.', 'specialists agreed to visit the community.', 'patients received training at home.', 'patients attended the clinic with a nurse present.'], a: 'D' },
          { n: 38, q: "Kerr's comment “a lot of the work is ours” is intended to show that", opts: ['specialists do not value nurses.', 'nurses prefer remote consultations.', "nurses' contribution is not fully recognised.", 'the consultation is led by the nurse.'], a: 'C' },
          { n: 39, q: "The term 'alert fatigue' refers to", opts: ['a reduced response to warnings that are frequent.', 'the tiredness of patients who monitor themselves.', 'a technical failure in monitoring devices.', 'an increase in hospital admissions.'], a: 'A' },
          { n: 40, q: 'What does the writer say about the management of alerts?', opts: ['Most services have stopped using thresholds.', 'Triage has solved the problem completely.', 'Services have not agreed on the best solution.', 'Alerts are reviewed automatically by computer.'], a: 'C' },
          { n: 41, q: "Kerr's concern about equity is that telehealth may", opts: ['reduce funding for urban hospitals.', 'mainly benefit patients who are already well connected.', 'be refused by older residents.', 'replace internet services in rural areas.'], a: 'B' },
          { n: 42, q: 'In the final paragraph, Kerr expresses the view that', opts: ['technology is the most difficult part of telehealth.', 'wound care has not benefited from telehealth.', 'telehealth should replace local care where possible.', 'professional relationships are central to effective telehealth.'], a: 'D' }
        ]
      }]
    }
  ]
};
