/* OET Writing — casos originales con cartas modelo. */
window.DATA = window.DATA || {};
DATA.writing = DATA.writing || {};

DATA.writing.oet = [
  {
    id: 'ow1', profession: 'nursing', professionLabel: 'Nursing', title: 'Discharge letter — Mrs Ellis',
    notes: `<div class="cn-head"><b>Notes:</b><span>Assume that today's date is 20 October.</span><b>Patient:</b><span>Mrs Margaret Ellis</span><b>DOB:</b><span>14/03/1946</span><b>Hospital:</b><span>St Luke's Hospital, Surgical Ward 3</span><b>Admitted:</b><span>12/10 &nbsp; <b>Discharge:</b> 20/10</span></div>
<h4>Social background</h4><ul><li>Widow, lives alone, 2nd-floor flat (lift available)</li><li>Daughter (Karen) lives nearby, works part-time, visits daily</li><li>Independent with ADLs before admission; walked with stick</li><li>Enjoys gardening club (weekly)</li></ul>
<h4>Medical history</h4><ul><li>Type 2 diabetes — metformin 500 mg bd</li><li>Hypertension — amlodipine 5 mg daily</li><li>Osteoarthritis both knees</li><li>Cataract surgery 2019</li></ul>
<h4>Admission</h4><ul><li>Fall at home (tripped on rug) → fractured L neck of femur</li><li>13/10: L hip hemiarthroplasty</li></ul>
<h4>Nursing management / progress</h4><ul>
<li>Pain: regular paracetamol 1 g qid; codeine 30 mg prn (constipation → senna 15 mg nocte, now resolved)</li>
<li>Wound: 15 cm incision L hip, clips in situ; slight serous ooze day 3, now dry; dressing changed 19/10</li>
<li>Mobility: walking frame, approx. 20 m; independent transfers; daily physio exercises</li>
<li>OT: raised toilet seat + perching stool delivered to home 18/10</li>
<li>Night 2: mild confusion (resolved, ? due to codeine)</li>
<li>Blood glucose 6–11 mmol/L</li>
<li>Anxious about falling again; lacks confidence when walking alone</li></ul>
<h4>Discharge plan</h4><ul>
<li>Enoxaparin 40 mg SC daily for 28 days (started 13/10) — pt learning self-injection, not yet confident; daughter willing to help</li>
<li>Clip removal day 14 (27/10)</li><li>Wound check; monitor for signs of infection</li><li>Monitor blood glucose</li>
<li>Continue exercises; encourage mobility with frame</li><li>Referred to community falls prevention service</li>
<li>Orthopaedic clinic follow-up in 6 weeks</li></ul>`,
    task: "Using the information in the case notes, write a letter to Ms Joanna Price, Community Nurse, Riverside Community Health Centre, 45 Mill Lane, Northbridge, informing her of Mrs Ellis's discharge and outlining her ongoing care needs.",
    model: `Ms Joanna Price
Community Nurse
Riverside Community Health Centre
45 Mill Lane
Northbridge

20 October

Dear Ms Price,

Re: Mrs Margaret Ellis, DOB 14/03/1946

I am writing to inform you that Mrs Ellis, who underwent a left hip hemiarthroplasty on 13 October following a fractured neck of femur, is being discharged home today and requires your ongoing care.

Mrs Ellis requires a daily subcutaneous injection of enoxaparin 40 mg until 9 November. Although she has been learning to self-administer it, she is not yet confident, so I would be grateful if you could supervise her technique. Her daughter, who visits daily, is willing to assist.

Her 15 cm wound has clips in situ, which are due for removal on 27 October. There was a slight serous ooze on day three, but the wound is now dry. Please monitor it for signs of infection.

Mrs Ellis has type 2 diabetes, and her blood glucose has ranged from 6 to 11 mmol/L, so continued monitoring would be appreciated. Her pain is controlled with regular paracetamol. She experienced mild confusion while taking codeine, which has since resolved.

She is mobilising approximately 20 metres with a frame and should be encouraged to continue her physiotherapy exercises. However, she is anxious about falling again. She has been referred to the community falls prevention service, and a raised toilet seat and perching stool have been delivered to her home.

Should you have any questions, please do not hesitate to contact me.

Yours sincerely,

Charge Nurse
Surgical Ward 3, St Luke's Hospital`
  },
  {
    id: 'ow2', profession: 'medicine', professionLabel: 'Medicine', title: 'Referral letter — Mr Reid',
    notes: `<div class="cn-head"><b>Notes:</b><span>Assume that today's date is 5 November. You are a GP at Hillside Medical Practice.</span><b>Patient:</b><span>Mr Thomas Reid</span><b>DOB:</b><span>22/07/1967</span><b>Occupation:</b><span>Accountant (long hours, sedentary)</span></div>
<h4>Social history</h4><ul><li>Married, 2 adult children</li><li>Smoker — 20 cigarettes/day for 35 years; wants to quit</li><li>Alcohol: approx. 14 units/week</li><li>No regular exercise</li></ul>
<h4>Medical history</h4><ul><li>Hypertension (2018) — ramipril 5 mg daily</li><li>Appendicectomy (1990)</li><li>No known drug allergies</li></ul>
<h4>Family history</h4><ul><li>Father: MI aged 60</li><li>Mother: type 2 diabetes</li></ul>
<h4>Presenting complaint</h4><ul>
<li>3/52 central chest tightness on exertion (walking uphill, climbing stairs)</li>
<li>Relieved by rest within approx. 5 min</li><li>No pain at rest; no radiation; mild breathlessness during episodes</li>
<li>No palpitations, syncope or ankle swelling</li><li>Very anxious — worried about his job and family</li></ul>
<h4>Examination</h4><ul><li>BP 152/94, HR 78 regular, BMI 31</li><li>Heart sounds normal, chest clear, no peripheral oedema</li></ul>
<h4>Investigations</h4><ul><li>ECG: sinus rhythm, no acute changes</li><li>Total cholesterol 6.8 mmol/L; LDL 4.6 mmol/L</li><li>HbA1c 44 mmol/mol (normal)</li></ul>
<h4>Plan</h4><ul><li>Started: aspirin 75 mg daily, atorvastatin 40 mg daily, GTN spray prn</li>
<li>Smoking cessation advice; referred to stop-smoking service</li><li>Advised to call emergency services if pain at rest or lasting &gt;15 min</li>
<li>Refer to rapid access chest pain clinic for assessment and further investigation</li></ul>`,
    task: 'Using the information in the case notes, write a letter of referral to Dr Alan Brooks, Consultant Cardiologist, Rapid Access Chest Pain Clinic, City General Hospital, Park Road, Easton, requesting assessment and further investigation of Mr Reid.',
    model: `Dr Alan Brooks
Consultant Cardiologist
Rapid Access Chest Pain Clinic
City General Hospital
Park Road
Easton

5 November

Dear Dr Brooks,

Re: Mr Thomas Reid, DOB 22/07/1967

I am writing to refer Mr Reid, a 58-year-old accountant, for assessment and further investigation of exertional chest pain, which I suspect may be angina.

Mr Reid presented with a three-week history of central chest tightness when walking uphill or climbing stairs. The episodes are accompanied by mild breathlessness and are relieved by rest within approximately five minutes. He has not experienced pain at rest, palpitations or syncope.

He has several cardiovascular risk factors. He has smoked 20 cigarettes a day for 35 years, and his hypertension, treated with ramipril 5 mg daily, is not well controlled, with a blood pressure today of 152/94. His BMI is 31, and his father had a myocardial infarction at the age of 60.

On examination, his heart sounds were normal and there was no peripheral oedema. His ECG showed sinus rhythm with no acute changes. His total cholesterol was elevated at 6.8 mmol/L, while his HbA1c was normal.

I have started aspirin 75 mg daily, atorvastatin 40 mg daily and a GTN spray, and referred him to the stop-smoking service. He has been advised to call emergency services if he develops pain at rest. Mr Reid is understandably anxious about the implications for his work and family.

Thank you for seeing him.

Yours sincerely,

Dr
General Practitioner
Hillside Medical Practice`
  },
  {
    id: 'ow3', profession: 'nursing', professionLabel: 'Nursing', title: 'Transfer letter — Mr Novak',
    notes: `<div class="cn-head"><b>Notes:</b><span>Assume that today's date is 2 December. You are a registered nurse on the Medical Ward, Westfield Hospital.</span><b>Patient:</b><span>Mr Pavel Novak</span><b>DOB:</b><span>03/02/1952</span><b>Admitted:</b><span>24/11</span></div>
<h4>Social background</h4><ul><li>Retired electrician; lives with wife (Anna, 70) in bungalow</li><li>Wife has limited mobility (rheumatoid arthritis)</li><li>Speaks Czech and English; prefers Czech when tired</li></ul>
<h4>Medical history</h4><ul><li>COPD (2015) — tiotropium inhaler daily, salbutamol prn</li><li>Atrial fibrillation — apixaban 5 mg bd</li><li>Ex-smoker (stopped 2015)</li></ul>
<h4>Admission</h4><ul><li>Infective exacerbation of COPD</li><li>Treated with IV antibiotics (now completed), prednisolone 30 mg (day 7 of 7 today), nebulisers</li></ul>
<h4>Progress</h4><ul>
<li>O2 sats 90–92% on room air (target 88–92%)</li><li>Breathless on minimal exertion; walks 10 m with rollator</li>
<li>Appetite poor; weight loss 4 kg in 3 months; dietitian: oral nutritional supplements bd</li>
<li>Grade 2 pressure ulcer sacrum — hydrocolloid dressing, change every 3 days (last 1/12); 2-hourly repositioning</li>
<li>Low mood; says he feels 'a burden' to wife</li></ul>
<h4>Plan</h4><ul><li>Transfer to Oakwood Community Rehabilitation Unit 3/12 for pulmonary rehab and mobility</li>
<li>Continue nutritional supplements, monitor weight weekly</li><li>Pressure area care; next dressing change 4/12</li>
<li>Consider mood assessment; wife would like to be involved in discharge planning</li></ul>`,
    task: "Using the information in the case notes, write a letter to the Nurse in Charge, Oakwood Community Rehabilitation Unit, 12 Station Road, Westfield, to provide information about Mr Novak's condition and ongoing nursing care needs on his transfer tomorrow.",
    model: `Nurse in Charge
Oakwood Community Rehabilitation Unit
12 Station Road
Westfield

2 December

Dear Nurse in Charge,

Re: Mr Pavel Novak, DOB 03/02/1952

I am writing regarding Mr Novak, who will be transferred to your unit tomorrow for pulmonary rehabilitation following an infective exacerbation of COPD. I would like to outline his ongoing nursing needs.

Mr Novak was admitted on 24 November and has completed a course of intravenous antibiotics and today finishes seven days of prednisolone. His oxygen saturation is 90–92% on room air, within his target range of 88–92%. However, he remains breathless on minimal exertion and can walk only ten metres with a rollator.

He has a grade 2 sacral pressure ulcer, which is dressed with a hydrocolloid dressing changed every three days, with the next change due on 4 December. He also requires two-hourly repositioning.

His appetite is poor, and he has lost 4 kg over the past three months. The dietitian has prescribed oral nutritional supplements twice daily, and his weight should be monitored weekly.

Mr Novak has been in low mood and has said he feels a burden to his wife, who has limited mobility. A mood assessment may be beneficial, and his wife has asked to be involved in discharge planning. Please note that he may prefer to speak Czech when tired.

His regular medications include apixaban for atrial fibrillation and his usual inhalers.

Yours sincerely,

Registered Nurse
Medical Ward, Westfield Hospital`
  }
];
