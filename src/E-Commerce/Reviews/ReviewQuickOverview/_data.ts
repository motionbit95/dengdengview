export const reviews = [
  {
    id: "1",
    author: "Christopher",
    createdAt: "July 15h 2020",
    title: "Love this product!",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: "2",
    author: "Sarah",
    createdAt: "July 14h 2020",
    title: "Great price & quality",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: "3",
    author: "Toby",
    createdAt: "July 13h 2020",
    title: "Highly recommended",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: "4",
    author: "Dakota",
    createdAt: "July 12h 2020",
    title: "Best watch I have ever bought",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Review = ElementType<typeof reviews>;
