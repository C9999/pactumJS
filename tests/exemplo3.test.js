const { spec } = require('pactum');
const { printLog } = require('../support/logger');

const api = 'https://randomuser.me/api/?results=5';

describe('Como o PactumJS trata testes com falha', () => {
    it('Deve obter os usuários femininos', async () => {
        await spec()
            .get(api)
            .withQueryParams('gender', 'male')
            .expectStatus(201)
            .expectJsonLike({
                "results": [{
                    "gender": "female"
                }]
            });
    });
});