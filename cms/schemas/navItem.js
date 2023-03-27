import subLink from "./subLink"

export default {
  name: 'navItem',
  title: 'Nav item',
  type: 'document',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
    },
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      title: 'External',
      name: 'external',
      type: 'boolean',
    },
    {
      title: 'Sub Links',
      name: 'subLinks',
      type: 'array',
      of: [{ type: 'subLink' }],
    },
  ],
}
