/* IELTS Writing — tareas originales con respuestas modelo. */
window.DATA = window.DATA || {};
DATA.writing = DATA.writing || {};

DATA.writing.ielts = {
  academicTask1: [
    {
      id: 'wa1', title: 'Electric car ownership',
      prompt: '<p>The chart below shows the percentage of households in four countries that owned an electric car in 2015, 2020 and 2025.</p>',
      chart: {
        type: 'bar', title: 'Households owning an electric car (%)', categories: ['Arland', 'Belmont', 'Corvia', 'Dastan'], yMax: 35, yLabel: '%',
        series: [{ name: '2015', values: [4, 1, 0.5, 2], color: '#9bb7dc' }, { name: '2020', values: [12, 4, 2, 5], color: '#2f6fc0' }, { name: '2025', values: [31, 11, 6, 9], color: '#163d70' }]
      },
      model: `The bar chart compares the proportion of households that owned an electric car in four countries in 2015, 2020 and 2025.

Overall, ownership rose in all four countries over the decade, but Arland was by far the leader throughout, and the gap between it and the other nations widened considerably.

In 2015, electric cars were rare everywhere. Only 4% of households in Arland had one, and the figures for Dastan, Belmont and Corvia were even lower, at 2%, 1% and just 0.5% respectively. By 2020, Arland's figure had tripled to 12%, while the other three countries recorded more modest increases, reaching between 2% and 5%.

The most dramatic change occurred in the following five years. Ownership in Arland jumped to 31%, almost a third of all households. Belmont also grew rapidly, from 4% to 11%, overtaking Dastan, which reached 9%. Corvia remained in last place, although its figure still tripled to 6%.

In short, while electric car ownership increased steadily in every country, growth accelerated after 2020, particularly in Arland and Belmont.`
    },
    {
      id: 'wa2', title: 'Museum visitors',
      prompt: '<p>The graph below shows the average number of visitors per month to three museums in a city between 2016 and 2024.</p>',
      chart: {
        type: 'line', title: 'Average monthly visitors (thousands)', categories: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'], yMin: 0, yMax: 60, yLabel: 'thousands',
        series: [
          { name: 'Science Museum', values: [42, 45, 47, 50, 18, 30, 48, 55, 58], color: '#2f6fc0' },
          { name: 'Art Gallery', values: [30, 31, 29, 30, 10, 20, 27, 29, 31], color: '#0f8b7d' },
          { name: 'History Museum', values: [20, 22, 25, 27, 8, 16, 26, 33, 38], color: '#b7791f' }
        ]
      },
      model: `The line graph illustrates how many people, on average, visited three city museums each month from 2016 to 2024.

Overall, the Science Museum was consistently the most popular attraction. All three museums experienced a sharp fall in 2020, but by the end of the period the Science and History Museums had exceeded their earlier levels, while the Art Gallery had only returned to its original figure.

Between 2016 and 2019, the Science Museum's monthly visitors rose gradually from 42,000 to 50,000. The History Museum also grew steadily, from 20,000 to 27,000, whereas the Art Gallery remained stable at around 30,000.

In 2020, attendance collapsed at all three sites, falling to 18,000 at the Science Museum, 10,000 at the Art Gallery and just 8,000 at the History Museum. A recovery followed, and by 2024 the Science Museum had reached a peak of 58,000. The History Museum showed the strongest growth, climbing to 38,000 and overtaking the Art Gallery in 2023. The Art Gallery, by contrast, recovered only to 31,000, almost exactly where it had started.`
    },
    {
      id: 'wa3', title: 'Household energy use',
      prompt: '<p>The pie charts below show how the energy used in a typical household in one country was divided in 2000 and 2024.</p>',
      chart: {
        type: 'pie', pies: [
          { title: '2000', slices: [{ name: 'Heating', value: 52, color: '#163d70' }, { name: 'Water heating', value: 20, color: '#2f6fc0' }, { name: 'Appliances', value: 15, color: '#0f8b7d' }, { name: 'Lighting', value: 8, color: '#b7791f' }, { name: 'Cooking', value: 5, color: '#8e44ad' }] },
          { title: '2024', slices: [{ name: 'Heating', value: 41, color: '#163d70' }, { name: 'Water heating', value: 18, color: '#2f6fc0' }, { name: 'Appliances', value: 24, color: '#0f8b7d' }, { name: 'Lighting', value: 5, color: '#b7791f' }, { name: 'Cooking', value: 12, color: '#8e44ad' }] }
        ]
      },
      model: `The two pie charts compare the share of household energy used for five purposes in one country in 2000 and 2024.

Overall, heating accounted for the largest proportion of energy use in both years, although its share declined. The most noticeable changes were the growth in energy used for appliances and cooking.

In 2000, more than half of all household energy (52%) went on heating rooms, followed by water heating at 20%. Appliances consumed 15%, while lighting and cooking represented only small shares, at 8% and 5% respectively.

By 2024, the proportion used for heating had fallen to 41%, and water heating had dropped slightly to 18%. In contrast, the share used by appliances rose substantially to 24%, making it the second largest category. Cooking more than doubled its share, from 5% to 12%, whereas lighting fell to just 5%, possibly reflecting more efficient bulbs.

In summary, while heating remained dominant, energy use became more evenly distributed over the period, with appliances in particular taking a much larger share.`
    }
  ],
  gtTask1: [
    {
      id: 'wg1', title: 'Lost item at a hotel', opening: 'Dear Sir or Madam,',
      prompt: '<p>You recently stayed at a hotel and left a personal item in your room.</p><p>Write a letter to the hotel manager.</p>',
      bullets: ['give details of your stay', 'describe the item you left behind', 'say how you would like it to be returned to you'],
      model: `Dear Sir or Madam,

I am writing regarding an item that I believe I left in my room during a recent stay at your hotel.

I stayed in Room 412 for three nights, from 14 to 17 March, while attending a conference in the city. I checked out early on the morning of the 17th in order to catch a flight, and it was only when I arrived home that I realised my tablet computer was missing.

The tablet is a silver ten-inch model in a dark blue leather case with my initials, "J.R.", printed on the front. I think I left it in the drawer of the bedside table, as I had been reading on it the night before I left. It contains important work documents, so I would be extremely grateful if you could check whether it has been found.

If it has, I would appreciate it if you could send it to my home address by registered post. I am, of course, happy to cover the cost of postage and packaging; please let me know the amount and how you would like me to pay.

Thank you in advance for your help. I look forward to hearing from you.

Yours faithfully,
Jordan Reyes`
    },
    {
      id: 'wg2', title: 'Noisy neighbour', opening: 'Dear ...,',
      prompt: '<p>Your neighbour has been making a lot of noise late at night.</p><p>Write a letter to your neighbour.</p>',
      bullets: ['explain what the problem is', 'say how it is affecting you', 'suggest a solution'],
      model: `Dear Mr Collins,

I hope you are well. I live in the flat directly below yours, number 6, and I am writing about something that has been bothering me for the past few weeks.

On several nights recently, there has been loud music and the sound of people talking and moving furniture in your flat until well after midnight. Last Friday and Saturday, for example, the noise continued until almost two in the morning. I understand that everyone likes to enjoy themselves, and I have no wish to spoil your fun.

However, I start work at seven o'clock, so I have to get up very early, and the noise has been keeping me awake. As a result, I have been feeling exhausted at work, and I am worried that it may start to affect my performance.

I wonder whether you could keep the volume down after eleven o'clock on weekdays. If you are planning a party at the weekend, perhaps you could let me know in advance, so that I can make other arrangements. I would also be happy to meet for a coffee to talk about it if you prefer.

Thank you for understanding.

Best wishes,
Sam`
    },
    {
      id: 'wg3', title: 'Advice for a visiting friend', opening: 'Dear ...,',
      prompt: '<p>A friend is coming to visit your town for the first time and has asked you for advice.</p><p>Write a letter to your friend.</p>',
      bullets: ['suggest the best time of year to visit', 'recommend some places to see', 'explain how to travel around the town'],
      model: `Dear Lucy,

I'm so glad you've finally decided to come and visit! You asked for some advice, so here are a few suggestions.

First of all, I'd recommend coming in late spring, around May. The weather is usually warm but not too hot, and that's when the town holds its flower festival, which is really worth seeing. Summer can get very crowded with tourists, and in winter many of the outdoor attractions are closed.

As for places to see, you definitely shouldn't miss the old harbour. It's full of small fish restaurants, and in the evening you can watch the sunset from the lighthouse. If you like history, the castle museum has a fascinating collection, and the views from the tower are spectacular. On a sunny day, we could also take a picnic to the botanical gardens.

Getting around is easy. The town centre is quite small, so most places are within walking distance. For longer trips there is a good bus network, and you can buy a three-day pass for about ten pounds. You can also hire bikes from the station.

Let me know your dates as soon as you can. I can't wait to see you!

Lots of love,
Ana`
    }
  ],
  task2: [
    {
      id: 'wt1', title: 'Free university education',
      prompt: '<p>Some people believe that university education should be free for all students. Others think that students should pay for their own studies.</p><p><b>Discuss both views and give your own opinion.</b></p>',
      model: `The question of who should pay for university education is a controversial one. While some argue that higher education should be provided free of charge, others believe that the cost should fall on the students who benefit from it. In my view, university should be largely free, although students can reasonably be expected to make some contribution.

Those who believe students should pay make two main points. Firstly, graduates generally earn considerably more than non-graduates over their lifetime, so it seems fair that they should pay for the advantage they receive. Secondly, funding universities entirely through taxation places a heavy burden on public finances, and taxpayers who never attended university may resent paying for others. Charging fees, it is argued, also encourages students to take their studies more seriously.

On the other hand, supporters of free education argue that society as a whole benefits from a highly educated population. Doctors, engineers and teachers serve everyone, not only themselves. Moreover, high fees can discourage talented young people from poorer families from applying, which wastes ability and increases inequality. In countries where tuition is expensive, many graduates begin their careers with enormous debts, which may delay buying a home or starting a family.

On balance, I believe the second argument is stronger. Access to university should depend on ability rather than wealth, and the long-term economic benefits of a skilled workforce justify public investment. However, a compromise is possible: tuition could be free, while students who later earn high salaries repay a small proportion of their costs through the tax system.

In conclusion, although there are valid reasons for asking students to pay, I am convinced that university education should be free at the point of entry, so that every capable student has the opportunity to study.`
    },
    {
      id: 'wt2', title: 'Ageing population',
      prompt: '<p>In many countries, people are living longer than ever before.</p><p><b>What problems does this cause for individuals and society? What solutions can you suggest?</b></p>',
      model: `Thanks to improvements in healthcare and living standards, life expectancy has risen dramatically in many parts of the world. Although this is clearly a positive development, it also creates challenges for both individuals and society. This essay will examine these problems and propose some possible solutions.

For individuals, the main difficulty is financial. People who retire at sixty-five may now live for another twenty or thirty years, and their savings and pensions may not be sufficient to support them for so long. In addition, a longer life is not always a healthy one; many elderly people suffer from chronic conditions such as dementia or heart disease, which can lead to loneliness and dependence on family members, who may themselves be struggling to balance care with work.

For society, the most serious problem is the pressure on public services. As the proportion of older people increases, governments must spend more on pensions, hospitals and care homes, while the number of working-age taxpayers who fund these services shrinks. This imbalance threatens the sustainability of welfare systems.

Several measures could help. Firstly, governments could gradually raise the retirement age in line with life expectancy, and encourage flexible or part-time work for older people who wish to continue working. Secondly, greater investment in preventive healthcare, such as programmes promoting exercise and healthy diets, would help people stay independent for longer and reduce costs in the long term. Finally, communities could support older residents through day centres and volunteer schemes, which would reduce isolation.

In conclusion, longer lives bring financial and health-related challenges for individuals and place strain on public finances. However, with sensible policies on retirement, prevention and community support, these problems can be managed effectively.`
    },
    {
      id: 'wt3', title: 'Free public transport',
      prompt: '<p>Some people think that the best way to reduce traffic congestion in cities is to provide free public transport.</p><p><b>To what extent do you agree or disagree?</b></p>',
      model: `Traffic congestion is a growing problem in cities around the world, causing delays, pollution and stress. Some people believe that making public transport free would be the most effective solution. While I agree that this measure could help, I do not believe it is the best approach on its own.

There are clear arguments in favour of free public transport. Cost is one of the factors people consider when choosing how to travel, and removing fares would make buses and trains more attractive, particularly for low-income residents. If a significant number of drivers switched to public transport, the number of cars on the roads would fall, reducing both congestion and emissions. Several cities that have introduced free fares have reported increases in passenger numbers.

However, price is not the only reason why people drive. Many commuters use their cars because public transport is slow, unreliable or unavailable in their area. If a bus takes twice as long as driving, few people will change their habits even if the journey is free. Furthermore, abolishing fares would remove an important source of income for transport operators, which could lead to less investment in new routes and vehicles, making the service worse rather than better.

In my opinion, a more effective strategy would combine several measures. Cities should invest in frequent, fast and reliable services, for example by creating dedicated bus lanes. At the same time, they could discourage car use through congestion charges or reduced parking in the city centre, and use the revenue to keep fares low.

In conclusion, although free public transport might reduce congestion to some extent, improving the quality of services and making driving less convenient would, in my view, achieve far better results.`
    },
    {
      id: 'wt4', title: 'Working from home',
      prompt: '<p>Nowadays, many people work from home using modern technology.</p><p><b>Do the advantages of this development outweigh the disadvantages?</b></p>',
      model: `Advances in technology, such as high-speed internet and video-conferencing software, have made it possible for millions of people to work from home. Although this trend has some drawbacks, I believe that its advantages are greater.

The most obvious benefit is the time and money saved by not commuting. Employees who would otherwise spend an hour or more travelling each day can use that time to rest, exercise or be with their families. This often leads to higher job satisfaction and, according to some surveys, greater productivity. Working from home also gives people more flexibility to organise their day, which is particularly valuable for parents and carers. For employers, there are savings on office space, and companies can recruit talented staff who live far away.

Nevertheless, there are disadvantages. Some people find it difficult to separate their working life from their private life, and end up working longer hours. Others feel isolated without the daily contact of an office, which can affect their mental health. Teamwork and the informal exchange of ideas may also suffer when colleagues rarely meet in person, and new employees may find it harder to learn from more experienced staff.

However, most of these problems can be reduced. Companies can adopt hybrid models, in which employees spend two or three days a week in the office, combining flexibility with social contact. Clear rules about working hours can also help staff to switch off at the end of the day.

In conclusion, while working from home can lead to isolation and weaker teamwork, these issues can be managed, and the benefits in terms of time, flexibility and well-being make it, on balance, a positive development.`
    }
  ]
};
