
import { defineType, defineField } from 'sanity'

export const favoriteType = defineType({
    name: 'favorite',
    title: 'Favorites',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'creator',
            title: 'Artist / Creator',
            type: 'string',
        }),

        defineField({
            name: 'note',
            title: 'Why I love it',
            type: 'text',
        }),

        defineField({
            name: 'details',
            title: 'Extra details / Favorite songs',
            type: 'text',
        }),

        defineField({
            name: 'url',
            title: 'External link',
            type: 'url',
        }),

        defineField({
            name: 'youtubeUrl',
            title: 'YouTube song or playlist',
            type: 'url',
            description:
                'Paste a YouTube video or playlist link. Used for album cards.',
        }),

        defineField({
            name: 'img',
            title: 'Cover image',
            type: 'image',
            options: { hotspot: true },
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Albums', value: 'albums' },
                    { title: 'Books', value: 'books' },
                    { title: 'YouTubers', value: 'youtubers' },
                    { title: 'Influencers', value: 'influencers' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
    ],
})
