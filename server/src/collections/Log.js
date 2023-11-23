/** @type {import('payload/types').CollectionConfig} */

const Log = {
    slug: 'log',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'type',
            label: 'Type',
            type: 'text',
            required: true,
        },
        {
            name: 'name',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'action',
            label: 'Action',
            type: 'text',
            required: true,
        },
    ],
};

export default Log;
