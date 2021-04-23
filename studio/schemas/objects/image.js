export default {
  type: "object",
  name: "iPhoneImage",
  title: "iPhone Image",
  fields: [
    {
      name: "iPhoneImage",
      type: "image",
      title: "iPhone Image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare({ media }) {
      return {
        media,
      };
    },
  },
};
