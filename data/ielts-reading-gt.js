/* IELTS General Training Reading — Practice Test 1 (contenido original). */
window.DATA = window.DATA || { tests: {} };
DATA.tests = DATA.tests || {};

DATA.tests['ielts-rg1'] = {
  id: 'ielts-rg1', exam: 'ielts', skill: 'reading', variant: 'general', title: 'IELTS General Training Reading — Practice Test 1',
  summary: 'Evening classes · Library rules · Workplace guides · The return of the tram',
  meta: ['General Training', '3 secciones', '40 preguntas', '60 min'], duration: 3600,
  parts: [
    {
      title: 'Section 1', label: 'Section 1', intro: 'Questions 1–14',
      passage: `<h3>Evening Classes at Northfield Community College</h3>
<p><span class="para-label">A</span><b>Practical Photography</b> — Tuesdays, 7–9 pm, 10 weeks, £120. Learn to take better pictures with any digital camera, including a smartphone. The course includes two Saturday field trips to local beauty spots. Beginners welcome.</p>
<p><span class="para-label">B</span><b>Conversational Spanish</b> — Mondays and Wednesdays, 6.30–8 pm, 8 weeks, £95. Aimed at learners who already have a basic knowledge of the language; not suitable for complete beginners. All course materials are included in the price.</p>
<p><span class="para-label">C</span><b>Bookkeeping for Small Businesses</b> — Thursdays, 6–9 pm, 6 weeks, £150. Learn to keep accurate accounts and prepare simple tax returns. Students who pass the final assessment receive a nationally recognised certificate. Laptops are provided.</p>
<p><span class="para-label">D</span><b>Furniture Restoration</b> — Saturdays, 10 am–1 pm, 12 weeks, £180. Bring one small item of furniture to work on. Tools are provided, but materials such as wax and varnish are charged separately (approximately £20).</p>
<p><span class="para-label">E</span><b>Healthy Cooking on a Budget</b> — Wednesdays, 7–9 pm, 5 weeks, £60. All ingredients are included, and you take home everything you cook. A 20% discount is available for students aged over 60.</p>
<hr>
<h3>Westbridge Public Library — Membership Information</h3>
<p><b>Joining.</b> Membership is free for anyone who lives, works or studies in the county. To join, please bring proof of address, such as a utility bill or bank statement dated within the last three months. Children under 16 must have a parent or guardian sign the application form.</p>
<p><b>Borrowing.</b> Adult members may borrow up to 12 items at a time. Books are lent for three weeks and DVDs for one week. Items can be renewed up to three times online, by phone or in person, unless another member has reserved them.</p>
<p><b>Charges.</b> There are no late charges on children’s books. Adult items returned late are charged at 20p per day, up to a maximum of £6 per item. Reservations cost 50p per item, but are free for items in the library’s own collection.</p>
<p><b>Computers and Wi-Fi.</b> Members can use the public computers for up to two hours per day free of charge. Printing costs 10p per black-and-white page. Free Wi-Fi is available to all visitors, whether or not they are members.</p>
<p><b>Opening hours.</b> Monday–Friday 9 am–7 pm; Saturday 9 am–5 pm. Closed on Sundays and public holidays. A book drop outside the main entrance is available 24 hours a day.</p>`,
      groups: [
        {
          type: 'match', tag: 'matching', title: 'Questions 1–7', showOptions: false,
          instructions: 'Look at the five course descriptions, <b>A–E</b>. For which course are the following statements true? <b>NB</b> You may use any letter more than once.',
          options: 'ABCDE'.split('').map(k => ({ k, t: '' })),
          items: [
            { n: 1, q: 'It can lead to a qualification.', a: 'C' }, { n: 2, q: 'It takes place at the weekend.', a: 'D' },
            { n: 3, q: 'Students need some previous knowledge.', a: 'B' }, { n: 4, q: 'It includes visits to places outside the college.', a: 'A' },
            { n: 5, q: 'Older students pay less.', a: 'E' }, { n: 6, q: 'Students will have to pay an extra amount for materials.', a: 'D' },
            { n: 7, q: 'Classes are held twice a week.', a: 'B' }
          ]
        },
        {
          type: 'tfng', tag: 'tfng', title: 'Questions 8–14',
          instructions: 'Do the following statements agree with the information in the library text?<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
          items: [
            { n: 8, q: 'People who work in the county but live elsewhere can join the library.', a: 'TRUE' },
            { n: 9, q: 'A passport is accepted as proof of address.', a: 'NOT GIVEN' },
            { n: 10, q: 'DVDs may be borrowed for three weeks.', a: 'FALSE' },
            { n: 11, q: 'Members can renew an item even if someone else has reserved it.', a: 'FALSE' },
            { n: 12, q: 'The highest late charge for one adult item is £6.', a: 'TRUE' },
            { n: 13, q: 'Visitors who are not members can use the Wi-Fi.', a: 'TRUE' },
            { n: 14, q: 'The library is open on Sunday mornings.', a: 'FALSE' }
          ]
        }
      ]
    },
    {
      title: 'Section 2', label: 'Section 2', intro: 'Questions 15–27',
      passage: `<h3>Harwood Logistics — Annual Leave: A Guide for Staff</h3>
<p><b>Entitlement.</b> Full-time employees are entitled to 25 days of paid annual leave per year, in addition to public holidays. Part-time employees receive a pro-rata entitlement, calculated according to the number of hours in their contract. After five years of continuous service, staff receive two additional days of leave.</p>
<p><b>The leave year</b> runs from 1 April to 31 March. Up to five unused days may be carried over into the next leave year, but these must be taken by the end of June. Any days not used by then will be lost.</p>
<p><b>Requesting leave.</b> All requests must be submitted through the staff portal. Requests for periods of more than one week should be made at least four weeks in advance. Your line manager will normally respond within five working days. Please note that during the company’s peak season, from mid-November to the end of December, leave is restricted and is only granted in exceptional circumstances.</p>
<p><b>Sickness during leave.</b> If you fall ill while on annual leave, you may be able to reclaim the days affected. To do this, you must inform your manager on the first day of illness and provide a medical certificate.</p>
<p><b>Leaving the company.</b> If you leave, you will be paid for any leave that you have earned but not taken. If you have taken more leave than you have earned, the difference will be deducted from your final salary.</p>
<hr>
<h3>Manual Handling Training — What You Need to Know</h3>
<p>All warehouse staff must complete manual handling training within their first month of employment and attend a refresher course every two years. The course lasts half a day and is held in the training room on the first floor.</p>
<p><b>Before lifting.</b> Assess the load: check its weight and whether it is stable. If it weighs more than 25 kilograms, do not lift it alone — use a trolley or ask a colleague for help. Make sure that your route is clear of obstacles and that you know where you will put the load down.</p>
<p><b>Lifting.</b> Stand close to the load with your feet apart. Bend your knees, not your back, and keep your back straight. Hold the load close to your waist and avoid twisting your body; turn by moving your feet instead.</p>
<p><b>Equipment.</b> Gloves must be worn when handling boxes with sharp edges. Safety boots are compulsory in all warehouse areas. Damaged equipment, such as trolleys with broken wheels, must be reported to your supervisor immediately and labelled ‘Do not use’.</p>
<p><b>Reporting.</b> Any injury, however minor, must be recorded in the accident book, which is kept in the staff room.</p>`,
      groups: [
        {
          type: 'gap', limit: 2, tag: 'sentence-completion', title: 'Questions 15–20',
          instructions: 'Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.',
          content: `<p>15. The leave of part-time staff depends on the number of [[15]] in their contract.</p>
            <p>16. Employees with five years’ continuous service receive two [[16]].</p>
            <p>17. Days carried over must be used before the end of [[17]].</p>
            <p>18. Leave must be requested using the [[18]].</p>
            <p>19. Leave is rarely given during the company’s [[19]].</p>
            <p>20. Staff who become ill during their leave must provide a [[20]].</p>`,
          items: [
            { n: 15, a: ['hours'] }, { n: 16, a: ['additional days', 'extra days'] }, { n: 17, a: ['June'] },
            { n: 18, a: ['staff portal', 'portal'] }, { n: 19, a: ['peak season'] }, { n: 20, a: ['medical certificate'] }
          ]
        },
        {
          type: 'gap', limit: 1, tag: 'note-completion', title: 'Questions 21–27',
          instructions: 'Complete the notes below. Choose <b>ONE WORD ONLY</b> from the text for each answer.',
          content: `<h4>Manual handling — key points</h4><ul>
            <li>complete training within the first [[21]] of employment</li>
            <li>refresher course every two [[22]]</li>
            <li>loads over 25 kg: use a [[23]] or get help</li>
            <li>check that the [[24]] is clear before lifting</li>
            <li>bend the [[25]], keep the back straight</li>
            <li>wear [[26]] for boxes with sharp edges</li>
            <li>record all injuries in the accident book (in the staff [[27]])</li></ul>`,
          items: [{ n: 21, a: ['month'] }, { n: 22, a: ['years'] }, { n: 23, a: ['trolley'] }, { n: 24, a: ['route'] }, { n: 25, a: ['knees'] }, { n: 26, a: ['gloves'] }, { n: 27, a: ['room'] }]
        }
      ]
    },
    {
      title: 'Section 3', label: 'Section 3', intro: 'Questions 28–40',
      passage: `<h3>The Return of the Tram</h3>
<p><span class="para-label">A</span>In the first decades of the twentieth century, trams were a familiar sight in hundreds of cities across Europe, North America and Australia. Pulled first by horses and later powered by overhead electric wires, they offered cheap, reliable transport and allowed cities to expand into new suburbs. In many places, the route of the tram line determined where new housing was built.</p>
<p><span class="para-label">B</span>From the 1930s onwards, however, trams began to disappear. Buses, which did not require expensive tracks, were cheaper to introduce and could change their routes easily. At the same time, growing numbers of private cars competed for road space, and trams, which usually ran in the middle of the street, were increasingly seen as an obstacle to traffic. By the 1960s, most cities in Britain and the United States had removed their tram networks altogether, although many cities in central and eastern Europe kept theirs.</p>
<p><span class="para-label">C</span>The revival began in the 1980s. Faced with congestion and air pollution, a number of cities — Nantes and Grenoble in France were among the first — decided to build new tram systems. These ‘light rail’ networks were very different from their predecessors: the vehicles were quieter, had low floors allowing easy access for wheelchairs and pushchairs, and often ran on dedicated tracks separated from other traffic, which made them faster and more punctual.</p>
<p><span class="para-label">D</span>Supporters argue that trams offer benefits that buses cannot match. Because the route is fixed by rails, residents and businesses can be confident that the service will remain, and this has encouraged investment along tram corridors. Many passengers also say that they prefer the smooth ride of a tram to that of a bus, and studies suggest that trams attract a higher proportion of people who would otherwise drive. Where tram projects have been accompanied by the redesign of streets, with wider pavements and fewer cars, city centres have often become more attractive places to visit.</p>
<p><span class="para-label">E</span>Nonetheless, trams are not without their critics. The cost of construction is high, often many times that of an equivalent bus service, and building work can disrupt local businesses for years. Several projects have run far over budget. Some transport experts argue that modern ‘bus rapid transit’ systems, in which buses run on dedicated lanes and use stations rather than ordinary stops, can deliver many of the same benefits for a fraction of the price.</p>
<p><span class="para-label">F</span>The debate is likely to continue. What is clear is that the success of a tram system depends less on the technology itself than on the decisions surrounding it: where the lines run, how well they connect with other forms of transport, and whether the city is prepared to give priority to public transport over private cars. In cities where these conditions have been met, the tram has proved that it is far more than a piece of nostalgia.</p>`,
      groups: [
        {
          type: 'match', tag: 'matching-headings', title: 'Questions 28–33', optionsTitle: 'List of Headings',
          instructions: 'The text has six paragraphs, <b>A–F</b>. Choose the correct heading for each paragraph from the list of headings below.',
          options: [
            { k: 'i', t: 'An expensive option with a cheaper rival' }, { k: 'ii', t: 'The reasons for a decline' }, { k: 'iii', t: 'The importance of wider planning decisions' },
            { k: 'iv', t: 'An important part of early urban growth' }, { k: 'v', t: 'A new generation of vehicles' }, { k: 'vi', t: 'Advantages over other public transport' },
            { k: 'vii', t: 'The problems of maintaining old tracks' }, { k: 'viii', t: 'Public opposition to new tram lines' }
          ],
          items: [{ n: 28, q: 'Paragraph A', a: 'iv' }, { n: 29, q: 'Paragraph B', a: 'ii' }, { n: 30, q: 'Paragraph C', a: 'v' }, { n: 31, q: 'Paragraph D', a: 'vi' }, { n: 32, q: 'Paragraph E', a: 'i' }, { n: 33, q: 'Paragraph F', a: 'iii' }]
        },
        {
          type: 'mcq', tag: 'mcq', title: 'Questions 34–37', instructions: 'Choose the correct letter, <b>A, B, C or D</b>.',
          items: [
            { n: 34, q: 'According to paragraph B, one reason buses replaced trams was that buses', opts: ['were more comfortable.', 'could change their routes easily.', 'used less fuel.', 'carried more passengers.'], a: 'B' },
            { n: 35, q: 'What does the writer say about trams in central and eastern Europe?', opts: ['Many cities kept their networks.', 'They were replaced earlier than elsewhere.', 'They were rebuilt in the 1980s.', 'They were mainly horse-drawn.'], a: 'A' },
            { n: 36, q: 'One feature of the new light rail systems was that they', opts: ['were cheaper to build than bus lanes.', 'shared lanes with private cars.', 'were easier for wheelchair users to board.', 'used horses on some routes.'], a: 'C' },
            { n: 37, q: 'Some transport experts believe that', opts: ['trams should only be built in small cities.', 'bus rapid transit can offer similar benefits at a lower cost.', 'tram projects rarely go over budget.', 'buses are more popular with drivers.'], a: 'B' }
          ]
        },
        {
          type: 'gap', limit: 2, tag: 'sentence-completion', title: 'Questions 38–40',
          instructions: 'Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.',
          content: `<p>38. Because tram routes are fixed, they have encouraged [[38]] along the lines.</p>
            <p>39. Trams are better than buses at attracting people who would normally [[39]].</p>
            <p>40. Tram construction can cause problems for [[40]] over a long period.</p>`,
          items: [{ n: 38, a: ['investment'] }, { n: 39, a: ['drive'] }, { n: 40, a: ['local businesses', 'businesses'] }]
        }
      ]
    }
  ]
};
