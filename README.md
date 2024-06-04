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

## 2.7 feed-manager.mjs file

```
const __filename = fileURLToPath(import.meta.url); //obtain the absolute directory+file of this file
const __dirname = dirname(__filename); //obtain the absolute directory of this file
const jsonFile = join(__dirname, "feeds.json"); //D:\Web_full_stack\5_nodejs\nodejsTutorial\feeds.json
```
```
import.meta.url
```
