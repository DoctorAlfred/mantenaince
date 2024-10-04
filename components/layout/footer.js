const SiteFooter = (copyrigth, address = null) => {
  return `
      <footer class="fixed bottom-0 bg-black z-10">
        <div class="text-white py-4">
          by Alfredo Matricciani
        </div>
      </footer>
  `;
};

// Esportiamo la funzione
module.exports = SiteFooter;