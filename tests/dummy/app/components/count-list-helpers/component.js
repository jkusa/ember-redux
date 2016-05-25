import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs`
    <span class="parent-state">{{get-state "low"}}</span>
    <button class="btn-up" onclick={{dispatch "UP"}}>up</button>
    {{count-detail high=(get-state "high") down=(dispatch "DOWN")}}
    <span class="name-state">{{get-state "name"}}</span>
    <button class="btn-name" onclick={{dispatch "UPDATE_NAME" value="Zoey"}}>update name</button>
  `
});
