/* OET Speaking — role-plays originales (tarjeta del candidato + intervenciones del paciente). */
window.DATA = window.DATA || {};
DATA.speaking = DATA.speaking || {};

DATA.speaking.oet = [
  {
    id: 'or1', profession: 'nursing', professionLabel: 'Nursing', setting: 'Hospital ward', title: 'Anxious patient before discharge with a new inhaler',
    candidate: {
      intro: 'You are a nurse on a medical ward. The patient, who was admitted with an asthma attack, is going home today with a new preventer inhaler. They are worried about using steroids.',
      tasks: ['Find out what the patient already knows about the new inhaler.', 'Explain the difference between the preventer and the reliever inhaler in simple terms.', 'Reassure the patient about their concerns regarding steroids (low dose, inhaled, rinse mouth after use).', 'Check the patient’s inhaler technique and explain how to improve it.', 'Advise when to seek urgent help (reliever not helping, unable to speak in full sentences).']
    },
    patient: {
      g: 'f', opener: "Hi. They told me I'm going home today, but to be honest I'm a bit nervous about this new inhaler.",
      lines: [
        "Well, the doctor said it's a steroid. My neighbour took steroids for years and she put on loads of weight. I really don't want that.",
        "So what's the difference between this one and my blue one? Can't I just use the blue one when I need it?",
        "Do I have to take it every day, even when I feel fine?",
        "Can you watch me? I think I just breathe in and press... like this?",
        "OK. And what if I have another attack at home? How will I know it's serious?",
        "Thank you. I feel a lot better about it now."
      ]
    }
  },
  {
    id: 'or2', profession: 'nursing', professionLabel: 'Nursing', setting: 'Community clinic', title: 'Parent of a child with a burn',
    candidate: {
      intro: 'You are a nurse in a community clinic. A parent has brought their 4-year-old child, who spilled hot tea on their forearm yesterday. The burn is superficial and has been dressed. The parent feels guilty and wants to know about scarring.',
      tasks: ['Acknowledge the parent’s feelings and reassure them.', 'Explain how to care for the dressing at home (keep dry, do not remove, return in 2 days).', 'Explain pain relief (paracetamol according to the child’s age and weight).', 'Describe signs of infection (redness spreading, fever, smell, increasing pain).', 'Give advice on preventing future accidents in the home.']
    },
    patient: {
      g: 'f', opener: "I feel terrible. I only turned my back for a second and he knocked the cup over.",
      lines: [
        "Will it leave a scar? He's only four.",
        "Can he have a bath tonight? He hates going to bed without one.",
        "He kept waking up last night because it hurt. What can I give him?",
        "How will I know if something is going wrong with it?",
        "Is there anything I should be doing differently at home?",
        "OK, I'll do that. When do we need to come back?"
      ]
    }
  },
  {
    id: 'or3', profession: 'medicine', professionLabel: 'Medicine', setting: 'General practice', title: 'Patient requesting antibiotics for a sore throat',
    candidate: {
      intro: 'You are a GP. The patient has had a sore throat, runny nose and mild cough for three days. There is no fever and examination is consistent with a viral infection. The patient is asking for antibiotics because they have an important event this weekend.',
      tasks: ['Explore the patient’s concerns and expectations.', 'Explain that the infection is most likely viral and that antibiotics will not help.', 'Explain the risks of unnecessary antibiotics (side effects, resistance) without jargon.', 'Suggest ways to manage symptoms (fluids, rest, paracetamol or ibuprofen, lozenges).', 'Agree on safety-netting advice: when to return (high fever, difficulty swallowing, symptoms beyond 7–10 days).']
    },
    patient: {
      g: 'm', opener: "Hi doctor. I've got a really bad sore throat and I need some antibiotics, please. I've got my sister's wedding on Saturday.",
      lines: [
        "But last time I had this, the doctor gave me antibiotics and I got better in a couple of days.",
        "What's the harm in just taking them, though? Just in case?",
        "So what am I supposed to do? I can't go to the wedding feeling like this.",
        "Is there anything I can buy at the pharmacy?",
        "And what if it gets worse? I don't want to be ill on the day.",
        "OK, I suppose that makes sense. Thanks for explaining."
      ]
    }
  },
  {
    id: 'or4', profession: 'medicine', professionLabel: 'Medicine', setting: 'Hospital outpatient clinic', title: 'Explaining a new diagnosis of type 2 diabetes',
    candidate: {
      intro: 'You are a doctor in an outpatient clinic. The patient’s recent blood tests confirm type 2 diabetes. The patient is shocked and thinks they will need insulin injections immediately.',
      tasks: ['Find out what the patient knows about diabetes and how they are feeling.', 'Explain the diagnosis in simple terms.', 'Reassure the patient that treatment usually starts with lifestyle changes and tablets (metformin).', 'Discuss lifestyle changes (diet, physical activity, weight loss) and agree on realistic goals.', 'Explain follow-up: diabetes education course, regular checks (eyes, feet, kidneys).']
    },
    patient: {
      g: 'm', opener: "So, the nurse said you had my test results. Is it bad news?",
      lines: [
        "Diabetes? My uncle had that. He had to inject himself every day and eventually lost his leg.",
        "So I'm going to have to have injections?",
        "What does that mean, though? What is actually wrong with my body?",
        "I don't really have time to exercise. I work twelve-hour shifts.",
        "Is this something that will go away if I lose weight?",
        "What happens next? Do I need to come back?"
      ]
    }
  },
  {
    id: 'or5', profession: 'other', professionLabel: 'Pharmacy / Physio / General', setting: 'Community pharmacy', title: 'Patient wanting to stop blood pressure tablets',
    candidate: {
      intro: 'You are a healthcare professional. An elderly patient started amlodipine two weeks ago and now has swollen ankles. They want to stop taking the tablets.',
      tasks: ['Find out about the patient’s symptoms and concerns.', 'Explain that ankle swelling is a known side effect.', 'Advise against stopping the medication suddenly without speaking to the doctor.', 'Suggest practical measures (raise legs when sitting) and arrange a review with the GP.', 'Check understanding and summarise the plan.']
    },
    patient: {
      g: 'f', opener: "Hello. I want to ask about these new tablets. I think they're doing me more harm than good.",
      lines: [
        "Look at my ankles. They've been like this since I started taking them. My shoes don't fit.",
        "I'm just going to stop taking them. My blood pressure was fine before, I felt fine.",
        "Why can't I just stop? What will happen?",
        "Is there something else I could take instead?",
        "So what should I do until I see the doctor?",
        "Right, thank you. I'll call the surgery this afternoon."
      ]
    }
  }
];
