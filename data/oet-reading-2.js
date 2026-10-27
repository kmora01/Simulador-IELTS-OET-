/* OET Reading — Practice Test 2 (contenido original; no es una guía clínica). */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['oet-r2'] = {
  id: 'oet-r2', exam: 'oet', skill: 'reading', title: 'OET Reading — Practice Test 2',
  summary: 'Pressure ulcer prevention (Part A) · 6 workplace texts · Deprescribing in older adults · Compassion fatigue',
  meta: ['Part A 15 min', 'Parts B+C 45 min', '42 preguntas'],
  stages: [{ label: 'Part A', duration: 900, parts: [0] }, { label: 'Parts B & C', duration: 2700, parts: [1, 2, 3] }],
  parts: [
    {
      title: 'Part A — Pressure ulcer prevention', label: 'Part A', intro: 'Expeditious reading · 15 minutes · Questions 1–20',
      passage: `<p class="muted"><i>Practice material only. Not intended as clinical guidance.</i></p>
<h3>Text A — Risk assessment</h3>
<p>All adult inpatients must have a pressure ulcer risk assessment within <b>6 hours</b> of admission, using the Braden scale. The assessment must be repeated weekly, after surgery, and whenever the patient’s condition changes.</p>
<p>The Braden scale scores six factors: sensory perception, moisture, activity, mobility, nutrition, and friction and shear. Scores range from 6 to 23; a <b>lower</b> score indicates a <b>higher</b> risk. A score of <b>18 or below</b> means the patient is at risk and requires a prevention plan.</p>
<p>Additional risk factors not fully captured by the scale include diabetes, peripheral vascular disease, and the use of medical devices such as oxygen masks and urinary catheters.</p>
<h3>Text B — Categories of pressure ulcer</h3>
<table class="tbl" style="border:1px solid var(--border)"><tr><th>Category</th><th>Description</th></tr>
<tr><td>1</td><td>Intact skin with non-blanchable redness, usually over a bony prominence. May be painful, firm or warmer than surrounding skin.</td></tr>
<tr><td>2</td><td>Partial-thickness skin loss; shallow open ulcer with a red or pink wound bed, or an intact or ruptured blister.</td></tr>
<tr><td>3</td><td>Full-thickness skin loss; fat may be visible, but bone, tendon and muscle are not exposed.</td></tr>
<tr><td>4</td><td>Full-thickness tissue loss with exposed bone, tendon or muscle.</td></tr>
<tr><td>Unstageable</td><td>Depth unknown because the base is covered by slough or eschar.</td></tr></table>
<p>To check for blanching, press lightly on the reddened area with a finger for 3 seconds. In people with darker skin tones, redness may be difficult to see; check for changes in temperature, firmness or colour, such as purple or bluish areas.</p>
<h3>Text C — Prevention measures</h3>
<ul><li><b>Repositioning:</b> at-risk patients in bed should be repositioned at least every <b>2 hours</b>; high-risk patients may need more frequent changes. Use a 30-degree tilt rather than lying the patient directly on the hip.</li>
<li><b>Seating:</b> limit sitting to <b>1 hour</b> at a time for patients with existing ulcers on the sacrum.</li>
<li><b>Heels:</b> keep heels free of the mattress using a pillow under the calves, not under the knees.</li>
<li><b>Support surfaces:</b> patients with a Braden score of 12 or below should be placed on a dynamic (alternating-pressure) mattress.</li>
<li><b>Skin care:</b> use a pH-balanced cleanser; do not massage reddened areas, as this can cause further tissue damage.</li>
<li><b>Nutrition:</b> refer to the dietitian if the patient has lost more than 5% of body weight in the last month.</li></ul>
<h3>Text D — Documentation and reporting</h3>
<ul><li>Record repositioning on the SSKIN chart each time it is carried out.</li>
<li>Photograph all ulcers of category 2 or above on admission and weekly, using the approved clinical camera.</li>
<li>Report all category 2, 3, 4 and unstageable ulcers on the incident reporting system within <b>24 hours</b>.</li>
<li>Refer category 3, 4 and unstageable ulcers to the tissue viability nurse.</li>
<li>Inform the patient and family of any new ulcer and the plan of care.</li></ul>`,
      groups: [
        {
          type: 'match', tag: 'oet-ra-match', title: 'Questions 1–7', showOptions: false,
          instructions: 'For each question, decide which text (<b>A, B, C or D</b>) the information comes from. You may use any letter more than once.<br><b>In which text can you find information about…</b>',
          options: 'ABCD'.split('').map(k => ({ k, t: '' })),
          items: [
            { n: 1, q: 'how to identify damage in patients with darker skin?', a: 'B' },
            { n: 2, q: 'when a specialist nurse should be involved?', a: 'D' },
            { n: 3, q: 'equipment that can increase the risk of pressure damage?', a: 'A' },
            { n: 4, q: 'a practice that may worsen skin damage?', a: 'C' },
            { n: 5, q: 'how often an assessment must be repeated?', a: 'A' },
            { n: 6, q: 'keeping a record of position changes?', a: 'D' },
            { n: 7, q: 'what distinguishes the most severe category?', a: 'B' }
          ]
        },
        {
          type: 'gap', tag: 'oet-ra-short', limit: 4, title: 'Questions 8–14',
          instructions: 'Answer each of the questions with a word, short phrase or number from one of the texts.',
          content: `<p>8. Within how many hours of admission must the risk assessment be completed? [[8]]</p>
            <p>9. What Braden score or lower indicates that a patient is at risk? [[9]]</p>
            <p>10. How many factors does the Braden scale score? [[10]]</p>
            <p>11. For how long should you press on a red area to test for blanching? [[11]]</p>
            <p>12. At what angle should patients be tilted when repositioned? [[12]]</p>
            <p>13. What type of mattress is used for a Braden score of 12 or below? [[13]]</p>
            <p>14. What percentage of weight loss in a month requires a dietitian referral? [[14]]</p>`,
          items: [
            { n: 8, a: ['6', 'six', '6 hours', 'six hours'] }, { n: 9, a: ['18', 'eighteen'] }, { n: 10, a: ['6', 'six'] },
            { n: 11, a: ['3 seconds', 'three seconds', '3'] }, { n: 12, a: ['30 degrees', '30-degree', '30', '30°'] },
            { n: 13, a: ['dynamic', 'alternating-pressure', 'dynamic mattress', 'alternating pressure', 'alternating-pressure mattress'] }, { n: 14, a: ['5%', '5 %', '5', 'more than 5%'] }
          ]
        },
        {
          type: 'gap', tag: 'oet-ra-sentence', limit: 3, title: 'Questions 15–20',
          instructions: 'Complete each of the sentences with a word or short phrase from one of the texts.',
          content: `<p>15. A category 1 ulcer shows redness that is [[15]], usually over a bony area.</p>
            <p>16. An ulcer is unstageable when its base is covered by slough or [[16]].</p>
            <p>17. To protect the heels, place a pillow under the [[17]].</p>
            <p>18. Patients with sacral ulcers should sit for no more than [[18]] at a time.</p>
            <p>19. Ulcers of category 2 or above must be photographed on admission and [[19]].</p>
            <p>20. Relevant ulcers must be reported within [[20]].</p>`,
          items: [
            { n: 15, a: ['non-blanchable', 'non blanchable'] }, { n: 16, a: ['eschar'] }, { n: 17, a: ['calves'] },
            { n: 18, a: ['1 hour', 'one hour'] }, { n: 19, a: ['weekly'] }, { n: 20, a: ['24 hours', 'twenty-four hours'] }
          ]
        }
      ]
    },
    {
      title: 'Part B — Workplace texts', label: 'Part B', intro: 'Questions 21–26 · Six short texts',
      passage: `<h3>Text 1 — Policy: verbal orders</h3>
<p>Verbal medication orders should be used only in emergencies or when the prescriber is unable to attend. The nurse receiving the order must write it down and read it back to the prescriber to confirm the drug, dose, route and time. The prescriber must sign the order within 24 hours. Verbal orders for controlled drugs are not permitted under any circumstances.</p>
<h3>Text 2 — Memo: blood glucose meters</h3>
<p>Following a recent audit, staff are reminded that quality control checks must be performed on every blood glucose meter at the start of each day, using the control solution kept in the treatment room. Meters that fail the check must be removed from use and returned to the point-of-care testing team. Results recorded on a meter that has not been checked may not be reliable.</p>
<h3>Text 3 — Guideline: interpreters</h3>
<p>Where a patient has limited English, a professional interpreter should be used for all clinical discussions, including consent and discharge planning. Family members, especially children, should not be used to interpret except in an emergency, as they may omit or change information and the patient may be reluctant to discuss sensitive issues.</p>
<h3>Text 4 — Email: falls sensors</h3>
<p>Hi all, the new bed and chair sensors arrived this morning. Please note they are intended for patients assessed as high risk of falls who are confused or unable to use the call bell. They do not replace regular checks. Before using a sensor, discuss it with the patient or their family and document this conversation. Thanks, Falls Lead</p>
<h3>Text 5 — Notice: oxygen cylinders</h3>
<p>Oxygen cylinders must be stored upright in the designated racks and secured with a chain. Full and empty cylinders must be kept in separate, clearly labelled racks. Cylinders must never be left free-standing in corridors or patient bays. Report any damaged cylinder immediately to the estates department.</p>
<h3>Text 6 — Extract: discharge medicines</h3>
<p>Before discharge, the nurse should go through each medicine with the patient, explaining its purpose, dose and any important side effects. Particular attention should be given to medicines that have been started, stopped or changed during the admission. Patients should be given a written copy of their medicines list, and a copy must be sent to their GP.</p>`,
      groups: [{
        type: 'mcq', tag: 'oet-rb', instructions: 'For questions 21–26, choose the answer (<b>A, B or C</b>) which you think fits best according to the text.',
        items: [
          { n: 21, q: '<b>Text 1.</b> According to the policy, verbal orders', opts: ['may be used for any medicine in an emergency.', 'must be confirmed by reading them back.', 'should be signed by the nurse within 24 hours.'], a: 'B' },
          { n: 22, q: '<b>Text 2.</b> The memo is reminding staff to', opts: ['check meters daily before use.', 'return all meters to the testing team.', 'record results in the treatment room.'], a: 'A' },
          { n: 23, q: '<b>Text 3.</b> What does the guideline say about family members?', opts: ['They should interpret for consent discussions.', 'They are preferred to professional interpreters.', 'They should generally not act as interpreters.'], a: 'C' },
          { n: 24, q: '<b>Text 4.</b> The email explains that the sensors', opts: ['should be used for all patients.', 'are an addition to, not a replacement for, regular checks.', 'can be used without informing the patient.'], a: 'B' },
          { n: 25, q: '<b>Text 5.</b> The notice tells staff', opts: ['how oxygen cylinders must be stored.', 'how to use oxygen cylinders safely.', 'when to order new cylinders.'], a: 'A' },
          { n: 26, q: '<b>Text 6.</b> The extract emphasises the importance of', opts: ['sending patients home with a supply of medicines.', 'explaining medicines that have changed during admission.', 'asking the GP to review all medicines.'], a: 'B' }
        ]
      }]
    },
    {
      title: 'Part C — Text 1', label: 'C1', intro: 'Questions 27–34',
      passage: `<h3>Less is more: deprescribing in older adults</h3>
<p>For much of modern medicine’s history, progress has been measured by what doctors add: new diagnoses, new tests, new treatments. Deprescribing — the planned reduction or withdrawal of medicines that may no longer be beneficial — asks clinicians to do the opposite. It is a simple idea, but in practice it has proved surprisingly difficult.</p>
<p>The need is clear. As people live longer with several chronic conditions, the number of medicines they take has risen sharply. It is now common for people over 75 to take ten or more medicines a day, a situation known as polypharmacy. Each medicine may be justified on its own, but together they increase the risk of interactions, falls, confusion and hospital admission. Some were started years earlier for reasons that no longer apply; others were intended as short-term treatments but were never stopped.</p>
<p>Dr Ingrid Solberg, a geriatrician who leads a deprescribing clinic, says that the main barrier is not knowledge. ‘Most doctors know which medicines are risky in older people. The difficulty is that stopping a medicine feels like taking responsibility in a way that continuing it does not. If a patient has a stroke after you stop their blood pressure tablets, you feel to blame. If they fall while still taking them, it seems like bad luck.’</p>
<p>Patients, too, can be reluctant. Some interpret a suggestion to stop a medicine as a sign that the doctor has given up on them. Others have been told for years that a particular tablet is essential, and are understandably confused when they hear the opposite. Solberg’s team has found that framing matters: ‘We don’t say “you don’t need this any more”. We say “your body has changed, and this medicine may now be doing more harm than good. Let’s see how you feel with a lower dose.”’</p>
<p>Evidence on outcomes is still developing. Several trials have shown that deprescribing can be done safely, with few adverse withdrawal effects, and some have reported fewer falls. However, studies have not consistently shown reductions in hospital admissions or deaths, partly because they have often been too small or too short. Critics also point out that much of the evidence for the original medicines comes from trials that excluded very old people, which makes it hard to know whether continuing them is beneficial at all.</p>
<p>Solberg sees the lack of evidence as a reason for caution in both directions. ‘We shouldn’t assume that stopping is always right. But we also shouldn’t assume that continuing is the safe option simply because it is the default.’ Her clinic now reviews medicines one at a time, with careful monitoring, and always asks what matters most to the patient. ‘For one person, it might be avoiding another fall. For another, it might be fewer tablets to swallow. Those priorities should guide the decision.’</p>
<p>She believes that the greatest change needs to happen earlier. ‘Every prescription should come with a plan for when it might be stopped. If we thought about the end at the beginning, there would be far less to undo.’</p>`,
      groups: [{
        type: 'mcq', tag: 'oet-rc', instructions: 'For questions 27–34, choose the answer (<b>A, B, C or D</b>) which you think fits best according to the text.',
        items: [
          { n: 27, q: 'In the first paragraph, the writer suggests that deprescribing', opts: ['is a recent scientific discovery.', 'goes against the usual direction of medical practice.', 'has been widely adopted.', 'is mainly a concern for pharmacists.'], a: 'B' },
          { n: 28, q: 'According to the second paragraph, some medicines are inappropriate because', opts: ['they were never effective.', 'they were prescribed by specialists.', 'the original reason for them no longer exists.', 'patients take them incorrectly.'], a: 'C' },
          { n: 29, q: 'Dr Solberg believes the main barrier to deprescribing is', opts: ['doctors\' lack of knowledge about risky medicines.', 'the feeling of responsibility for stopping a medicine.', 'the cost of reviewing medicines.', 'pressure from pharmaceutical companies.'], a: 'B' },
          { n: 30, q: 'Some patients are reluctant to stop medicines because they', opts: ['think the doctor has lost hope in them.', 'enjoy taking tablets.', 'cannot afford alternative treatments.', 'have experienced withdrawal effects.'], a: 'A' },
          { n: 31, q: "The example of what Solberg's team says to patients illustrates", opts: ['the importance of how the suggestion is expressed.', 'the need to stop medicines quickly.', 'the team\'s reliance on written information.', 'the risks of lowering doses.'], a: 'A' },
          { n: 32, q: 'What does the writer say about trials of deprescribing?', opts: ['They have shown clear reductions in deaths.', 'They have found serious withdrawal effects.', 'They have included mainly very old people.', 'They have not consistently shown fewer admissions.'], a: 'D' },
          { n: 33, q: "Solberg's comment about the 'default' suggests that", opts: ['continuing a medicine is always the safest choice.', 'stopping should be the default for older patients.', 'continuing a medicine should not be assumed to be safe.', 'there is enough evidence to make decisions.'], a: 'C' },
          { n: 34, q: 'In the final paragraph, Solberg recommends that', opts: ['prescriptions include a plan for stopping.', 'fewer medicines should be prescribed to older people.', 'all medicines should be reviewed annually.', 'patients should decide when to stop their medicines.'], a: 'A' }
        ]
      }]
    },
    {
      title: 'Part C — Text 2', label: 'C2', intro: 'Questions 35–42',
      passage: `<h3>Caring for the carers: understanding compassion fatigue</h3>
<p>Healthcare workers are expected to care deeply about their patients. Yet repeated exposure to suffering can take a toll. The term ‘compassion fatigue’ was coined to describe a state of emotional exhaustion in which professionals find it increasingly difficult to feel empathy. Although it is often used interchangeably with ‘burnout’, many researchers distinguish between the two: burnout is generally linked to workload and organisational pressures, whereas compassion fatigue arises specifically from the emotional demands of caring for people in distress.</p>
<p>The signs can be subtle. Nurses describe feeling detached from patients, irritable with colleagues, or unable to stop thinking about distressing cases at home. Some notice that they have started to avoid certain patients or conversations. Because these changes develop gradually, they are often recognised first by others rather than by the person affected.</p>
<p>Marcus Webb, a palliative care nurse who now runs well-being workshops for staff, believes the culture of healthcare makes the problem worse. ‘We’re trained to put patients first, which is right, but somewhere along the way that turns into the belief that our own needs don’t matter. Admitting that you’re struggling can feel like admitting you’re not good enough for the job.’</p>
<p>One intervention that has spread rapidly is the Schwartz Round, a regular forum in which staff from all disciplines discuss the emotional impact of their work. Unlike clinical meetings, the focus is not on solving problems but on sharing experiences. Evaluations suggest that participants feel less isolated and more able to empathise with patients and colleagues, although it is harder to show effects on outcomes such as sickness absence.</p>
<p>Webb is supportive of such initiatives but warns against seeing them as a complete solution. ‘A one-hour session once a month can’t compensate for constant understaffing. If people don’t have time for a break during a twelve-hour shift, offering them a mindfulness app is almost insulting.’ In his view, organisations must address the conditions that make compassion harder to sustain, including workload, the ability to take breaks, and access to supervision.</p>
<p>Interestingly, some research suggests that the opposite of compassion fatigue is not simply its absence but ‘compassion satisfaction’ — the sense of fulfilment that comes from helping others. Staff who report high levels of compassion satisfaction appear to be better protected against fatigue, even in demanding roles. For Webb, this is an encouraging finding. ‘It tells us that caring itself isn’t the problem. People don’t burn out because they care too much. They burn out when they care in conditions that make it impossible to care well.’</p>`,
      groups: [{
        type: 'mcq', tag: 'oet-rc', instructions: 'For questions 35–42, choose the answer (<b>A, B, C or D</b>) which you think fits best according to the text.',
        items: [
          { n: 35, q: 'According to the first paragraph, compassion fatigue differs from burnout because it', opts: ['is caused mainly by long working hours.', 'is less common among nurses.', 'results from the emotional demands of caring.', 'only affects senior staff.'], a: 'C' },
          { n: 36, q: 'The writer suggests that compassion fatigue is often', opts: ['noticed by colleagues before the person affected.', 'easy to diagnose in its early stages.', 'caused by a single distressing event.', 'linked to physical illness.'], a: 'A' },
          { n: 37, q: 'Marcus Webb believes healthcare culture', opts: ['encourages staff to talk about their feelings.', 'makes it hard for staff to admit difficulties.', 'places too little emphasis on patients.', 'is improving rapidly.'], a: 'B' },
          { n: 38, q: 'What is different about Schwartz Rounds compared with clinical meetings?', opts: ['They are only for doctors.', 'They focus on solving clinical problems.', 'They are held every day.', 'They focus on sharing emotional experiences.'], a: 'D' },
          { n: 39, q: 'Evaluations of Schwartz Rounds have shown that', opts: ['sickness absence has fallen significantly.', 'participants feel less alone.', 'they are unpopular with staff.', 'they reduce patient complaints.'], a: 'B' },
          { n: 40, q: "Webb's comment about a mindfulness app is intended to show that", opts: ['such apps are a useful first step.', 'staff should use technology more often.', 'small measures cannot replace changes to working conditions.', 'mindfulness has no scientific basis.'], a: 'C' },
          { n: 41, q: "The term 'compassion satisfaction' refers to", opts: ['the fulfilment of helping others.', 'patients\' satisfaction with care.', 'the absence of any fatigue.', 'a type of workplace reward.'], a: 'A' },
          { n: 42, q: 'In the final paragraph, Webb concludes that', opts: ['caring too much leads to burnout.', 'staff should care less to protect themselves.', 'compassion fatigue cannot be prevented.', 'poor working conditions, not caring, are the real problem.'], a: 'D' }
        ]
      }]
    }
  ]
};
