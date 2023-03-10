const cards = {
  cardsList: [
    {
      id: 'card-1',
      frontSide: {
        logo: 'assets/icons/embratur.svg',
        category: 'Business & Management',
        profession: 'Master of Business Administration (CMI)',
        educationLevel: 'Postgraduate',
        frequency: 'Every 12 weeks',
        buttonTitle: 'More Info',
      },
      backSide: {
        direction: 'MSc Data Analytics and Information Systems Management',
        duration: {
          title: 'Duration:',
          min: 'Minimum: 18 months',
          max: 'Maximum: 36 months',
        },
        start: {
          title: 'Start Dates:',
          dates: 'January, April, July, October',
        },
        cost: '£8,500',
        buttonTitle: 'More Info',
      },
    },
    {
      id: 'card-2',
      frontSide: {
        logo: 'assets/icons/embratur.svg',
        category: 'Business & Management',
        profession: 'Master of Business Administration (CMI)',
        educationLevel: 'Postgraduate',
        frequency: 'Every 12 weeks',
        buttonTitle: 'More Info',
      },
      backSide: {
        direction: 'MSc Data Analytics and Information Systems Management',
        duration: {
          title: 'Duration:',
          min: 'Minimum: 18 months',
          max: 'Maximum: 36 months',
        },
        start: {
          title: 'Start Dates:',
          dates: 'January, April, July, October',
        },
        cost: '£8,500',
        buttonTitle: 'More Info',
      },
    },
    {
      id: 'card-3',
      frontSide: {
        logo: 'assets/icons/danisco.svg',
        category: 'Business & Management',
        profession: 'Master of Business Administration (CMI)',
        educationLevel: 'Postgraduate',
        frequency: 'Every 12 weeks',
        buttonTitle: 'More Info',
      },
      backSide: {
        direction: 'MSc Data Analytics and Information Systems Management',
        duration: {
          title: 'Duration:',
          min: 'Minimum: 18 months',
          max: 'Maximum: 36 months',
        },
        start: {
          title: 'Start Dates:',
          dates: 'January, April, July, October',
        },
        cost: '£8,500',
        buttonTitle: 'More Info',
      },
    },
    {
      id: 'card-4',
      frontSide: {
        logo: 'assets/icons/danisco.svg',
        category: 'Business & Management',
        profession: 'Master of Business Administration (CMI)',
        educationLevel: 'Postgraduate',
        frequency: 'Every 12 weeks',
        buttonTitle: 'More Info',
      },
      backSide: {
        direction: 'MSc Data Analytics and Information Systems Management',
        duration: {
          title: 'Duration:',
          min: 'Minimum: 18 months',
          max: 'Maximum: 36 months',
        },
        start: {
          title: 'Start Dates:',
          dates: 'January, April, July, October',
        },
        cost: '£8,500',
        buttonTitle: 'More Info',
      },
    },
    {
      id: 'card-5',
      frontSide: {
        logo: 'assets/icons/buffets.svg',
        category: 'Business & Management',
        profession: 'Master of Business Administration (CMI)',
        educationLevel: 'Postgraduate',
        frequency: 'Every 12 weeks',
        buttonTitle: 'More Info',
      },
      backSide: {
        direction: 'MSc Data Analytics and Information Systems Management',
        duration: {
          title: 'Duration:',
          min: 'Minimum: 18 months',
          max: 'Maximum: 36 months',
        },
        start: {
          title: 'Start Dates:',
          dates: 'January, April, July, October',
        },
        cost: '£8,500',
        buttonTitle: 'More Info',
      },
    },
    {
      id: 'card-6',
      frontSide: {
        logo: 'assets/icons/barco.svg',
        category: 'Business & Management',
        profession: 'Master of Business Administration (CMI)',
        educationLevel: 'Postgraduate',
        frequency: 'January, April, July, October, November',
        buttonTitle: 'More Info',
      },
      backSide: {
        direction: 'MSc Data Analytics and Information Systems Management',
        duration: {
          title: 'Duration:',
          min: 'Minimum: 18 months',
          max: 'Maximum: 36 months',
        },
        start: {
          title: 'Start Dates:',
          dates: 'January, April, July, October',
        },
        cost: '£8,500',
        buttonTitle: 'More Info',
      },
    },
  ],
  loaderTitle: 'More programmes',
  loaderIcon: 'assets/icons/refresh.svg',
};

const cardsContainer = document.getElementById('cards');

const cardsTemplate = Handlebars.compile(
  document.getElementById('cards-template').innerHTML
);
const filledCards = cardsTemplate(cards);
cardsContainer.innerHTML = filledCards;


const allCards = cardsContainer.querySelectorAll('.card');
allCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('card_active');
  });
});

const replacePrice = () => {
  allCards.forEach((card, idx) => {
    const frequency = card.querySelector('.front__frequency');
    const price = card.querySelector('.back__cost').innerHTML;
    const priceFront = document.createElement('h4');
    priceFront.classList.add('front__cost');
    priceFront.innerHTML = price;
    frequency.replaceWith(priceFront);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 600) {
   replacePrice()
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 600) {
	replacePrice()
  } 
});
