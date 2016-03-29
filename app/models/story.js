import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  category: DS.attr(),
  timestamp: DS.attr()
});
