import { Header } from './components/Header.js';
import { Card } from './components/Card.js';
import { Footer } from './components/Footer.js';

const appContainer = document.getElementById('app');
const navButtons = document.querySelectorAll('.nav-btn');

// Data for the 3 Wikipedia cards
const topicsData = [
  {
    title: 'James Webb Space Telescope',
    tag: 'Observatory',
    summary: 'A space telescope designed primarily to conduct infrared astronomy, allowing it to view objects too old, distant, or faint for Hubble.',
    wikiUrl: 'https://wikipedia.org'
  },
  {
    title: 'Black Hole',
    tag: 'Astrophysics',
    summary: 'A region of spacetime where gravity is so strong that nothing, including light and other electromagnetic waves, has enough energy to escape.',
    wikiUrl: 'https://wikipedia.org'
  },
  {
    title: 'Exoplanet',
    tag: 'Planetary Science',
    summary: 'A planet outside the Solar System. Thousands have been discovered using transit photometry and radial velocity methods.',
    wikiUrl: 'https://wikipedia.org'
  }
];

// View definitions
const views = {
  about: () => Header(
    'Welcome Aboard',
    'A lightweight Single-Page Application displaying information about my 3x favorite Florida Towns',
    'This mini SPA is built with Vanilla JavaScript, linked to TailwindCSS, with an index HTML file for my WebTools Class.'
  ),
  topics: () => `
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Featured Space Topics</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${topicsData.map(topic => Card(topic)).join('')}
      </div>
    </section>
  `,
  contact: () => Footer('s2091636@fscj.edu', 'Carl Amolat')
};

// Render function to swap sections
function renderView(route) {
  // Update active button styling
  navButtons.forEach(btn => {
    if (btn.dataset.route === route) {
      btn.classList.add('underline');
    } else {
      btn.classList.remove('underline');
    }
  });

  // Inject component HTML
  appContainer.innerHTML = views[route]();

  // Attach interactive listener if on the About view
  if (route === 'about') {
    document.getElementById('explore-btn').addEventListener('click', () => {
      renderView('topics');
    });
  }
}

// Listen for navigation clicks
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const route = button.dataset.route;
    renderView(route);
  });
});

// Initial page load
renderView('about');
