export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'bgcolor',
      title: 'Background Color',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
