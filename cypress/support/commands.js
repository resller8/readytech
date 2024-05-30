const url = 'https://catfact.ninja';

/**
 * sends breeds api
 */
Cypress.Commands.add('breeds', (limit = 0, page = 0) => {
  return cy.request({
    url: url + '/breeds',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-CSRF-TOKEN': ''
    },
    qs: {
      limit: limit,
      page: page
    },
    failOnStatusCode: false
  });
});

/**
 * sends fact api
 */
Cypress.Commands.add('fact', (max_length = 20) => {
  return cy.request({
    url: url + '/fact',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-CSRF-TOKEN': ''
    },
    qs: {
      max_length: max_length
    },
    failOnStatusCode: false
  });
});

/**
 * sends facts api
 */
Cypress.Commands.add('facts', (max_length = 20, limit = 0, page = 0) => {
  return cy.request({
    url: url + '/facts',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-CSRF-TOKEN': ''
    },
    qs: {
      max_length: max_length,
      limit: limit,
      page: page
    },
    failOnStatusCode: false
  });
});
