import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
/*    model() {
        return this.store.createRecord('contact', {
            nom: 'Pas de nom'
        });
    },  */
    model(params) {
        return this.store.findRecord('contact', params.contact_id);
    },
    afterModel
    actions: {
        addContact(contact) {
            contact.save().then(() => {
                    this.transitionTo('contacts');
                }
            )
        }
    }
});
