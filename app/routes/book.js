import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("book router!");
    return this.store.find('book', params.id);
  }
});
