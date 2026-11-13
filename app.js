import { Header } from './components/Header.js';
import { Card } from './components/Card.js';
import { Footer } from './components/Footer.js';

const appContainer = document.getElementById('app');
const navButtons = document.querySelectorAll('.nav-btn');

// Data for the 3 Wikipedia cards
const topicsData = [
  {
    title: 'Daytona Beach, FL',
    tag: 'Volusia',
    summary: 'A city known for automobile races since 1900 and being the world's most famous beach.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Daytona_Beach,_Florida'
  },
  {
    title: 'Neptune Beach, FL,
    tag: 'Duval',
    summary: 'The middle beach of the three Jacksonville Beaches, home of the Bookmark, best bookstore on the coast.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Neptune_Beach,_Florida'
  },
  {
    title: 'Orlando, FL',
    tag: 'Orange',
    summary: 'A city with an ever growing population since 1971, due largely to the Walt Disney Corporation and diversifying in recent years.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Orlando,_Florida'
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
