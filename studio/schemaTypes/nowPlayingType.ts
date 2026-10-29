
import { defineType, defineField } from 'sanity'

export const nowPlayingType = defineType({
    name: 'nowPlaying',
    title: 'Now Playing',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Song or playlist title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'artist',
            title: 'Artist',
            type: 'string',
        }),

        defineField({
            name: 'note',
            title: 'My little note',
            type: 'text',
        }),

        defineField({
            name: 'youtubeUrl',
            title: 'YouTube video or playlist URL',
            type: 'url',
            description: 'Paste the normal YouTube link here.',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'cover',
            title: 'Cover image (optional)',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
