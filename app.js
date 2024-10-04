/**
 * Index Mantenaince
 * 
 * @author Alfredo Matricciani
 * @since 2024
 */


/** Start Application */
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.static('public'));

/** Import Components Layout */
const SiteHead = require('./components/layout/head');
const SiteHeader = require('./components/layout/header');
const SiteFooter = require('./components/layout/footer');

app.get('/', (req, res) => {
  /** Use Redirect Mode - Comment out these lines of code if not used. */
  // const externalUrl = 'https://www.site.com/';
  // res.redirect(externalUrl);

  /** Use Render Mode - Comment out these lines of code if not used. */
  // Config Html
  const language = 'it-IT';
  const title = process.env.APP_NAME;
  const copyrigth = 'Made Mantenaince';

  // Config Page
  const logo = process.env.APP_PATH_LOGO_W_URL;

  const bg = process.env.APP_PATH_BACK_URL;

  const maintTitle = 'Sito in manutenzione';
  const firstParagraph = 'In questo momento stiamo apportando modifiche per migliorare la qualità del servizio.';
  const secondParagraph = 'Vi preghiamo di tornare più tardi.';
  const thirdParagraph = 'Paragrafo 3';

  const head = SiteHead(title);
  const header = SiteHeader(logo);
  const footer = SiteFooter(copyrigth);

  res.send(`
  <!DOCTYPE html>
  <html lang="`+ language + `">
    ${head}
    <body class="bg-black flex flex-col items-center justify-center relative z-0 h-screen overflow-y-auto">
      ${header}

      <div class="relative m-auto container top-20 h-auto">
        <div class="relative flex flex-col items-center text-white">
          <h1 class="text-3xl font-bold text-center mb-20">${maintTitle}</h1>
          <div class="w-[50%] m-auto">
            <p class="text-center mb-10">${firstParagraph}</p>
            <p class="text-center mb-10">${secondParagraph}</p>
          </div>
          <div class="logo w-[50%] h-[90px] m-auto">
            <img src="${bg}" alt="Logo" class="w-full h-full object-contain m-auto mb-4">
          </div>
        </div>

        <div class="">
          <h1>${maintTitle}</h1>
        </div>
        <div class="">
          ${firstParagraph}
        </div>

        <div class="flex justify-center w-full m-auto mb-[100px]">
          <button onclick="window.history.back()" class="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-sky-800 transition-all">
            Torna Indietro
          </button>
        </div>
      </div>
      
      ${footer}
    </body>
  </html>
  `);
});

/** SERVER START */
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});