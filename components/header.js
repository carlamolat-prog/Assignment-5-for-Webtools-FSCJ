export function Header(title, subtitle, description) {
  return `
    <header class="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
      <h1 class="text-4xl font-extrabold text-indigo-700 mb-2">${title}</h1>
      <p class="text-lg text-gray-500 mb-6">${subtitle}</p>
      <p class="max-w-2xl mx-auto text-gray-700 leading-relaxed mb-6">${description}</p>
      <button id="explore-btn" class="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition">
        Explore Topics →
      </button>
    </header>
  `;
}
