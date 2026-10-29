
import { defineType, defineField } from 'sanity'

export const prettiestPhotoType = defineType({
    name: 'prettiestPhoto',
    title: 'Prettiest',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'caption',
            title: 'Caption or Sticker Text',
            type: 'string',
        }),

        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
})
