/* IELTS Academic Reading — Practice Test 2 (contenido original). */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['ielts-ra2'] = {
  id: 'ielts-ra2', exam: 'ielts', skill: 'reading', variant: 'academic', title: 'IELTS Academic Reading — Practice Test 2',
  summary: 'The story of glass · Bees in the city · Language and thought',
  meta: ['Academic', '3 textos', '40 preguntas', '60 min'], duration: 3600,
  parts: [
    {
      title: 'Reading Passage 1', label: 'Passage 1', intro: 'You should spend about 20 minutes on Questions 1–13.',
      passage: `<h3>A Transparent History</h3>
<p>Glass is so common today that it is easy to forget how remarkable it is: a solid that lets light pass through, made from little more than heated sand. The earliest glass objects, beads found in Mesopotamia, date from around 3,500 years ago. Historians are uncertain how glass was first discovered, though one theory suggests it was produced accidentally during the making of pottery or the smelting of metals, when sand mixed with other materials at very high temperatures.</p>
<p>For many centuries, glass was a luxury. Early craftsmen shaped it around a core of clay, a slow process that produced small containers for perfume and oil. Everything changed around the first century BCE, when glassblowers on the eastern coast of the Mediterranean discovered that molten glass could be inflated on the end of a hollow tube. Glassblowing made vessels quicker and cheaper to produce, and under the Roman Empire glass drinking cups became common in ordinary households.</p>
<p>Window glass developed much more slowly. Roman windows, where they existed, were thick and only partly transparent. In medieval Europe, the most impressive use of glass was in the coloured windows of cathedrals, where pieces of stained glass were joined with strips of lead to create pictures. Ordinary homes, by contrast, often had windows covered with oiled cloth or thin sheets of animal horn.</p>
<p>The Italian island of Murano became the centre of European glassmaking in the thirteenth century, when the government of Venice moved its glassworks there, partly to reduce the risk of fire in the crowded city. Murano’s craftsmen developed a particularly clear glass, which they called <i>cristallo</i>, and their techniques were so valuable that, for a time, glassmakers were forbidden to leave the republic.</p>
<p>Large, flat sheets of glass remained difficult to make until the twentieth century. In the 1950s, a British engineer developed the float process, in which molten glass is poured onto a bath of liquid tin. The glass spreads out and forms a perfectly flat surface without any need for grinding or polishing. Today, the vast majority of the world’s flat glass is produced in this way.</p>
<p>Glass continues to evolve. Optical fibres, thinner than a human hair, carry most of the world’s internet traffic as pulses of light. Smartphone screens use toughened glass that resists scratches, and some buildings now have ‘smart’ windows that darken automatically in strong sunlight, reducing the need for air conditioning. Yet glass also presents an environmental challenge: although it can be recycled indefinitely without losing quality, a large proportion still ends up in landfill.</p>`,
      groups: [
        {
          type: 'tfng', tag: 'tfng', title: 'Questions 1–7',
          instructions: 'Do the following statements agree with the information given in Reading Passage 1?<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
          items: [
            { n: 1, q: 'Experts know exactly how glass was first made.', a: 'FALSE' },
            { n: 2, q: 'The earliest method of shaping glass involved using clay.', a: 'TRUE' },
            { n: 3, q: 'Glassblowing was invented in Rome.', a: 'FALSE' },
            { n: 4, q: 'Roman glass cups were exported to Asia.', a: 'NOT GIVEN' },
            { n: 5, q: 'Most medieval homes had glass windows.', a: 'FALSE' },
            { n: 6, q: "Murano's glassworks were moved there partly for safety reasons.", a: 'TRUE' },
            { n: 7, q: 'Murano glass was more expensive than glass made elsewhere in Europe.', a: 'NOT GIVEN' }
          ]
        },
        {
          type: 'gap', limit: 2, tag: 'sentence-completion', title: 'Questions 8–13',
          instructions: 'Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
          content: `<p>8. The oldest known glass objects are [[8]] from Mesopotamia.</p>
            <p>9. Glassblowers used a [[9]] to inflate molten glass.</p>
            <p>10. In cathedral windows, pieces of coloured glass were joined with [[10]].</p>
            <p>11. In the float process, molten glass is poured onto liquid [[11]].</p>
            <p>12. Most internet traffic travels through [[12]].</p>
            <p>13. Smart windows can reduce the need for [[13]].</p>`,
          items: [{ n: 8, a: ['beads'] }, { n: 9, a: ['hollow tube', 'tube'] }, { n: 10, a: ['lead', 'strips of lead'] }, { n: 11, a: ['tin'] }, { n: 12, a: ['optical fibres', 'optical fibers'] }, { n: 13, a: ['air conditioning'] }]
        }
      ]
    },
    {
      title: 'Reading Passage 2', label: 'Passage 2', intro: 'You should spend about 20 minutes on Questions 14–26.',
      passage: `<h3>Bees in the City</h3>
<p><span class="para-label">A</span>When people think of bees, they usually imagine flowering meadows and farmland. Yet a growing body of research suggests that cities can be surprisingly good places for bees. In several European studies, researchers have found a greater variety of wild bee species in urban parks and gardens than in nearby areas of intensive agriculture, where large fields of a single crop offer flowers for only a few weeks each year.</p>
<p><span class="para-label">B</span>The reason lies partly in diversity. A typical city contains an enormous range of plants, from street trees and garden shrubs to the weeds that grow along railway lines. Because these plants flower at different times, they provide food from early spring until late autumn. Cities also tend to use fewer pesticides than farms, and they are often a few degrees warmer, which allows some species to remain active for longer.</p>
<p><span class="para-label">C</span>In recent years, urban beekeeping has become fashionable. Hives have appeared on the roofs of hotels, offices and museums, and many city councils have encouraged residents to keep bees. However, some ecologists have warned that this trend may do more harm than good. Honeybees are just one of many bee species, and they live in large colonies that can collect enormous quantities of nectar and pollen. Where hives are densely concentrated, there may not be enough food for wild bees, many of which live alone and travel only short distances.</p>
<p><span class="para-label">D</span>A study in one large European city illustrated the problem. As the number of hives increased over a decade, researchers recorded a decline in the frequency with which wild bees visited flowers. The authors did not claim that honeybees were the only cause, but they recommended that the city limit the number of new hives and focus instead on increasing the amount of food available.</p>
<p><span class="para-label">E</span>Food is not the only requirement. Many wild bees nest in the ground, in small patches of bare soil, while others use hollow plant stems or holes in old wood. Tidy parks with closely cut grass and no dead wood offer few nesting opportunities. Some cities have responded by leaving road verges uncut until late summer, and by installing ‘bee hotels’ — bundles of hollow tubes in a wooden frame — although these work only for certain species.</p>
<p><span class="para-label">F</span>Individual gardeners can make a difference too. Planting a variety of flowers that bloom in different seasons, avoiding pesticides and leaving part of the lawn to grow long can all help. Experts also recommend choosing simple, open flowers rather than highly bred varieties with many layers of petals, which can make the pollen difficult for bees to reach.</p>
<p><span class="para-label">G</span>None of this means that cities can replace the countryside. Many specialist bees depend on particular habitats, such as heathland or chalk grassland, which are rarely found in urban areas. But as natural habitats continue to shrink, cities may become an increasingly important refuge — provided they are planned with bees in mind.</p>`,
      groups: [
        {
          type: 'match', tag: 'matching', title: 'Questions 14–18', showOptions: false,
          instructions: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.',
          options: 'ABCDEFG'.split('').map(k => ({ k, t: '' })),
          items: [
            { n: 14, q: 'a description of places where wild bees make their nests', a: 'E' },
            { n: 15, q: 'a reason why farmland may be a poor environment for bees', a: 'A' },
            { n: 16, q: 'evidence of a possible negative effect of keeping honeybees', a: 'D' },
            { n: 17, q: 'a type of flower that bees find difficult to use', a: 'F' },
            { n: 18, q: 'a limitation of cities as habitats for bees', a: 'G' }
          ]
        },
        {
          type: 'mcq', tag: 'mcq', title: 'Questions 19–22', instructions: 'Choose the correct letter, <b>A, B, C or D</b>.',
          items: [
            { n: 19, q: 'According to paragraph B, one advantage of cities for bees is that', opts: ['they contain mainly native plants.', 'food is available over a long period.', 'they have more water.', 'they are cooler in summer.'], a: 'B' },
            { n: 20, q: 'Some ecologists are concerned that urban honeybees', opts: ['may compete with wild bees for food.', 'are more aggressive than wild bees.', 'carry diseases into the countryside.', 'produce less honey than rural bees.'], a: 'A' },
            { n: 21, q: 'The researchers in paragraph D recommended that the city', opts: ['ban beekeeping completely.', 'move hives to the countryside.', 'increase the supply of flowers.', 'study the problem for another decade.'], a: 'C' },
            { n: 22, q: "What does the writer say about 'bee hotels'?", opts: ['They are the best solution for all bees.', 'They are useful for only some species.', 'They have replaced uncut verges.', 'They are too expensive for most cities.'], a: 'B' }
          ]
        },
        {
          type: 'gap', limit: 3, tag: 'short-answer', title: 'Questions 23–26',
          instructions: 'Answer the questions below. Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each answer.',
          content: `<p>23. Apart from diversity of plants, what do cities use less of than farms? [[23]]</p>
            <p>24. Where have hives been placed on hotels and offices? [[24]]</p>
            <p>25. What should gardeners avoid using? [[25]]</p>
            <p>26. Name ONE habitat that specialist bees depend on. [[26]]</p>`,
          items: [{ n: 23, a: ['pesticides'] }, { n: 24, a: ['roofs', 'on the roofs', 'the roofs'] }, { n: 25, a: ['pesticides'] }, { n: 26, a: ['heathland', 'chalk grassland'] }]
        }
      ]
    },
    {
      title: 'Reading Passage 3', label: 'Passage 3', intro: 'You should spend about 20 minutes on Questions 27–40.',
      passage: `<h3>Does Language Shape Thought?</h3>
<p>Few questions in the study of language have provoked as much debate as whether the language we speak influences the way we think. In the 1930s, the American linguist Benjamin Lee Whorf argued that speakers of different languages experience the world in fundamentally different ways. His most famous claim concerned the Hopi language of North America, which he believed had no words or grammatical forms referring to time. Hopi speakers, he concluded, must understand time very differently from speakers of European languages.</p>
<p>Later researchers were less impressed. Detailed studies of Hopi showed that it does, in fact, have many ways of expressing time, and Whorf’s strongest claims — that language determines thought and that some ideas are impossible without the right words — fell out of favour. By the 1970s, many linguists believed that human thought was largely universal, and that languages differed only on the surface.</p>
<p>The debate was revived, however, by more careful experiments. One line of research has examined colour. Russian, for example, has separate basic words for light blue and dark blue. In laboratory tasks, Russian speakers were slightly faster than English speakers at distinguishing between shades that crossed this boundary. Interestingly, the advantage disappeared when participants were asked to repeat a string of numbers at the same time, suggesting that they were using language, perhaps silently, during the task.</p>
<p>Another area concerns space. Some languages, such as Guugu Yimithirr in Australia, describe locations using compass directions rather than words like ‘left’ and ‘right’. Speakers might say that a cup is to the north of a plate. Researcher Stephen Levinson found that speakers of such languages maintain a remarkable sense of direction, even in unfamiliar places, and tend to arrange objects according to compass points rather than their own bodies when asked to recreate a pattern.</p>
<p>Not all findings have held up. Lera Boroditsky reported that English and Mandarin speakers think about time differently, with Mandarin speakers more likely to imagine time vertically, but other teams were unable to reproduce the result. Critics such as Steven Pinker have argued that many of the effects are small and that people can easily think about ideas for which their language has no single word. After all, English speakers can understand the concept of light blue perfectly well.</p>
<p>Most researchers today take a middle position. Language does not imprison thought, but it can make certain distinctions more habitual, directing attention to some features of the world rather than others. The linguist Guy Deutscher has argued that languages differ not in what they allow speakers to express, but in what they oblige them to express. A speaker who must indicate the source of information in every sentence, as in some languages, may simply become more attentive to how they know what they know.</p>`,
      groups: [
        {
          type: 'ynng', tag: 'ynng', title: 'Questions 27–31',
          instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
          items: [
            { n: 27, q: "Whorf's description of the Hopi language was accurate.", a: 'NO' },
            { n: 28, q: 'Whorf learned to speak Hopi fluently.', a: 'NOT GIVEN' },
            { n: 29, q: 'The colour experiments suggest that language was involved in the task.', a: 'YES' },
            { n: 30, q: 'Guugu Yimithirr speakers lose their sense of direction in unfamiliar places.', a: 'NO' },
            { n: 31, q: 'Most researchers now believe that language completely determines thought.', a: 'NO' }
          ]
        },
        {
          type: 'match', tag: 'matching', title: 'Questions 32–36', optionsTitle: 'List of people',
          instructions: 'Match each statement with the correct person, <b>A–E</b>. <b>NB</b> You may use any letter more than once.',
          options: [{ k: 'A', t: 'Benjamin Lee Whorf' }, { k: 'B', t: 'Stephen Levinson' }, { k: 'C', t: 'Lera Boroditsky' }, { k: 'D', t: 'Steven Pinker' }, { k: 'E', t: 'Guy Deutscher' }],
          items: [
            { n: 32, q: 'reported a finding that other researchers could not repeat', a: 'C' },
            { n: 33, q: 'claimed that one group of speakers had a different understanding of time', a: 'A' },
            { n: 34, q: 'suggested that languages differ in what they require speakers to say', a: 'E' },
            { n: 35, q: 'studied how people recreate the arrangement of objects', a: 'B' },
            { n: 36, q: 'argued that many effects of language on thought are small', a: 'D' }
          ]
        },
        {
          type: 'match', tag: 'summary-completion', title: 'Questions 37–40', optionsTitle: 'Word box',
          instructions: 'Complete the summary using the list of words, <b>A–H</b>, below.',
          content: `<p>In colour experiments, Russian speakers were [[37]] than English speakers at telling apart certain shades of blue. This advantage disappeared when they had to repeat [[38]] during the task. Researchers today generally believe that language makes some distinctions more [[39]], guiding speakers’ [[40]] towards particular features of the world.</p>`,
          options: [{ k: 'A', t: 'faster' }, { k: 'B', t: 'slower' }, { k: 'C', t: 'numbers' }, { k: 'D', t: 'colours' }, { k: 'E', t: 'habitual' }, { k: 'F', t: 'impossible' }, { k: 'G', t: 'attention' }, { k: 'H', t: 'memory' }],
          items: [{ n: 37, q: 'Gap 37', a: 'A' }, { n: 38, q: 'Gap 38', a: 'C' }, { n: 39, q: 'Gap 39', a: 'E' }, { n: 40, q: 'Gap 40', a: 'G' }]
        }
      ]
    }
  ]
};
