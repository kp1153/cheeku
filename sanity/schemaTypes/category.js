export default {
  name: 'category',
  title: 'मुख्य श्रेणी',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'नाम',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'स्लग',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
  ],
}