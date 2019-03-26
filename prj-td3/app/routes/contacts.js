import Route from '@ember/routing/route';
import EmberObject, { computed, get, set } from '@ember/object';

let Contacts = EmberObject.extend({
    datas:null,
    contacts:computed('datas.@each.isDeleted', function() {
        return this.datas.filter((item) => !item.get('isDeleted'))
    })
});

export default Route.extend({
    model() {
        return Contacts.create({
            datas: this.store.findAll('contact')
        })
    },
    actions: {
        delete(contact) {
            contact.deleteRecord();
        }
    }
});
