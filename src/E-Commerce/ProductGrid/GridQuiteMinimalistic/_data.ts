export const products = [
  {
    id: '1',
    name: 'Pattern Mini-dress',
    price: 48.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80',
    rating: 4,
    ratingCount: 20,
  },
  {
    id: '2',
    name: 'Midi Skater Dress',
    price: 199.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80',
    rating: 4,
    ratingCount: 15,
  },
  {
    id: '3',
    name: 'Off-shoulder top',
    price: 49.99,
    currency: 'USD',
    imageUrl:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80',
    rating: 4,
    ratingCount: 9,
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Product = ElementType<typeof products>
