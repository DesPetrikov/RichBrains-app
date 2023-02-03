const accordion = {
  titleDesktop: 'CAREERS',
  titleMobile: 'CHOOSE YOUR CAREER',
  titleIcon: '../assets/icons/education.svg',
  careerList: [
    {
      id: 'career-1',
      title: 'Business & Management',
      subtitles: [
        { subtitle: 'Project manager' },
        { subtitle: 'Business analyst' },
      ],
    },
    {
      id: 'career-2',
      title: 'Computing & IT',
      subtitles: [
        { subtitle: 'Front-end developer' },
        { subtitle: 'HTML-developer' },
      ],
    },
    {
      id: 'career-3',
      title: 'Fashion & Media',
      subtitles: [{ subtitle: 'Stuntman' }, { subtitle: 'Film director' }],
    },
    {
      id: 'career-4',
      title: 'Finance & Accounting',
      subtitles: [{ subtitle: 'Financier' }, { subtitle: 'Accountant' }],
    },
    {
      id: 'career-5',
      title: 'Law & Criminology',
      subtitles: [{ subtitle: 'Prosecutor' }, { subtitle: 'Lawyer' }],
    },
    {
      id: 'career-6',
      title: 'Marketing & <br> Communications',
      subtitles: [
        { subtitle: 'Marketologist' },
        { subtitle: 'Human Resource Manager' },
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

const accordionContainer = document.getElementById('accordion');

const accordionTemplate = Handlebars.compile(
  document.getElementById('accordion-template').innerHTML
);

const accordionFilled = accordionTemplate(accordion, { noEscape: true });
accordionContainer.innerHTML = accordionFilled;

const allProfessions = accordionContainer.querySelectorAll('.item__button');

allProfessions.forEach((profession) => {
	profession.addEventListener('click', () => {
		if (!profession.classList.contains('item__button_active')) {
			profession.classList.add('item__button_active');
		 } else {
			profession.classList.remove('item__button_active');
		 }
	})
});
