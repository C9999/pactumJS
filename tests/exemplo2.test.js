const { spec } = require('pactum');
const { printLog } = require('../support/logger');

const api = 'https://randomuser.me/api';

describe('Exercícios básicos com PactumJS', () => {
    it('Deve retornar os usuários aleatórios', async () => {
        await spec()
            .get(api);
    });

    it('Deve obter os usuários masculinos', async () => {
        const response= await spec()
            .get(api)
            .withQueryParams('gender', 'male')
            .expectStatus(200)
            .expectJsonLike({
                "results": [{
                    "gender": "male"
                }]
            });
            const users = response.body.results;

            users.forEach(user => {
              console.log(user.name.first);
            });

            printLog(response);
    });
});