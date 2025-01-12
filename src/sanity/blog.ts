
export const blog= {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
       
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'paragraph',
            type: 'text',
            title: 'Paragraph  '
        },

        {
          name:'slug',
          type:'slug',
          title:'Slug',
          options:{
            source:'name'
          }

        },
       {    title:"Image",
            name: 'image', 
            type: 'image',
          
            options: {
              hotspot: true
            },
           
          },
    { 
      title:'Block',
      name: 'block',
      type: 'array',
      of:[{type:'block'}]

    }
    ]
 
        
      }
