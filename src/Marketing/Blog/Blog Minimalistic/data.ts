export const posts = [
  {
    id: '1',
    title: 'Tools you need for UX Design in 2023',
    image: 'https://pro.chakra-ui.com/components/marketing/blog/post1.png',
    category: 'Design',
  },
  {
    id: '2',
    title: 'How to write a great blog post',
    image: 'https://pro.chakra-ui.com/components/marketing/blog/post2.png',
    category: 'Community',
  },
  {
    id: '3',
    title: 'Developer Survey 2022',
    image: 'https://pro.chakra-ui.com/components/marketing/blog/post3.png',
    category: 'Community',
  },
  {
    id: '4',
    title: 'Rock your next job interview',
    image: 'https://pro.chakra-ui.com/components/marketing/blog/post4.png',
    category: 'Community',
  },
]

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never

export type Post = ElementType<typeof posts>
