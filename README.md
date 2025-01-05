# reactvyuka
# https://gitlab.com/kurzy/reaktivni-react


## Instalace

 ```shell
 git clone git@gitlab.com:kurzy/reaktivni-react.git
 cd reaktivni-react
 npm install
 ```

## Dùležité pøíkazy
- `npm start` - nastarování vývojového serveru (vè. watch) s podporou https (viz [cert readme](./cert/readme.md)), kontrola js a css souborù
- `npm run watch` - build vývojových souborù do složky `./dist` po každém uložení, kontrola js a css souborù
- `npm run dev` - build vývojových souborù do složky `./dist`, kontrola js a css souborù
- `npm run build` - build produkèních souborù do složky `./dist`, minimalizace, kontrola js a css souborù
- `npm run eslint` - kontrola js souborù podle produkèní konfigurace
- `npm run eslintDev` - kontrola js souborù podle vývojové konfigurace
- `npm run stylelint` - kontrola css souborù
- `npm run lint` - kontrola js a css souborù podle produkèní konfigurace

