/* IELTS Academic Reading — Practice Test 1 (contenido original). */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['ielts-ra1'] = {
  id: 'ielts-ra1', exam: 'ielts', skill: 'reading', variant: 'academic', title: 'IELTS Academic Reading — Practice Test 1',
  summary: 'Vertical farming · Ocean noise · The decision fatigue debate',
  meta: ['Academic', '3 textos', '40 preguntas', '60 min'], duration: 3600,
  parts: [
    {
      title: 'Reading Passage 1', label: 'Passage 1', intro: 'You should spend about 20 minutes on Questions 1–13.',
      passage: `<h3>Farming Upwards</h3>
<p>The idea of growing food in tall buildings is not new. In 1909 an American magazine published a drawing of a skyscraper with a separate farm on each floor, complete with houses and livestock. For most of the twentieth century, however, the concept remained a curiosity, appearing in science fiction rather than in agricultural research. It was not until the late 1990s that an ecology professor in New York, working with his students, began to calculate whether a multi-storey farm could feed a significant number of city residents. Their conclusions, though optimistic, attracted wide attention and gave the movement its name: vertical farming.</p>
<p>Modern vertical farms rarely resemble those early visions. Most are located in converted warehouses or shipping containers rather than purpose-built towers, and the ‘vertical’ element refers to the stacked shelves on which crops are grown. Instead of soil, plants are usually grown hydroponically, with their roots suspended in water containing dissolved nutrients. Some farms use aeroponics, in which the roots hang in the air and are sprayed with a fine nutrient mist; this method uses even less water but is more expensive to maintain.</p>
<p>Supporters point to several advantages. Because the environment is fully controlled, crops can be harvested all year round, regardless of the weather outside. Pests are rare, so pesticides are generally unnecessary. Water use is dramatically lower than in field agriculture, because the water is recycled through the system rather than being lost to the ground or to evaporation. And because farms can be built close to where people live, the distance food travels from farm to plate — and the fuel needed to transport it — can be greatly reduced.</p>
<p>The greatest obstacle is energy. In a field, sunlight is free; in a windowless warehouse, every unit of light must be supplied by electric lamps. Although light-emitting diodes (LEDs) have become far more efficient over the past two decades, lighting still accounts for the largest share of a vertical farm’s running costs, followed by the heating, ventilation and cooling systems needed to keep temperature and humidity stable. Critics argue that unless this electricity comes from renewable sources, the environmental benefits of vertical farming may be cancelled out.</p>
<p>Economics also limit which crops are grown. Leafy greens such as lettuce, spinach and herbs dominate the industry, because they grow quickly, are compact and sell for a relatively high price per kilogram. Staple crops such as wheat and rice, by contrast, need large amounts of light and space and are worth little per kilogram, so growing them indoors makes no financial sense. Several companies have experimented with strawberries and tomatoes, but these require pollination, which in a sealed room must be done either by hand or by introducing bees.</p>
<p>Despite these limitations, investment in the sector has grown considerably, although a number of high-profile companies have both opened and closed in recent years — a sign of an industry still searching for a sustainable business model. Researchers are now working on crop varieties bred specifically for indoor conditions, such as shorter plants with fewer inedible parts, as well as on lighting ‘recipes’ that adjust the colour of light to each stage of growth. Few experts believe that vertical farms will replace traditional agriculture, but many expect them to become a permanent feature of urban food systems, particularly in regions with little fertile land or extreme climates.</p>`,
      groups: [
        {
          type: 'tfng', tag: 'tfng', title: 'Questions 1–6',
          instructions: 'Do the following statements agree with the information given in Reading Passage 1?<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
          items: [
            { n: 1, q: 'The 1909 drawing showed animals being kept in a tall building.', a: 'TRUE' },
            { n: 2, q: "The New York professor's calculations were first published in a scientific journal.", a: 'NOT GIVEN' },
            { n: 3, q: 'Most modern vertical farms are housed in buildings designed specifically for agriculture.', a: 'FALSE' },
            { n: 4, q: 'Aeroponic systems are cheaper to maintain than hydroponic systems.', a: 'FALSE' },
            { n: 5, q: 'Vertical farms can produce crops in every season.', a: 'TRUE' },
            { n: 6, q: 'Most of the LEDs used in vertical farms are manufactured in Asia.', a: 'NOT GIVEN' }
          ]
        },
        {
          type: 'gap', limit: 2, tag: 'note-completion', title: 'Questions 7–13',
          instructions: 'Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
          content: `<h4>Vertical farming</h4><p><b>Advantages</b></p><ul>
            <li>little need for [[7]] because pests are uncommon</li>
            <li>water is [[8]] rather than lost</li>
            <li>shorter transport distances mean less [[9]] is used</li></ul>
            <p><b>Problems</b></p><ul>
            <li>high energy costs: lighting, and systems that control temperature and [[10]]</li>
            <li>most farms grow [[11]] because they are fast-growing and valuable</li>
            <li>strawberries and tomatoes need [[12]], done by hand or by bees</li></ul>
            <p><b>Research</b></p><ul><li>lighting ‘recipes’ change the [[13]] of light at different stages</li></ul>`,
          items: [
            { n: 7, a: ['pesticides'] }, { n: 8, a: ['recycled'] }, { n: 9, a: ['fuel'] }, { n: 10, a: ['humidity'] },
            { n: 11, a: ['leafy greens'] }, { n: 12, a: ['pollination'] }, { n: 13, a: ['colour', 'color'] }
          ]
        }
      ]
    },
    {
      title: 'Reading Passage 2', label: 'Passage 2', intro: 'You should spend about 20 minutes on Questions 14–26.',
      passage: `<h3>The Sound of the Sea</h3>
<p><span class="para-label">A</span>For much of history, the ocean was imagined as a silent world. In reality, the sea is full of sound. Because water is much denser than air, sound travels through it more than four times faster and over far greater distances. Many marine animals depend on it: whales use song to communicate across hundreds of kilometres, dolphins locate prey through echolocation, and the larvae of some reef fish appear to find their way to suitable homes by following the crackling noise produced by snapping shrimp on healthy reefs.</p>
<p><span class="para-label">B</span>Over the past century and a half, humans have added a new layer of sound. The largest contributor is commercial shipping: the propellers and engines of large vessels produce a constant low-frequency hum that can be detected far from shipping lanes. In addition, the search for oil and gas relies on seismic surveys, in which arrays of airguns fire powerful pulses at the seabed every few seconds, sometimes for weeks. Naval sonar, the construction of offshore wind farms — where steel foundations are hammered into the sea floor — and even recreational boats all add to the total.</p>
<p><span class="para-label">C</span>The consequences for marine life are varied. The most widespread is ‘masking’: when background noise overlaps with the frequencies animals use, their calls can no longer be heard over the same distances. Some whales have been observed calling louder or for longer in noisy conditions, much as people raise their voices in a crowded restaurant. Short, intense sounds can cause temporary or permanent hearing damage, and several mass strandings of beaked whales have been linked to naval sonar exercises. Less visible, but potentially significant, are the effects of chronic stress, which may reduce feeding and reproduction.</p>
<p><span class="para-label">D</span>Measuring these effects, however, is notoriously difficult. Many marine species are hard to observe, and there are few recordings of what the ocean sounded like before industrial shipping, so scientists lack a clear baseline. Experiments in which animals are deliberately exposed to noise raise ethical questions, and results from captive animals may not reflect behaviour in the wild. An unexpected opportunity arose in 2020, when a global slowdown in travel and trade led to a sharp fall in shipping traffic. Researchers with underwater microphones already in place were able to compare noise levels — and animal behaviour — before and during this unusual period of quiet.</p>
<p><span class="para-label">E</span>Fortunately, a number of practical solutions exist. Much of the noise from ships is caused by cavitation, the formation and collapse of tiny bubbles around a spinning propeller. Better propeller design and regular hull cleaning can reduce this considerably, and many of these measures also improve fuel efficiency. Simply slowing down is surprisingly effective: in trials, ships that reduced their speed by a few knots produced substantially less noise. For construction projects, ‘bubble curtains’ — rings of air bubbles released around the site — can absorb much of the sound from pile driving, while restricting the noisiest activities to seasons when sensitive species are absent offers further protection.</p>
<p><span class="para-label">F</span>Unlike chemical pollution, which may persist in the environment for decades, noise disappears almost as soon as its source is switched off. In this sense, it may be one of the most easily reversible forms of human impact on the ocean. Yet regulation remains limited. International guidelines on reducing shipping noise exist, but they are voluntary, and few countries monitor underwater noise systematically. Many scientists argue that a quieter ocean is achievable within a generation — if governments and the shipping industry treat noise as seriously as other forms of pollution.</p>`,
      groups: [
        {
          type: 'match', tag: 'matching-headings', title: 'Questions 14–19', optionsTitle: 'List of Headings',
          instructions: 'Reading Passage 2 has six paragraphs, <b>A–F</b>. Choose the correct heading for each paragraph from the list of headings below.',
          options: [
            { k: 'i', t: 'A form of pollution that could be reversed quickly' }, { k: 'ii', t: 'Obstacles to gathering reliable evidence' },
            { k: 'iii', t: 'The main sources of human-made noise' }, { k: 'iv', t: 'A naturally noisy environment' },
            { k: 'v', t: 'Technical and practical ways to reduce noise' }, { k: 'vi', t: 'How sea creatures are affected' },
            { k: 'vii', t: 'The high cost of quieter ships' }, { k: 'viii', t: 'Why some marine animals avoid sound' }
          ],
          items: [{ n: 14, q: 'Paragraph A', a: 'iv' }, { n: 15, q: 'Paragraph B', a: 'iii' }, { n: 16, q: 'Paragraph C', a: 'vi' }, { n: 17, q: 'Paragraph D', a: 'ii' }, { n: 18, q: 'Paragraph E', a: 'v' }, { n: 19, q: 'Paragraph F', a: 'i' }]
        },
        {
          type: 'mcq', tag: 'mcq', title: 'Questions 20–22', instructions: 'Choose the correct letter, <b>A, B, C or D</b>.',
          items: [
            { n: 20, q: 'According to paragraph A, the larvae of some reef fish', opts: ['produce crackling sounds to communicate.', 'use sounds made by shrimp to find a reef.', 'are attracted by the songs of whales.', 'avoid areas where shrimp are present.'], a: 'B' },
            { n: 21, q: 'What does the writer say about the events of 2020?', opts: ['They proved that noise causes whale strandings.', 'They allowed scientists to study a quieter ocean.', 'They led directly to new international rules.', 'They showed that earlier baseline recordings were accurate.'], a: 'B' },
            { n: 22, q: "What is the writer's main point in paragraph F?", opts: ['Chemical pollution is a more serious problem than noise.', 'Most countries now monitor underwater noise.', 'Ocean noise could be reduced if it were taken seriously.', 'The shipping industry has rejected the international guidelines.'], a: 'C' }
          ]
        },
        {
          type: 'match', tag: 'summary-completion', title: 'Questions 23–26', optionsTitle: 'Word box',
          instructions: 'Complete the summary using the list of words, <b>A–H</b>, below.',
          content: `<p><b>Reducing noise at sea</b></p><p>A major cause of noise from ships is [[23]], which occurs around spinning propellers. Improving propeller design and keeping the hull clean reduces noise and also lowers [[24]] consumption. Reducing a vessel’s [[25]] has also proven effective. During construction, bubble curtains absorb the noise of pile driving, and the most disruptive work can be limited to particular [[26]].</p>`,
          options: [{ k: 'A', t: 'cavitation' }, { k: 'B', t: 'fuel' }, { k: 'C', t: 'speed' }, { k: 'D', t: 'seasons' }, { k: 'E', t: 'engines' }, { k: 'F', t: 'depth' }, { k: 'G', t: 'regulations' }, { k: 'H', t: 'locations' }],
          items: [{ n: 23, q: 'Gap 23', a: 'A' }, { n: 24, q: 'Gap 24', a: 'B' }, { n: 25, q: 'Gap 25', a: 'C' }, { n: 26, q: 'Gap 26', a: 'D' }]
        }
      ]
    },
    {
      title: 'Reading Passage 3', label: 'Passage 3', intro: 'You should spend about 20 minutes on Questions 27–40.',
      passage: `<h3>Running on Empty? The Debate over Decision Fatigue</h3>
<p>Every day we make a large number of decisions, from trivial choices about what to eat to consequential ones at work. In the late 1990s, a group of psychologists proposed that willpower operates like a muscle: it draws on a limited supply of mental energy, which becomes depleted with use. They called this state ‘ego depletion’. In a typical experiment, participants who first had to resist a plate of freshly baked biscuits and eat radishes instead gave up sooner on an unsolvable puzzle than participants who had been allowed to eat the biscuits. The researchers concluded that the act of resisting had used up some of the participants’ self-control.</p>
<p>The idea proved enormously popular. Over the next fifteen years, hundreds of studies appeared to confirm it, and the related concept of ‘decision fatigue’ — the notion that the quality of our choices deteriorates after a long series of decisions — spread from academic journals into business books and newspaper columns. One widely cited study of judges reviewing parole applications reported that favourable rulings were most common at the start of the day and immediately after meal breaks, and fell to almost zero just before a break. To many readers, this seemed a dramatic illustration of how tiredness could affect even experienced professionals.</p>
<p>Some researchers went further and proposed a biological mechanism. Self-control, they suggested, consumed glucose, the brain’s main fuel, and a sugary drink could therefore restore depleted willpower. This claim attracted particular criticism. Physiologists pointed out that the brain’s total energy consumption changes very little between demanding and undemanding tasks, and later studies found that merely rinsing the mouth with a sugary drink, without swallowing it, produced similar effects — suggesting that any benefit was related to motivation or reward rather than to fuel.</p>
<p>More serious doubts emerged in the 2010s, when psychology as a whole began to confront what became known as the ‘replication crisis’. Many well-known findings, when tested again with larger samples and methods registered in advance, failed to appear. In 2016, a large collaborative project involving more than twenty laboratories attempted to reproduce a standard ego-depletion effect and found an effect close to zero. The parole study was also re-examined: critics noted that cases were not heard in random order, and that prisoners without legal representation tended to be scheduled at the end of each session — which could explain the pattern without any reference to fatigue.</p>
<p>It would be wrong, however, to conclude that mental tiredness is a myth. People clearly feel fatigued after long periods of concentrated work, and studies in hospitals have found that doctors are more likely to prescribe unnecessary antibiotics, and to order fewer preventive tests, later in their shifts. What remains uncertain is the explanation. One alternative account suggests that fatigue is not the exhaustion of a resource but a signal: a feeling generated by the brain to encourage us to switch away from tasks whose rewards seem low compared with other things we could be doing. On this view, motivation, beliefs and the perceived value of a task all matter. Interestingly, some studies have found that people who believe willpower is unlimited show little or no depletion effect.</p>
<p>For individuals and organisations, the practical lessons may therefore be more modest than the popular literature suggests. Reducing unnecessary choices — through routines, default options or checklists — is still sensible, not because each decision drains a tank of willpower, but because it frees attention for the decisions that matter. Regular breaks appear to be beneficial, whatever the mechanism. What seems less justified is the idea that a quick sugary snack can restore good judgement, or that every afternoon decision is inevitably worse than a morning one. As one researcher has put it, the brain is not a battery; it is more like an investor, constantly deciding where its effort is best spent.</p>`,
      groups: [
        {
          type: 'ynng', tag: 'ynng', title: 'Questions 27–31',
          instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
          items: [
            { n: 27, q: 'The early ego-depletion experiments were carried out carelessly.', a: 'NOT GIVEN' },
            { n: 28, q: 'The parole study appeared to show that experienced professionals are also affected by tiredness.', a: 'YES' },
            { n: 29, q: 'Physiologists generally accepted the glucose explanation of self-control.', a: 'NO' },
            { n: 30, q: 'The 2016 project was the first attempt to replicate the ego-depletion effect.', a: 'NOT GIVEN' },
            { n: 31, q: 'Mental fatigue is not a genuine experience.', a: 'NO' }
          ]
        },
        {
          type: 'match', tag: 'matching-endings', title: 'Questions 32–36', compact: false,
          instructions: 'Complete each sentence with the correct ending, <b>A–G</b>, below.',
          options: [
            { k: 'A', t: 'may have been linked to whether prisoners had a lawyer.' }, { k: 'B', t: 'show little sign of depletion.' },
            { k: 'C', t: 'gave up more quickly on a difficult task.' }, { k: 'D', t: 'improved their performance after a break.' },
            { k: 'E', t: 'suggested that motivation, not energy, was involved.' }, { k: 'F', t: 'were more likely to prescribe antibiotics.' },
            { k: 'G', t: 'acts as a signal to change activity.' }
          ],
          items: [
            { n: 32, q: 'In the original experiment, participants who resisted the biscuits', a: 'C' },
            { n: 33, q: 'The effect of rinsing the mouth with a sugary drink', a: 'E' },
            { n: 34, q: 'In the re-examined parole study, the order of cases', a: 'A' },
            { n: 35, q: 'According to the alternative account, fatigue', a: 'G' },
            { n: 36, q: 'People who believe willpower is unlimited', a: 'B' }
          ]
        },
        {
          type: 'mcq', tag: 'mcq', title: 'Questions 37–40', instructions: 'Choose the correct letter, <b>A, B, C or D</b>.',
          items: [
            { n: 37, q: 'The writer mentions business books and newspaper columns in order to show', opts: ['how far the idea spread beyond academic research.', 'that journalists misunderstood the original studies.', 'why the parole study was criticised.', 'that business leaders were the first to question the idea.'], a: 'A' },
            { n: 38, q: 'What did critics point out about the parole study?', opts: ['The judges took too few breaks.', 'Cases were not scheduled randomly.', 'The number of cases was too small.', 'The results had been calculated incorrectly.'], a: 'B' },
            { n: 39, q: 'The hospital studies in paragraph 5 suggest that doctors', opts: ['make different decisions later in a shift.', 'are unaware of their own tiredness.', 'prescribe fewer antibiotics after breaks.', 'are more affected by fatigue than judges.'], a: 'A' },
            { n: 40, q: "Which statement best summarises the writer's conclusion?", opts: ['Decision fatigue has been completely disproved.', 'Sugary snacks are an effective way to improve judgement.', 'Some advice linked to decision fatigue is still useful, but for different reasons.', 'Organisations should make all important decisions in the morning.'], a: 'C' }
          ]
        }
      ]
    }
  ]
};
