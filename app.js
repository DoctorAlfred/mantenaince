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
  const title = process.env.APP_NAME;
  const language = process.env.APP_LANGUAGE;
  const favicon = process.env.APP_FAVICON;
  const copyrigth = process.env.APP_COPYRIGTH;
  const siteLink = process.env.APP_LINK;
  const emailContact = process.env.APP_EMAIL_CONTACT;
  // Config Page
  const logo = process.env.APP_PATH_LOGO_URL;
  const bg = process.env.APP_PATH_BACK_URL;
  const maintTitle = 'Mantenaince';
  const firstParagraph = 'Sito in manutenzione';
  const secondParagraph = 'In questo momento stiamo apportando modifiche per migliorare la qualità del servizio.';
  const thirdParagraph = 'Vi preghiamo di tornare più tardi.';
  /** Start Components */
  const head = SiteHead(title, favicon);
  const header = SiteHeader(logo);
  const footer = SiteFooter(copyrigth, emailContact);
  /** Render Index Page */
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
            <p class="text-center mb-10">${thirdParagraph}</p>
          </div>
          <div class="logo w-[50%] h-[90px] m-auto">
            <img src="${bg}" alt="Logo" class="w-full h-full object-contain m-auto mb-4">
          </div>
          <div class="flex justify-center w-full m-auto mb-[100px]">
            <a href="${siteLink}" class="hover:text-sky-800 transition-all">${siteLink}</a>
          </div>
        </div>

        <div class="flex justify-center w-full m-auto mb-[100px]">
          <button onclick="window.history.back()" class="px-6 py-3 text-white rounded-md bg-sky-800 hover:bg-sky-900 transition-all">
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