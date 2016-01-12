import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sassy-tomster', 'Integration | Component | sassy tomster', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{sassy-tomster}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#sassy-tomster}}
      template block text
    {{/sassy-tomster}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
