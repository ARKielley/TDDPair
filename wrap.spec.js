const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it(`Returns the input string if the input string's length is less maxLen`, () => {
    expect(wrap("Hello", 10)).to.equal("Hello");
  });

  it(`Returns word split at line if word length is greater than maxLen`, () => {
    expect(wrap("Albuquerque is the coolest. It's probably the best, too.", 25)).to.equal(`Albuquerque is the\ncoolest. It's probably\nthe best, too.`);
  })

  it(`Returns a properly wrapped string if the input string's length is greater maxLen`, () => {
    expect(wrap("Hello, my name is", 10)).to.equal(`Hello, my\nname is`);
  })

  it(`Returns word split at line if word length is greater than maxLen`, () => {
    expect(wrap("Albuquerque is the coolest", 8)).to.equal(`Albuquer\nque is\nthe\ncoolest`);
  })



});
