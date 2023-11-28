import payload from "payload";

/** @type {import('payload/types').CollectionConfig} */

const Media = {
  slug: "media",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Media",
    plural: "Media",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "url",
      type: "text",
      label: "Media URL",
    },
    {
      name: "alt",
      type: "text",
      label: "Media Alt",
    }
  ],
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "log",
            data: {
              type: "Media",
              name: args.result.url,
              action: "Created",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "updateByID") {
          payload.create({
            collection: "log",
            data: {
              type: "Media",
              name: args.result.url,
              action: "Updated",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "deleteByID") {
          payload.create({
            collection: "log",
            data: {
              type: "Media",
              name: args.result.url,
              action: "Deleted",
              timestamp: new Date(),
            },
          });
        }
        // } else if (args.operation == "delete") {
        //   payload.create({
        //     collection: "log",
        //     data: {
        //       type: "Media",
        //       name: args.result.url,
        //       action: "Deleted",
        //       timestamp: new Date(),
        //     },
        //   });
        // }
      },
    ],
  },
};

export default Media;
