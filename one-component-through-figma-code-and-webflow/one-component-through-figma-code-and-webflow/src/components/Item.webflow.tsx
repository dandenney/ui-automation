import { Item } from './Item';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

export default declareComponent(Item, {
  name: 'Item',
  description: 'A flexible item component with title, description, and size variants',
  group: 'Content',
  props: {
    title: props.Text({
      name: 'Title',
      defaultValue: 'Item title',
    }),
    description: props.Text({
      name: 'Description',
      defaultValue: 'Item description',
    }),
    size: props.Variant({
      name: 'Size',
      options: ['default', 'large'],
      defaultValue: 'default',
    }),
  },
});

