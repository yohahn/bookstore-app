import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log("books router!");
    return this.store.findAll('book');
  }
});
