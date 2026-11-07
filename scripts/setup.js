const fs = require('node:fs');
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
(async () => {
  const file = 'site.config.json';
  const current = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : JSON.parse(fs.readFileSync('site.config.json.example', 'utf8'));
  const rl = readline.createInterface({ input, output });
  for (const [key, prompt] of [['name','Clinic name'],['phone','Display phone'],['phoneLink','Phone number for tel: link (include country code)'],['whatsapp','WhatsApp number (digits with country code)'],['email','Contact email'],['address','Street address'],['city','City and postal code']]) {
    const value = await rl.question(`${prompt} [${current.clinic[key]}]: `);
    if (value.trim()) current.clinic[key] = value.trim();
  }
  rl.close(); fs.writeFileSync(file, JSON.stringify(current, null, 2) + '\n'); console.log(`Updated ${file}. Services, team, stats, social links, and colors can be edited there too.`);
})().catch(error => { console.error(error.message); process.exitCode = 1; });
