import { config, list } from "@keystone-6/core";
import { relationship, text } from '@keystone-6/core/fields';

const lists = {
    User: list({
        fields: {
            name: text({ validation: { isRequired: true }}),
            email: text({ validation: { isRequired: true }, isIndexed: 'unique'}),
            posts: relationship({ ref: 'Post.author', many: true }) // User can have many posts
        }
    }),
    Post: list({
        fields: {
            title: text(),
            author: relationship({
                 ref: 'User.posts',
                 ui: {
                     displayMode: 'cards',
                     cardFields: ['name', 'email'],
                     inlineEdit: { fields: ['name', 'email'] },
                     linkToItem: true,
                     inlineCreate: { fields: ['name', 'email'] },
                 }
            }) // Post can only have one author
        }
    })
};

export default config({
    db: {
        provider: 'sqlite',
        url: 'file:./keystone.db',
    },
    lists,
});