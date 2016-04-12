import Ember from 'ember';
const { ACTION } = Ember.__loader.require('ember-routing-htmlbars/keywords/closure-action');

export default Ember.Helper.extend({

  redux: Ember.inject.service('redux'),

  compute(params, hash) {
    let redux = this.get('redux');

    let action = (event) => {

      Ember.run.join(() => {
        redux.dispatch(
          Object.assign({}, hash, {
            type: params[0],
            event
          }));
      });
    };

    action[ACTION] = true;
    return action;
  }
});
