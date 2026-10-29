
import { defineType, defineField } from 'sanity'

export const articleType = defineType({
    name: 'article',
    title: 'Blog Articles',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Article Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Life', value: 'LIFE' },
                    { title: 'Tech', value: 'TECH' },
                    { title: 'Beauty', value: 'BEAUTY' },
                    { title: 'Random Thoughts', value: 'RANDOM' },
                ],
            },
        }),

        defineField({
            name: 'text',
            title: 'Article Text',
            type: 'text',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'media',
            title: 'Article Media',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        }),
    ],
})
