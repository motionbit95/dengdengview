export const jobListings = [
  {
    uid: 'job001',
    title: 'Software Engineer',
    department: 'Engineering',
    description:
      'We are seeking a talented software engineer to join our team and contribute to the development of cutting-edge software solutions. You will collaborate with cross-functional teams to design, implement, and test software applications.',
    location: 'San Francisco, CA',
    type: 'Full-Time',
  },
  {
    uid: 'job002',
    title: 'Marketing Specialist',
    department: 'Marketing',
    description:
      'As a marketing specialist, you will be responsible for developing and executing marketing campaigns to promote our products and services. You will work closely with the marketing team to identify target audiences, create compelling content, and analyze campaign performance.',
    location: 'New York, NY',
    type: 'Full-Time',
  },
  {
    uid: 'job003',
    title: 'Sales Associate',
    department: 'Sales',
    description:
      'Join our sales team as a sales associate and help drive revenue growth. You will engage with potential customers, build relationships, and provide product demonstrations. Your goal will be to understand customer needs and close deals effectively.',
    location: 'Chicago, IL',
    type: 'Part-Time',
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type JobListing = ElementType<typeof jobListings>
