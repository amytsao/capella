export default {
  name: 'route',
  title: 'Route',
  type: 'document',
  fields: [
    {
      name: 'routeName',
      title: 'Name',
      type: 'string',
      validation: Rules => Rules.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rules => Rules.required(),
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      description: 'An empty meta title defaults to "Name | Cornerstone". A custom meta title does NOT automatically append " | Cornerstone"',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'metaKeywords',
      title: 'Meta Keywords',
      description: 'Comma separated list of keywords',
      type: 'string',
    },
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      routeName: 'routeName',
      slug: 'slug.current'
    },
    prepare(selection) {
      const {routeName, slug} = selection
      return Object.assign({}, selection, {
        title: `${routeName} (${slug})`
      })
    }
  }
};
