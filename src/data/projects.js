export const projects = [
  {
    name: 'fitme',
    tagline: 'AI fitness trainer with pose estimation',
    description:
      'AI-enabled fitness application that uses TensorFlow pose estimation to compare user form against ideal yoga/exercise poses and generate an accuracy score. Published as a research paper at IEEE.',
    image: 'https://user-images.githubusercontent.com/42516515/98462694-24de4400-21dc-11eb-95c1-0cb571b87b46.PNG',
    github: 'https://github.com/sahilcode17/fitme',
    demo: null,
    stack: ['React', 'TensorFlow', 'Node.js', 'Firebase'],
    featured: true,
  },
  {
    name: 'safEco',
    tagline: 'Safer routes for women, powered by crime-data ML',
    description:
      "A Delhi-focused safety app that suggests alternative routes between two locations, scoring each by a 'Danger Index' computed by applying unsupervised machine learning on historical crime records.",
    github: 'https://github.com/sahilcode17/safEco',
    demo: 'https://safeco.herokuapp.com/',
    stack: ['Node.js', 'Python', 'EJS', 'Machine Learning'],
    featured: true,
  },
  {
    name: 'Ecommerce API',
    tagline: 'Buyer / seller order platform backend',
    description:
      'Full-featured e-commerce backend with JWT-based auth, role-based buyer/seller flows, catalog management, and order processing backed by MongoDB.',
    github: 'https://github.com/sahilcode17/Ecommerce-api',
    demo: null,
    stack: ['Node.js', 'MongoDB', 'JWT', 'Express'],
    featured: true,
  },
  {
    name: 'SoundMaven',
    tagline: 'Audio tagging with deep learning',
    description:
      'Audio tagging system based on the Kaggle Freesound Audio Tagging 2019 challenge. Predicts clip-level multi-labels for sound events in noisy and urbanscape datasets.',
    github: 'https://github.com/sahilcode17/SoundMaven',
    demo: null,
    stack: ['Python', 'Jupyter', 'Deep Learning'],
    featured: true,
  },
  {
    name: 'DigitalProducts',
    tagline: 'React ecommerce storefront',
    description:
      'An ecommerce website that lets users browse and choose the best digital products (smartphones, accessories) with a clean React-based storefront.',
    github: 'https://github.com/sahilcode17/DigitalProducts',
    demo: null,
    stack: ['React', 'JavaScript', 'CSS'],
    featured: false,
  },
  {
    name: 'FlightBooking',
    tagline: 'Flight booking system with seat selection',
    description:
      'REST API for booking flights, managing seat numbers, and storing travel itineraries. MongoDB-backed with a clean controller/route/service layout.',
    github: 'https://github.com/sahilcode17/FlightBooking',
    demo: null,
    stack: ['Node.js', 'Express', 'MongoDB'],
    featured: false,
  },
];
