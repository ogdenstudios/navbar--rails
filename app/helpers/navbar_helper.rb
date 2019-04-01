module NavbarHelper
  def get_navbar_data
    return data = [{
        label: 'Home',
        slug: 'home',
        type: 'top-level',
        link: '#!'
      },
      {
        label: 'Single',
        slug: 'single',
        type: 'single',
        nodes: [{
            label: 'About',
            link: '#!'
          },
          {
            label: 'Contact',
            link: '#!'
          },
          {
            label: 'Blog',
            link: '#!'
          }
        ]
      },
      {
        label: 'Multiple',
        slug: 'multiple',
        type: 'multi',
        nodes: [{
            label: 'Category 1',
            nodes: [{
                label: 'Item 1',
                link: '#!'
              },
              {
                label: 'Item 2',
                link: '#!'
              }
            ]
          },
          {
            label: 'Category 2',
            nodes: [{
                label: 'Item 1',
                link: '#!'
              },
              {
                label: 'Item 2',
                link: '#!'
              },
              {
                label: 'Item 3',
                link: '#!'
              },
              {
                label: 'Item 4',
                link: '#!'
              }
            ]
          },
          {
            label: 'Category 3',
            nodes: [{
                label: 'Item 1',
                link: '#!'
              },
              {
                label: 'Item 2',
                link: '#!'
              },
              {
                label: 'Item 3',
                link: '#!'
              }
            ]
          }
        ]
      }
    ] 
  end
end