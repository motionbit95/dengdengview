export const products = [
  {
    id: '1',
    blue: 'Hamilton',
    name: 'Blue Leather Watch',
    price: 139.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    tags: [
      {
        name: 'Exclusive 💫',
        color: 'purple',
      },
      {
        name: 'New ✨',
        color: 'green',
      },
    ],
  },
  {
    id: '2',
    blue: 'Tissot',
    name: 'Golden Brown - Latch',
    price: 239.99,
    salePrice: 164.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80',
    tags: [
      {
        name: '-30%',
        color: 'red',
      },
    ],
  },
  {
    id: '3',
    blue: 'Mamba',
    name: 'Wooden Truss Watch',
    price: 539.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1614703418052-d5b893d495bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: '4',
    blue: 'Rolex',
    name: 'Brown Phoenix Watch',
    price: 39.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80',
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Product = ElementType<typeof products>
