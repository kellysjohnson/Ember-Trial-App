import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  LOG_TRANSITIONS: true,
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

// App.Router.map(function(){
//   this.route('about', {path: '/aboutus'});
// });

// The about path will be loaded in the 'outlet section'
// The index.html loads first, then goes to retreive each of the templates
// #tells the browser that everything after is not part of the file template


loadInitializers(App, config.modulePrefix);

export default App;
