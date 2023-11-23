import payload from "payload";

/** @type {import('payload/types').CollectionConfig} */

const Blogs = {
  slug: "blogs",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
    },
    {
      name: "author",
      type: "text",
      label: "Author",
    },
    {
      name: "content",
      type: "text",
      label: "Content",
    },
    {
      name: "media",
      type: "relationship",
      relationTo: "media",
      label: "Media",
    },
  ],
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "log",
            data: {
              type: "Blog",
              name: args.result.title,
              action: "Created",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "updateByID") {
          payload.create({
            collection: "log",
            data: {
              type: "Blog",
              name: args.result.title,
              action: "Updated",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "deleteByID") {
          payload.create({
            collection: "log",
            data: {
              type: "Blog",
              name: args.result.title,
              action: "Deleted",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "log",
            data: {
              type: "Blog",
              name: args.result.title,
              action: "Deleted",
              timestamp: new Date(),
            },
          });
        }
      },
    ],
  },
};

export default Blogs;
