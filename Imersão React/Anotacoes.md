## **Material.io**
https://m3.material.io/components

Os nomes usados nos elementos do material.io são usado como referencia no mundo UI

## **Figma**
- Simbolo de 4 quadrados é um componente no figma

## **Node**
- Baixar node versão LTS - Versão estavel

## **React**

Lib do JS

**Documentação**
https://pt-br.reactjs.org/docs/getting-started.html


## **Next JS(CLI -> Interface de Linha de Comando)**

Framework Usado para criar o projeto e configurar

**Documentação**
https://nextjs.org/docs/getting-started

### **Manual Setup**

```
npm install next react react-dom
```

- Abra `package.json` e adicione o seguinte `scripts:`

Retirando o `^` garante que assim que `npm install` for rodado em outra maquina atualize alguma lib, assim ficando ambos com a msm versão


### **npm scripts** (Atalhos do terminal)

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Estes scripts referem-se às diferentes fases de desenvolvimento de uma aplicação:

- `dev` - inicia o Next.js em modo de desenvolvimento
- `build` - constroi a aplicação para utilização na produção
- `start` - inicia um servidor de produção Next.js
- `lint` - cria a configuração ESLint integrada do Next.js

Crie a pasta `pages` ou `public` e em seguida o arquivo `.js` com a base do componente

### **Ex.**
```
npm run dev // Gera a URL da aplicação rodando localmente
```

`CTRL + C` -> para a aplicação

CSS-JS -> Escopo por padrão, ou seja, não precisa se preocupar em quebrar as estilização por ter mudado o nome de uma class, no CSS-JS é tudo alto contido. Mexendo apenas em pontos expecificos do elemento da interface.

```
<div style={{ backgroundColor: "red" }}>Hello Word</div>
```

A 1º `{}` indica que estamos passando um valor para o JS e a 2º `{}` indica o OBJ, pois no react passamos a estilização por meio de um OBJ. Os elementos CSS não contem o `-`, e sim utilizam o padrão camelCase, o valor das propriedades, sem ser um valor numerico, são declarados em forma de string `""`.

## **Arquivo `config.json`**

OBJ que contem informações como o nome, cargo...

### **Para usar basta importar normalmente e para utilizar basta colocar o nome da dado na importação:**
```
import config from "../config.json";

<div>
    {config.name}
</div>
```

## **Vercel**

**Exemplo de implementações**
https://github.com/vercel/next.js/tree/canary/examples

Tendo a base já pronta com o styled-components configurado


## **Lib para auxiliar no CSS**

https://styled-components.com

#

### **Extensão VSCODE**
`vscode-styled-components`

#

- Instalar o styled-components
```
npm install styled-components
```

- criar pasta `next.config.js` e colar esse codigo:
```
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
```
Faz uso do compilador do styledComponents

esse arquivo `next.config.js` pode ser usado para configurar diversas outra coisas

### **Forma padrão de importação**
```
import styled from "styled-components";
```

### **Estilização**

```
const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;
```

A partir dessa variavel passamos a ter um componente chamado `StyledHeader` que tem as propriedades de uma `<div>` porém já tem o seu próprio estilo

O `styled` já possue uma function para cada tag encurtando o processo de ter que criar um novo arquivo separado 

## **`Object.keys()`**

Pega a chave do OBJ desejado, Se o OBJ desejado armazena outros OBJ dentro dele, o componente `Object.keys()` vai gerar um array com a chave de cada OBJ presente

## **`forEach()` VS `map()`**

`for()` -> Statement

`forEach()` -> Retorno por expressão
```
[1,2,3].forEach(() => { return "aaa" }) // retorna undefined
```

`map()` -> Retorno por expressão
```
[1,2,3].map(() => { return "aaa" }) // retorna um novo array `['aaa', 'aaa', 'aaa']`
```
