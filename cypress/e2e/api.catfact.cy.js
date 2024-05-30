describe('Verification of Breeds API', () => {
  it('Verify sending with a limit of 0 "https://catfact.ninja/breeds?limit=0"', () => {
    cy.breeds().then((response) => {
      expect(response.status).to.be.equals(200);

      const recBreed = { breed: 'Abyssinian', coat: 'Short', country: 'Ethiopia', origin: 'Natural/Standard', pattern: 'Ticked' };

      const recLink = { active: true, label: '1', url: 'https://catfact.ninja/breeds?page=1' };

      const recBody = {
        current_page: 1,
        first_page_url: 'https://catfact.ninja/breeds?page=1',
        from: 1,
        last_page: 7,
        last_page_url: 'https://catfact.ninja/breeds?page=7',
        next_page_url: 'https://catfact.ninja/breeds?page=2',
        path: 'https://catfact.ninja/breeds',
        per_page: 15,
        prev_page_url: null,
        to: 15,
        total: 98
      };

      Cypress.utils.verifyBreedStructure(response.body, recBreed, recLink, recBody);
    });
  });

  it('Verify sending with a limit of 0 with next page "https://catfact.ninja/breeds?limit=0&page=2"', () => {
    cy.breeds(0, 2).then((response) => {
      expect(response.status).to.be.equals(200);

      const recBreed = {
        breed: 'Brazilian Shorthair',
        coat: 'Short',
        country: 'Brazil',
        origin: 'Natural',
        pattern: 'All'
      };

      const recLink = {
        active: false,
        label: 'Previous',
        url: 'https://catfact.ninja/breeds?page=1'
      };

      const recBody = {
        current_page: 2,
        first_page_url: 'https://catfact.ninja/breeds?page=1',
        from: 16,
        last_page: 7,
        last_page_url: 'https://catfact.ninja/breeds?page=7',
        next_page_url: 'https://catfact.ninja/breeds?page=3',
        path: 'https://catfact.ninja/breeds',
        per_page: 15,
        prev_page_url: 'https://catfact.ninja/breeds?page=1',
        to: 30,
        total: 98
      };

      Cypress.utils.verifyBreedStructure(response.body, recBreed, recLink, recBody);
    });
  });

  it('Verify sending with a limit of 0 with last page "https://catfact.ninja/breeds?limit=0&page=7"', () => {
    cy.breeds(0, 7).then((response) => {
      expect(response.status).to.be.equals(200);

      const recBreed = { breed: 'Thai', coat: 'Short', country: 'Thailand', origin: 'Natural', pattern: 'Colorpoint' };

      const recLink = { active: false, label: 'Previous', url: 'https://catfact.ninja/breeds?page=6' };

      const recBody = {
        current_page: 7,
        first_page_url: 'https://catfact.ninja/breeds?page=1',
        from: 91,
        last_page: 7,
        last_page_url: 'https://catfact.ninja/breeds?page=7',
        next_page_url: null,
        path: 'https://catfact.ninja/breeds',
        per_page: 15,
        prev_page_url: 'https://catfact.ninja/breeds?page=6',
        to: 98,
        total: 98
      };

      Cypress.utils.verifyBreedStructure(response.body, recBreed, recLink, recBody);
    });
  });

  it('Verify sending with a limit of 50 "https://catfact.ninja/breeds?limit=50"', () => {
    cy.breeds(50).then((response) => {
      expect(response.status).to.be.equals(200);

      const recBreed = { breed: 'Abyssinian', coat: 'Short', country: 'Ethiopia', origin: 'Natural/Standard', pattern: 'Ticked' };

      const recLink = { active: true, label: '1', url: 'https://catfact.ninja/breeds?page=1' };

      const recBody = {
        current_page: 1,
        first_page_url: 'https://catfact.ninja/breeds?page=1',
        from: 1,
        last_page: 2,
        last_page_url: 'https://catfact.ninja/breeds?page=2',
        next_page_url: 'https://catfact.ninja/breeds?page=2',
        path: 'https://catfact.ninja/breeds',
        per_page: 50,
        to: 50,
        total: 98
      };

      Cypress.utils.verifyBreedStructure(response.body, recBreed, recLink, recBody, { len: 50 });
    });
  });

  it('Verify sending with a limit of 50 "https://catfact.ninja/breeds?limit=50&page=2"', () => {
    cy.breeds(50, 2).then((response) => {
      expect(response.status).to.be.equals(200);

      const recBreed = {
        breed: 'LaPerm',
        coat: 'Rex',
        country: 'United States',
        origin: 'Mutation',
        pattern: 'All'
      };

      const recLink = {
        active: false,
        label: 'Previous',
        url: 'https://catfact.ninja/breeds?page=1'
      };

      const recBody = {
        current_page: 2,
        first_page_url: 'https://catfact.ninja/breeds?page=1',
        from: 51,
        last_page: 2,
        last_page_url: 'https://catfact.ninja/breeds?page=2',
        next_page_url: null,
        path: 'https://catfact.ninja/breeds',
        per_page: 50,
        prev_page_url: 'https://catfact.ninja/breeds?page=1',
        to: 98,
        total: 98
      };

      Cypress.utils.verifyBreedStructure(response.body, recBreed, recLink, recBody, { len: 50 });
    });
  });

  it('Verify sending with a limit of 100 "https://catfact.ninja/breeds?limit=100"', () => {
    cy.breeds(100).then((response) => {
      console.log('🚀 ~ cy.breeds ~ response:', response);
      expect(response.status).to.be.equals(200);

      const recBreed = { breed: 'Abyssinian', coat: 'Short', country: 'Ethiopia', origin: 'Natural/Standard', pattern: 'Ticked' };

      const recLink = { active: true, label: '1', url: 'https://catfact.ninja/breeds?page=1' };

      const recBody = {
        current_page: 1,
        first_page_url: 'https://catfact.ninja/breeds?page=1',
        from: 1,
        last_page: 1,
        last_page_url: 'https://catfact.ninja/breeds?page=1',
        next_page_url: null,
        path: 'https://catfact.ninja/breeds',
        per_page: 100,
        prev_page_url: null,
        to: 98,
        total: 98
      };

      Cypress.utils.verifyBreedStructure(response.body, recBreed, recLink, recBody, { len: 100 });
    });
  });

  it('Verify sending with a limit of -1 "https://catfact.ninja/breeds?limit=-1"', () => {
    cy.breeds(-1).then((response) => {
      expect(response.status).to.be.equals(404);
      expect(response.body.code).to.be.equals(404);
      expect(response.body.message).to.be.equals('Not Found');
    });
  });
});

describe('Verification of Fact API', () => {
  it('Verify max length of 20 "https://catfact.ninja/fact?max_length=20"', () => {
    cy.fact().then((response) => {
      expect(response.status).to.be.equals(200);
      expect(response.body.length).to.be.equals(20);
      expect(response.body.fact.length).to.be.equals(20);
    });
  });

  it('Verify max length less than 20 "https://catfact.ninja/fact?max_length=10"', () => {
    cy.fact(10).then((response) => {
      expect(response.status).to.be.equals(200);
      expect(response.body.length).to.be.undefined;
      expect(response.body.fact).to.be.undefined;
    });
  });

  it('Verify max length of 100 "https://catfact.ninja/fact?max_length=100"', () => {
    cy.fact(100).then((response) => {
      expect(response.status).to.be.equals(200);
      expect(response.body.length).to.be.above(20);
      expect(response.body.fact.length).to.be.above(20);
    });
  });
});

describe('Verification of Facts API', () => {
  it('Verify max length of 20 "https://catfact.ninja/fact?max_length=20&limit=0"', () => {
    cy.facts().then((response) => {
      expect(response.status).to.be.equals(200);

      const recFact = { fact: 'Cats have 3 eyelids.', length: 20 };

      const recLink = { active: true, label: '1', url: 'https://catfact.ninja/facts?page=1' };

      const recBody = {
        current_page: 1,
        first_page_url: 'https://catfact.ninja/facts?page=1',
        from: 1,
        last_page: 1,
        last_page_url: 'https://catfact.ninja/facts?page=1',
        next_page_url: null,
        path: 'https://catfact.ninja/facts',
        per_page: 10,
        prev_page_url: null,
        to: 1,
        total: 1
      };

      Cypress.utils.verifyFactsStructure(response.body, recFact, recLink, recBody, { len: 1 });
    });
  });

  it('Verify max length less than 20 "https://catfact.ninja/fact?max_length=10&limit=0"', () => {
    cy.facts(10).then((response) => {
      expect(response.status).to.be.equals(200);

      const recFact = {};

      const recLink = { active: true, label: '1', url: 'https://catfact.ninja/facts?page=1' };

      const recBody = {
        current_page: 1,
        first_page_url: 'https://catfact.ninja/facts?page=1',
        from: null,
        last_page: 1,
        last_page_url: 'https://catfact.ninja/facts?page=1',
        next_page_url: null,
        path: 'https://catfact.ninja/facts',
        per_page: 10,
        prev_page_url: null,
        to: null,
        total: 0
      };

      Cypress.utils.verifyFactsStructure(response.body, recFact, recLink, recBody, { len: 1, nodata: true });
    });
  });

  it('Verify max length of 100 "https://catfact.ninja/fact?max_length=100&limit=0"', () => {
    cy.facts(100, 0).then((response) => {
      expect(response.status).to.be.equals(200);

      const recFact = { fact: 'Cats have 3 eyelids.', length: 20 };

      const recLink = { active: true, label: '1', url: 'https://catfact.ninja/facts?page=1' };

      const recBody = {
        current_page: 1,
        first_page_url: 'https://catfact.ninja/facts?page=1',
        from: 1,
        last_page: 18,
        last_page_url: 'https://catfact.ninja/facts?page=18',
        next_page_url: 'https://catfact.ninja/facts?page=2',
        path: 'https://catfact.ninja/facts',
        per_page: 10,
        prev_page_url: null,
        to: 10,
        total: 174
      };

      Cypress.utils.verifyFactsStructure(response.body, recFact, recLink, recBody, { len: 10, nodata: true });
    });
  });

  it('Verify max length of 100 "https://catfact.ninja/fact?max_length=100&limit=0&page=2"', () => {
    cy.facts(100, 0, 2).then((response) => {
      expect(response.status).to.be.equals(200);

      const recFact = {
        fact: 'A group of cats is called a “clowder.”',
        length: 38
      };

      const recLink = { active: false, label: 'Previous', url: 'https://catfact.ninja/facts?page=1' };

      const recBody = {
        current_page: 2,
        first_page_url: 'https://catfact.ninja/facts?page=1',
        from: 11,
        last_page: 18,
        last_page_url: 'https://catfact.ninja/facts?page=18',
        next_page_url: 'https://catfact.ninja/facts?page=3',
        path: 'https://catfact.ninja/facts',
        per_page: 10,
        prev_page_url: 'https://catfact.ninja/facts?page=1',
        to: 20,
        total: 174
      };

      Cypress.utils.verifyFactsStructure(response.body, recFact, recLink, recBody, { len: 10, nodata: true });
    });
  });
});
