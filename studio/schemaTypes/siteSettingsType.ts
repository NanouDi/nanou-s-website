
import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',

    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Website Title',
            type: 'string',
            initialValue: 'NANOU_OS',
        }),

        defineField({
            name: 'aboutTitle',
            title: 'About Me Title',
            type: 'string',
            initialValue: 'Hey, welcome to my world ♡',
        }),

        defineField({
            name: 'aboutIntro',
            title: 'Short Introduction',
            type: 'text',
            description: 'A short introduction shown in your About Me section.',
        }),

        defineField({
            name: 'aboutBio',
            title: 'Full Bio',
            type: 'text',
            description: 'Tell visitors more about yourself.',
        }),

        defineField({
            name: 'profileImage',
            title: 'Profile Picture',
            type: 'image',
            options: { hotspot: true },
        }),

        defineField({
            name: 'socials',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Instagram', value: 'Instagram' },
                                    { title: 'TikTok', value: 'TikTok' },
                                    { title: 'YouTube', value: 'YouTube' },
                                    { title: 'Snapchat', value: 'Snapchat' },
                                    { title: 'GitHub', value: 'GitHub' },
                                    { title: 'LinkedIn', value: 'LinkedIn' },
                                    { title: 'Other', value: 'Other' },
                                ],
                            },
                            validation: (rule) => rule.required(),
                        }),

                        defineField({
                            name: 'label',
                            title: 'Display Name',
                            type: 'string',
                            description: 'Example: @awesome_nanou',
                        }),

                        defineField({
                            name: 'url',
                            title: 'Profile URL',
                            type: 'url',
                            validation: (rule) => rule.required(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'platform',
                            subtitle: 'label',
                        },
                    },
                },
            ],
        }),
    ],
})
