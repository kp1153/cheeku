export default {
  name: 'product',
  title: 'उत्पाद',
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
    {
      name: 'price',
      title: 'कीमत',
      type: 'number',
    },
    {
      name: 'image',
      title: 'फोटो',
      type: 'image',
    },
    {
      name: 'description',
      title: 'विवरण',
      type: 'text',
    },
    {
      name: 'company',
      title: 'कंपनी का नाम',
      type: 'string',
    },
    {
      name: 'category',
      title: 'मुख्य श्रेणी',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'subcategory',
      title: 'उप-श्रेणी',
      type: 'reference',
      to: [{ type: 'subcategory' }],
    },
  ],
}