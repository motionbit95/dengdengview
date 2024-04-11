export const posts = [
  {
    id: '1',
    title: 'How to write a great blog post',
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.',
    image:
      'https://images.unsplash.com/photo-1524492449090-a4e289316d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80',
    tags: [
      { label: 'Community', color: 'blue' },
      { label: 'Tutorials', color: 'green' },
    ],
    publishedAt: 'Januar 28, 2023',
    author: {
      name: 'Busola Banks',
      avatarUrl: 'https://tinyurl.com/2p8fy9ym',
    },
  },
  {
    id: '2',
    title: '2022 Developer Survey',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    image: 'https://tinyurl.com/4wzh2ph9',
    tags: [
      { label: 'Community', color: 'blue' },
      { label: 'Research', color: 'red' },
    ],
    publishedAt: 'December 29, 2022',
    author: {
      name: 'Samy Tom',
      avatarUrl: 'https://tinyurl.com/2p8h98w8',
    },
  },
  {
    id: '3',
    title: 'Women in Tech',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://tinyurl.com/5czjdxj7',
    tags: [{ label: 'Community', color: 'blue' }],
    publishedAt: 'November 30, 2022',
    author: {
      name: 'Angelina Gates',
      avatarUrl: 'https://tinyurl.com/2p98t7nh',
    },
  },
  {
    id: '4',
    title: 'Using Chakra UI in Sketch',
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.',
    image: 'https://tinyurl.com/yh2xkpzm',
    tags: [{ label: 'Design', color: 'yellow' }],
    publishedAt: 'October 31, 2022',
    author: {
      name: 'Busola Banks',
      avatarUrl: 'https://tinyurl.com/2p8fy9ym',
    },
  },
]

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never

export type Post = ElementType<typeof posts>
