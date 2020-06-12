export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee330a26dd7c3180389d7b8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-111a66et',
                  apiId: '011b9b10-a507-4840-a360-afcc58750ca4'
                },
                {
                  buildHookId: '5ee330a2b2863f1f75b74358',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-vv1aqk9n',
                  apiId: '6440f515-b7f1-4b34-a10a-9da346d67231'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yanawaro/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web-vv1aqk9n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
