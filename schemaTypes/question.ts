export default {
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    { name: 'title', title: 'Question Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() },
    { name: 'topic', title: 'Topic', type: 'reference', to: [{ type: 'topic' }] },
    { name: 'difficulty', title: 'Difficulty', type: 'string', options: { list: ['Easy','Medium','Hard'] }, initialValue: 'Medium' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
    { name: 'question', title: 'Question Body', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'answer', title: 'Answer', type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code Block',
          fields: [
            { name: 'language', type: 'string' },
            { name: 'code', type: 'text' },
          ],
          preview: {
            select: { language: 'language', code: 'code' },
            prepare: ({ language, code }) => ({ title: `Code (${language || 'auto'})`, subtitle: (code || '').slice(0, 40) })
          }
        }
      ]
    },
    { name: 'isPublished', title: 'Published', type: 'boolean', initialValue: true }
  ]
}