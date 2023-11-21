import { CollectionConfig } from "payload/types";

const Blogs: CollectionConfig = {
  slug: "blogs",
  labels: {
    singular: "Blog",
    plural: "Blogs",
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
      label: "Media",
      relationTo: "media",
    },
  ],
};

export default Blogs;
