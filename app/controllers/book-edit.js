import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      var self = this;
      var bookModel = this.get("model");
      bookModel.save().then(function() {
        self.transitionToRoute('book', bookModel);
      });
    },
    cancel() {
      Ember.Logger.debug("transitionToRoutet book!");
      var bookModel = this.get("model");
      bookModel.rollbackAttributes();
      this.transitionToRoute('book', bookModel);
    }
  }
});
