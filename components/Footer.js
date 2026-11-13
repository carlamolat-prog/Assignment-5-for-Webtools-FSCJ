export function Footer(email, githubUser) {
  return `
    <footer class="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
      <p class="text-gray-600 mb-6">Have questions about this single-page app? Reach out below.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium">
        <a href="mailto:${email}" class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg transition">
          Email: ${email}
        </a>
        <a href="https://github.com{githubUser}" target="_blank" rel="noopener noreferrer" 
           class="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg transition">
          GitHub: @${githubUser}
        </a>
      </div>
      <p class="text-xs text-gray-400 mt-8">© ${new Date().getFullYear()} SpaceExplorer Mini SPA</p>
    </footer>
  `;
}
