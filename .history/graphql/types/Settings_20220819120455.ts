import { objectType } from 'Nexus'
//import { User } from './User'

export const Settings = objectType({
    name: 'Settings',
    definition(t) {
        t.string('settingsId');
        t.boolean('pending');
        t.boolean('accepted');
        t.boolean('sold');
    }
})
