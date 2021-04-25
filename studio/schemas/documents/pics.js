export default {
  title: "Pics",
  name: "pics",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Picture",
      name: "picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
