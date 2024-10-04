const SiteFooter = (copyrigth = ' ', emailContact = ' ') => {
  return `
      <footer class="w-full fixed bottom-0 bg-black z-10">
        <div class="text-white text-center text-sm py-4 px-2">
          ${copyrigth} <a href="mailto:${emailContact}" class="hover:text-sky-800 transition-all">${emailContact}</a>
        </div>
      </footer>
  `;
};

// Esportiamo la funzione
module.exports = SiteFooter;