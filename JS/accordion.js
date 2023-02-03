const accordion = {
  titleDesktop: 'CAREERS',
  titleMobile: 'CHOOSE YOUR CAREER',
  titleIcon: '../assets/icons/education.svg',
  careerList: [
    {
      id: 'career-1',
      title: 'Business & Management',
      subtitles: [
        { subtitle: 'Market Research Executive' },
        { subtitle: 'Child Psychologist' },
        { subtitle: 'Guidance Counsellor' },
        { subtitle: 'Behaviour Analyst' },
        { subtitle: 'Recreational Therapist' },
      ],
    },
    {
      id: 'career-2',
      title: 'Computing & IT',
      subtitles: [
        { subtitle: 'Market Research Executive' },
        { subtitle: 'Child Psychologist' },
        { subtitle: 'Guidance Counsellor' },
        { subtitle: 'Behaviour Analyst' },
        { subtitle: 'Recreational Therapist' },
      ],
    },
    {
      id: 'career-3',
      title: 'Fashion & Media',
      subtitles: [
        { subtitle: 'Market Research Executive' },
        { subtitle: 'Executive Child Psychologist' },
        { subtitle: 'Guidance Counsellor' },
        { subtitle: 'Behaviour Analyst' },
        { subtitle: 'Recreational Therapist' },
      ],
    },
    {
      id: 'career-4',
      title: 'Finance & Accounting',
      subtitles: [
        { subtitle: 'Market Research Executive' },
        { subtitle: 'Executive Child Psychologist' },
        { subtitle: 'Guidance Counsellor' },
        { subtitle: 'Behaviour Analyst' },
        { subtitle: 'Recreational Therapist' },
      ],
    },
    {
      id: 'career-5',
      title: 'Law & Criminology',
      subtitles: [
        { subtitle: 'Market Research Executive' },
        { subtitle: 'Child Psychologist' },
        { subtitle: 'Guidance Counsellor' },
        { subtitle: 'Behaviour Analyst' },
        { subtitle: 'Recreational Therapist' },
      ],
    },
    {
      id: 'career-6',
      title: 'Marketing & <br> Communications',
      subtitles: [
        { subtitle: 'Market Research Executive' },
        { subtitle: 'Child Psychologist' },
        { subtitle: 'Guidance Counsellor' },
        { subtitle: 'Behaviour Analyst' },
        { subtitle: 'Recreational Therapist' },
      ],
    },
    {
      id: 'career-7',
      title: 'Psychology & Social <br> Sciences',
      subtitles: [
        { subtitle: 'Market Research Executive' },
        { subtitle: 'Child Psychologist' },
        { subtitle: 'Guidance Counsellor' },
        { subtitle: 'Behaviour Analyst' },
        { subtitle: 'Recreational Therapist' },
      ],
    },
  ],
  mainBtnTitle: 'show all programmes',
};

const accordionTemplate = Handlebars.compile(
  document.getElementById('accordion-template').innerHTML
);

const accordionFilled = accordionTemplate(accordion, { noEscape: true });
document.getElementById('accordion').innerHTML = accordionFilled;
