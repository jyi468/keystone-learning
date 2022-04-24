import { config, list } from "@keystone-6/core";
import { relationship, select, text, timestamp } from '@keystone-6/core/fields';

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
            publishedAt: timestamp(),
            author: relationship({
                 ref: 'User.posts',
                 ui: {
                     displayMode: 'cards',
                     cardFields: ['name', 'email'],
                     inlineEdit: { fields: ['name', 'email'] },
                     linkToItem: true,
                     inlineCreate: { fields: ['name', 'email'] },
                 }
            }), // Post can only have one author
            status: select({
                options: [
                    { label: 'Published', value: 'published' },
                    { label: 'Draft', value: 'draft' },
                ],
                defaultValue: 'draft',
                ui: { displayMode: 'segmented-control' },
            })
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