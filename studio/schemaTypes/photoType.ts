
import { defineType, defineField } from 'sanity'

export const photoType = defineType({
    name: 'photo',
    title: 'Photos',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Photo Title',
            type: 'string',
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
            title: 'Caption',
            type: 'text',
        }),

        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),

        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Smaller numbers appear first.',
        }),
    ],
})
