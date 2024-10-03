# mantenaince - by Alfredo Matricciani
Simple server for maintaining your website with Express JS, can be run with Pm2 to be able to stop your Reac, React Native, Angular or Next.Js in case of total maintenance.

## Install

- npm install

If have a problem whit librery, example: 5 vulnerabilities (2 moderate, 3 high)
- npm audit fix

If Audit not resolve
- npm audit fix --force




### Use

Local Use
- node.index.js

Pm2 Use First Time
- pm2 start ecosystem.config.js --name mantenaince

Stop Application
- pm2 stop mantenaince

Start Every time
- pm2 start mantenaince

Use Tailwind in Local
- npx tailwindcss -i ./src/input.css -o ./src/output.css --watch



### Upgrade

Express Core
- 


Tailwind
- 