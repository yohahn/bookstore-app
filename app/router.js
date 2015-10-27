import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');

  this.route('books');
  this.route('book', { path: '/books/:id' });
  this.route('bookEdit', { path: '/books/:id/edit' });
});

export default Router;
