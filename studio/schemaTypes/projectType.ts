
import { defineType, defineField } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Project Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'image',
            title: 'Project Cover',
            type: 'image',
            options: { hotspot: true },
        }),

        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Example: React, JavaScript, CSS.',
        }),

        defineField({
            name: 'projectUrl',
            title: 'Live Website',
            type: 'url',
        }),

        defineField({
            name: 'githubUrl',
            title: 'GitHub Repository',
            type: 'url',
        }),

        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
})
