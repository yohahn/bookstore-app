import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    new() {
      var self = this;
      var book = this.store.createRecord('book', this.get('fields'));
      book.save().then(() => {
        self.transitionToRoute('book', book);
      });
    },
    cancel() {
      this.transitionToRoute('books');
    }
  }
});
