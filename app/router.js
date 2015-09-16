import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
});

{{#link-to 'index' class="navbar class"}} Home Page {{/link-to}}
{{#link-to 'about'}} About {{/link-to}}

export default Router;
