import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      var self = this;
      var book = this.get("model");
      book.save().then(() => {
        self.transitionToRoute('books');
      });
    },
    cancel() {
      var book = this.get("model");
      book.rollbackAttributes();
      this.transitionToRoute('books');
    },
    delete() {
      var self = this;
      var book = this.get("model");
      book.destroyRecord().then(() => {
        self.transitionToRoute('books');
      })
    }
  }
});
