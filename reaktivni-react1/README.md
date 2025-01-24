# Reaktivní React

## Nevidíte data z vašeho kurzu?
- Najděte rozbalovací nabídku kousek nahoře vlevo nad seznamem souborů, ve které vidíte slovo „main“ (vedle ní je text „reaktivni-react“).
- Klikněte na ni.
- V sekci Tags klikněte na datum Vašeho kurzu.

## Co umíme
- dev server na HTTPS
- dev balík
- produkční balík
- kontrola JS
- kontrola CSS
- aliasy složek

## Instalace

 ```shell
 git clone git@gitlab.com:kurzy/reaktivni-react.git
 cd reaktivni-react
 npm install
 ```

## Důležité příkazy
- `npm start` - nastarování vývojového serveru (vč. watch) s podporou https (viz [cert readme](./cert/readme.md)), kontrola js a css souborů
- `npm run watch` - build vývojových souborů do složky `./dist` po každém uložení, kontrola js a css souborů
- `npm run dev` - build vývojových souborů do složky `./dist`, kontrola js a css souborů
- `npm run build` - build produkčních souborů do složky `./dist`, minimalizace, kontrola js a css souborů
- `npm run eslint` - kontrola js souborů podle produkční konfigurace
- `npm run eslintDev` - kontrola js souborů podle vývojové konfigurace
- `npm run stylelint` - kontrola css souborů
- `npm run lint` - kontrola js a css souborů podle produkční konfigurace
