import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

// User list is list that auth should be applied to
const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    sessionData: 'name',
    secretField: 'password',
    initFirstItem: { // If you have no Users, you will be prompted to create one on Admin UI load
        fields: ['name', 'email', 'password'],
    }
});

let sessionSecret = 'secret - CHANGE THIS - must be at least 32 characters';
let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
    secret: sessionSecret,
    maxAge: sessionMaxAge,
})

export { withAuth, session }