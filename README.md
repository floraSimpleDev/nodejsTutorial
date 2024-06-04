# nodejsTutorial

## 2.4 calc.js file
```
process.stdin.on('data', chunk => {});
```
```
process.exit(0);
```
```
process.stdout.write('');
```

## 2.5 calc_common.js file
```
require('readline');
```
```
readline.createInterface({input, output});
```
```
readline.question(query, answer);
```
```
readline.close();
```

## 2.6 calc_es.mjs file
```
try {}
catch(exception) {}
```

## 3.1 feed-manager.mjs file
1 obtain the absolute directory+file of this file;
2 obtain the absolute directory of this file;
  D:\Web_full_stack\5_nodejs\nodejsTutorial\feeds.json
```
const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 
const jsonFile = join(__dirname, "feeds.json");
```
```
import.meta.url
```

## 3.2 feed-manager.mjs file
constants.F_OK check if the file exits.
```
import { access, constants, readFile, writeFile } from 'fs/promises';
...
await access(file, constants.F_OK);
```
```
await readFile(file, {encoding: 'utf-8'});
return JSON.parse(contents);
```
```
await writeFile(file, JSON.stringify(links));
```
