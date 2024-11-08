// schemas/page.js

import previewUrl from "./previewUrl";

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
   
    {
      name: 'pageslug',
      type: 'slug',
      title: 'pageslug',
      options: {
        source: 'title', // Automatically generate slug from title
        maxLength: 96,
      },
    },



 
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Title is required')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('Slug is required')
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: Rule => Rule.required().error('Category is required')
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              description: 'Optional URL to redirect when the image is clicked',
            },
          ],
        },
        { type: 'bioBlock' },
        { type: 'video' },
        { type: 'swiper' },
        { type: 'table' },
        { type: 'rawHtml' },
        { type: 'companyInfo' },
      ],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: Rule => Rule.required().error('Author is required')
    },
    {
      name: 'socialImage',
      title: 'Social Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Social Image is required')
    },
    {
      name: 'featured',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Featured Image is required')
    },
    {
      name: 'publishedAt',
      title: 'Updated at',
      type: 'datetime',
      validation: Rule => Rule.required().error('Updated at is required')
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.required().error('Excerpt is required')
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featured',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
  previewUrl: previewUrl,
}
    // Add any additional fields needed
  

