export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d1b64b8b92505d4486f3d2e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nqpaxzsn',
                  apiId: '7d5fbe32-218a-49fe-9fbd-ab17c1d6c460'
                },
                {
                  buildHookId: '5d1b64b8b359dacfc9a18a17',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8cet45u8',
                  apiId: '90c1be9e-0ba3-4abd-a341-974f313eed41'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/assadakramiintellect/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8cet45u8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
