# 🧪 Projeto de Testes com PactumJS

Este é um projeto **experimental de testes de API** utilizando o [PactumJS](https://pactumjs.github.io/) — uma biblioteca moderna e leve para testes de APIs REST.  
O objetivo principal deste projeto é **estudo e prática** com PactumJS, organizando exemplos e experimentos em testes automatizados.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [PactumJS](https://pactumjs.github.io/)
- [Mocha](https://mochajs.org/) *(default do PactumJS)*
- Relatório HTML com [mochawesome](https://github.com/adamgruber/mochawesome) *(opcional)*

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/C9999/pactumJS.git
cd pactumJS
```

2. Instale as dependências:

```bash
npm install
```

---

## 🧪 Como rodar os testes

### Testes com saída no terminal

```bash
npm run test
```

> Isso executará os testes que estiverem no diretório `tests/` ou conforme definido no seu `package.json`.


## 📁 Estrutura do Projeto

```text
pactumjs/
│
├── tests/              # Testes automatizados
│   └── exemplo1.test.js
│
├── utils/              # Funções utilitárias (ex: logger)
│   └── logger.js
│
├── package.json
└── README.md
```

---

## ✅ Exemplo de Teste

```js
const { spec } = require('pactum');

it('Deve obter um usuário aleatório', async () => {
  await spec()
    .get('https://randomuser.me/api')
    .expectStatus(200)
    .expectJsonLike({
      results: [{ gender: 'male' }]
    });
});
```

---

## 📚 Observações

- Este projeto **não é voltado para produção**, sendo um ambiente de estudos e experimentações com PactumJS.
- Sinta-se livre para contribuir com melhorias, novos exemplos ou organizar os testes de outras formas.

---

## ✍️ Autor

Feito com dedicação por Carlos Araújo.  
Entre em contato: [car_soad@hotmail.com]
