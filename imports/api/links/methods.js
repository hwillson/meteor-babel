// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import anonymousFunction from '../anonymousFunction';
import namedFunction from '../namedFunction';

/**
 * methods
 */
Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    const args = ['foo', 'bar', 1, 2, 3, { a: 'b', c: 1 }];
    const anon = anonymousFunction(...args);
    const named = namedFunction(...args);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
