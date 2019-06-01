export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-studio',
                  apiId: '2e045956-df6d-4a18-b34d-9f422ab92b87'
                },
                {
                  buildHookId: '5cf1c5247f7170971abacb7c',
                  title: 'Events Website',
                  name: 'sanity-nuxt',
                  apiId: 'a8753c63-852e-4b51-8b8c-8acb70aab27b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edwardz8/sanity-nuxt',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
