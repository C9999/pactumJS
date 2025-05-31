const pactum = require('pactum');

describe('Primeiro exemplo com PactumJS', () => {
    it('Deve retornar 200 da API pública', async () => {
        await pactum.spec()
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .expectStatus(200)
            .expectJsonLike({
                id: 1
            });
    });
});
