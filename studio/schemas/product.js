export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'ProductID',
      title: 'ProductID',
      type: 'number'
    },
    {
      name: 'ProductNumber',
      title: 'ProductNumber',
      type: 'string'
    },
    {
      name: 'CategoryName',
      title: 'CategoryName',
      type: 'string'
    },
    {
      name: 'TitleName',
      title: 'TitleName',
      type: 'string'
    },
    {
      name: 'ProductName',
      title: 'ProductName',
      type: 'string'
    },
    {
      name: 'ProductDescription',
      title: 'ProductDescription',
      type: 'text'
    },
    {
      name: 'Dimension',
      title: 'Dimension',
      type: 'string'
    },
    {
      name: 'Weight',
      title: 'Weight',
      type: 'number'
    },
    {
      name: 'BoxNumber',
      title: 'BoxNumber',
      type: 'number'
    },
    {
      name: 'CartonNumber',
      title: 'CartonNumber',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'ProductName'
    }
  }
}
