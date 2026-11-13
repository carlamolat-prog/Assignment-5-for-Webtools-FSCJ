export function Card({ title, summary, wikiUrl, tag }) {
  return `
    <article class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <span class="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
          ${tag}
        </span>
        <h2 class="text-xl font-bold text-gray-900 mb-2">${title}</h2>
        <p class="text-gray-600 text-sm leading-relaxed mb-6">${summary}</p>
      </div>
      <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-800">
        Read on Wikipedia ↗
      </a>
    </article>
  `;
}
