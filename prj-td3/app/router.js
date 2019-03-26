import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts', function() {
    this.route('add');
    this.route('update');
  });

  this.route('contactss', function() {});
});

export default Router;
