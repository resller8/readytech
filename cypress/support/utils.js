/**
 * verify breed structure
 * @param {Array<Object>} e response body
 * @param {Object} f breed record
 * @param {Object} g link record
 * @param {Object} h body
 * @param {Object} o options
 */
export function verifyBreedStructure(e, f, g, h, o) {
  const len = o?.len || 15;

  // check the total records
  expect(e.data.length, `Exceeds ${len} records`).to.be.below(len + 1);

  // checks the record object structure
  e.data.forEach((item) => {
    expect(item, 'Invalid structure').to.have.all.keys('breed', 'country', 'origin', 'coat', 'pattern');
  });

  // checks the links  structure
  e.links.forEach((item) => {
    expect(item, 'Invalid structure').to.have.all.keys('url', 'label', 'active');
  });

  // check if data exists
  expect(e.data, 'Breed record not found').to.containSubset([f]);

  // check if link exists
  expect(e.links, 'Link record not found').to.containSubset([g]);

  // check body
  expect(e, 'Payload mismatch').to.containSubset(h);
}

/**
 * verify facts structure
 * @param {Array<Object>} e response body
 * @param {Object} f fact record
 * @param {Object} g link record
 * @param {Object} h body
 * @param {Object} o options
 */
export function verifyFactsStructure(e, f, g, h, o) {
  const len = o?.len || 15;

  // check the total records
  expect(e.data.length, `Exceeds ${len} records`).to.be.below(len + 1);

  if (Object.entries(f).length > 0) {
    // checks the record object structure
    e.data.forEach((item) => {
      expect(item, 'Invalid structure').to.have.all.keys('fact', 'length');
    });
  }

  // checks the links  structure
  e.links.forEach((item) => {
    expect(item, 'Invalid structure').to.have.all.keys('url', 'label', 'active');
  });

  if (Object.entries(f).length > 0) {
    // check if data exists
    expect(e.data, 'Fact record not found').to.containSubset([f]);
  }

  // check if link exists
  expect(e.links, 'Link record not found').to.containSubset([g]);

  // check body
  expect(e, 'Payload mismatch').to.containSubset(h);
}
