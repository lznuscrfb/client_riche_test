import Route from '@ember/routing/route';

export default Route.extend({
    template:'contacts/add',
    afterModel(model, transition) {
        set(model, 'copy', {
            firstname:get(model, 'firstname'),
            lastname:get(model, 'lastname'),
            email:get(model, 'email'),
            id:get(model, 'id')
        });
    },
    actions: {
        save(contact, updated),
        save(),
        save(),
        save()
    }
});
