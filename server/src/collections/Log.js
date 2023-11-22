/** @type {import('payload/types').CollectionConfig} */

const Log = {
  slug: "log",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "type",
      label: "Type",
      type: "text",
      required: true,
    },
    {
      name: "name",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "action",
      type: "text",
      required: true,
    },
    {
      name: "timestamp",
      type: "date",
      required: true,
    },
  ],
};

export default Log;