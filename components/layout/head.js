/**
 * Layout Head - Mantenaince
 * 
 * @author Alfredo Matricciani
 * @since 2024
 */

const SiteHead = (title = 'Mantenaince', favicon = null) => {

  const output = '/src/output.css';

  return `
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="icon" href="${favicon}" type="image/x-icon">
      <link href="${output}" rel="stylesheet">
    </head>
  `;
};

module.exports = SiteHead;