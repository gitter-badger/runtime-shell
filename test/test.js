'use strict';

const test = require('tape');
const rshell = require('../');

test('is a function', function(t) {
  t.equal(typeof rshell, 'function');
  t.end();
});

test('has a version', function(t) {
  t.equal(typeof rshell.version, 'string');
  t.end();
});

test('creates shell commands without errors', function(t) {
  try {
    rshell();
  } catch(e) {
    t.fail();
  }
  t.end();
});

// TODO: 'runs shell commands' test
