
import { defineType, defineField, defineArrayMember } from 'sanity';

export const articleType = defineType({
    name: 'article',
    title: 'Articles & Digital Diary',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Life Update', value: 'LIFE' },
                    { title: 'Tech', value: 'TECH' },
                    { title: 'Beauty', value: 'BEAUTY' },
                    { title: 'Notes & Lists', value: 'NOTES' },
                    { title: 'Ranking / Tier List', value: 'RANKING' },
                    { title: 'Creative Project', value: 'CREATIVE' },
                    { title: 'Unhinged Opinion', value: 'RANDOM' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'excerpt',
            title: 'Short Introduction',
            type: 'text',
            rows: 3,
            description: 'A short preview for your Tumblr-style feed.',
        }),

        defineField({
            name: 'text',
            title: 'Legacy Text',
            type: 'text',
            rows: 5,
            description: 'Kept for compatibility with existing articles.',
        }),

        defineField({
            name: 'publishedAt',
            title: 'Publication Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),

        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
        }),

        defineField({
            name: 'content',
            title: 'Publication Content',
            type: 'array',
            description:
                'Add text, photos, lists, rankings and documents in the order you want.',

            of: [
                defineArrayMember({
                    type: 'block',
                }),

                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                }),

                defineArrayMember({
                    type: 'file',
                    title: 'Word or PDF Document',
                    options: {
                        accept: '.doc,.docx,.pdf',
                    },
                    fields: [
                        defineField({
                            name: 'caption',
                            title: 'Document Caption',
                            type: 'string',
                        }),
                    ],
                }),

                defineArrayMember({
                    type: 'object',
                    name: 'noteList',
                    title: 'Notes / List',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'List Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'items',
                            title: 'List Items',
                            type: 'array',
                            of: [{ type: 'string' }],
                            validation: (Rule) => Rule.min(1),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                        },
                        prepare({ title }) {
                            return {
                                title: title || 'Untitled List',
                                subtitle: 'Notes & List',
                            };
                        },
                    },
                }),

                defineArrayMember({
                    type: 'object',
                    name: 'ranking',
                    title: 'Ranking / Tier List',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Ranking Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'tiers',
                            title: 'Ranking Tiers',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    name: 'tier',
                                    fields: [
                                        defineField({
                                            name: 'label',
                                            title: 'Tier Name',
                                            type: 'string',
                                            description:
                                                'For example: S, A, B, C or 10/10.',
                                        }),
                                        defineField({
                                            name: 'items',
                                            title: 'Items in This Tier',
                                            type: 'array',
                                            of: [{ type: 'string' }],
                                        }),
                                    ],
                                    preview: {
                                        select: {
                                            title: 'label',
                                        },
                                        prepare({ title }) {
                                            return {
                                                title: title || 'Unnamed Tier',
                                            };
                                        },
                                    },
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                        },
                        prepare({ title }) {
                            return {
                                title: title || 'Untitled Ranking',
                                subtitle: 'Ranking / Tier List',
                            };
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: 'media',
            title: 'Legacy Media',
            type: 'array',
            of: [{ type: 'image' }],
            description:
                'Kept for compatibility with your existing ArticleMedia component.',
        }),

        defineField({
            name: 'featured',
            title: 'Featured Publication',
            type: 'boolean',
            initialValue: false,
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'coverImage',
        },
    },

    orderings: [
        {
            title: 'Newest First',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
});
