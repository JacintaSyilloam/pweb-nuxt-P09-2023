import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */

const Blogs = {
    slug: 'blogs',
    admin: {
        useAsTitle: 'name',
    },
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
        },
        {
            name: 'author',
            type: 'text',
            label: 'Author',
        },
        {
            name: 'content',
            type: 'textarea',
            label: 'Content',
        },
        {
            name: 'media',
            type: 'relationship',
            relationTo: 'media',
            label: 'Media',
        },
        {
            name: 'date',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'MMM dd, yyyy',
                },
            },
            label: 'Published Date',
        },
    ],
    hooks: {
        afterOperation: [
            async (args) => {
                // console.log("[DEBUG args]" + args);
                if (args.operation == 'create') {
                    // console.log("[DEBUG args.result.title]" + args.result.title);

                    payload.create({
                        collection: 'log',
                        data: {
                            type: 'Blog',
                            name: args.result.title,
                            action: 'Created',
                            timestamp: new Date(),
                        },
                    });
                } else if (args.operation == 'updateByID') {
                    // console.log("[DEBUG args.result.title]" + args.result.title);

                    payload.create({
                        collection: 'log',
                        data: {
                            type: 'Blog',
                            name: args.result.title,
                            action: 'Updated',
                            timestamp: new Date(),
                        },
                    });
                } else if (args.operation == 'deleteByID') {
                    // console.log("[DEBUG args.result.title]" + args.result.title);

                    payload.create({
                        collection: 'log',
                        data: {
                            type: 'Blog',
                            name: args.result.title,
                            action: 'Deleted',
                            timestamp: new Date(),
                        },
                    });
                }
                // } else if (args.operation == "delete") {
                //   payload.create({
                //     collection: "log",
                //     data: {
                //       type: "Blog",
                //       name: args.result.title,
                //       action: "Deleted",
                //       timestamp: new Date(),
                //     },
                //   });
                // }
            },
        ],
    },
};

export default Blogs;
