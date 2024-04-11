export const products = [
  {
    id: '1',
    name: 'Off shoulder crop top',
    price: 1400,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80',
    rating: 4,
    ratingCount: 12,
    tags: [
      {
        name: 'Exclusive 💫',
        color: 'purple',
      },
    ],
  },
  {
    id: '2',
    name: 'Pattern top',
    price: 2300,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80',
    rating: 4,
    ratingCount: 12,
    tags: [
      {
        name: 'In Demand 🔥',
        color: 'red',
      },
    ],
  },
  {
    id: '3',
    name: 'Free body jacket',
    price: 900,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1544364631-99bbd8e23f08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80',
    rating: 4,
    ratingCount: 12,
    tags: [],
  },
  {
    id: '4',
    name: 'Polka dot dress',
    price: 2000,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1630758664435-72a78888fb9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80',
    rating: 4,
    ratingCount: 12,
    tags: [],
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Product = ElementType<typeof products>
