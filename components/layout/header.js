const SiteHeader = (logo) => {

  return `
    <div class="fixed top-0 w-full flex justify-center p-0 m-auto h-[100px]">
      <div class="w-[50%] min-w-[480px] h-[90px] m-auto">
        <img src="${logo}" alt="Logo" class="w-full h-full object-contain m-auto mb-4">
      </div>
    </div>
  `;
};

// Esportiamo la funzione
module.exports = SiteHeader;