import Route from '@ember/routing/route';
import /* EmberObject, */ { set } from '@ember/object';

export default Route.extend({
    templateName: 'developer/new',
    afterModel(model) {
        set(model, 'copy', JSON.stringify(model));
        return model;
    }
});
