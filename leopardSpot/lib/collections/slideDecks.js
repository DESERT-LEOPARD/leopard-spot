SlideDecks = new Mongo.Collection('slideDecks');

SlideDecks.allow({
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.owner === userId;
  },
  fetch: ['owner']
});

SlideDecks.deny({
  update: function (userId, docs, fields, modifier) {
    // can't change owners
    return _.contains(fields, 'owner');
  },
  remove: function (userId, doc) {
    // can't remove locked documents
    return doc.locked;
  },
  fetch: ['locked'] // no need to fetch 'owner'
});

Meteor.methods({
  'createSlideDeck': function(slideDeck) {
    check(Meteor.userId(), String);
    check(slideDeck, {

    });
  },



});