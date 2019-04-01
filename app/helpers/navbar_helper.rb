module NavbarHelper
  def get_navbar_data
    return data = [{
        label: 'Home',
        slug: 'home',
        type: 'top-level',
        link: '/'
      },
      {
        label: 'Single',
        slug: 'single',
        type: 'single',
        nodes: [{
            label: 'About',
            link: '/about'
          },
          {
            label: 'Contact',
            link: '/contact'
          },
          {
            label: 'Blog',
            link: '/blog'
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
                link: '/category-1/item-1'
              },
              {
                label: 'Item 2',
                link: '/category-1/item-2'
              }
            ]
          },
          {
            label: 'Category 2',
            nodes: [{
                label: 'Item 1',
                link: '/category-2/item-1'
              },
              {
                label: 'Item 2',
                link: '/category-2/item-2'
              },
              {
                label: 'Item 3',
                link: '/category-2/item-3'
              },
              {
                label: 'Item 4',
                link: '/category-2/item-4'
              }
            ]
          },
          {
            label: 'Category 3',
            nodes: [{
                label: 'Item 1',
                link: '/category-3/item-1'
              },
              {
                label: 'Item 2',
                link: '/category-3/item-2'
              },
              {
                label: 'Item 3',
                link: '/category-3/item-3'
              }
            ]
          }
        ]
      }
    ] 
  end
end