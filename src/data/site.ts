export const site = {
  name: 'Nancy Truong',
  shortName: 'NT',
  title: 'Data Scientist · Mathematical Statistician',
  description:
    'Portfolio of Nancy Truong, a data scientist in Sweden combining mathematical statistics, machine learning, SQL, Power BI, and business understanding.',
  location: 'Sweden',
  email: 'nancy.my.truong@gmail.com',
  availability: 'Open to data science, analytics, and machine learning opportunities',
  links: {
    github: 'https://github.com/myngoc-trg',
    linkedin: 'https://www.linkedin.com/in/nancytr/',
  },
};

export const colors = {
  skills_color_pink: '#d58f9d'
} as const;

export const skills = [
  { label: 'Statistics', color: colors.skills_color_pink },
  { label: 'Python', color: colors.skills_color_pink },
  { label: 'SQL', color: colors.skills_color_pink },
  { label: 'Machine learning', color: colors.skills_color_pink },
  { label: 'Computer vision', color: colors.skills_color_pink },
  { label: 'Power BI', color: colors.skills_color_pink },
  { label: 'Data modelling', color: colors.skills_color_pink },
  { label: 'Applied AI', color: colors.skills_color_pink },
  { label: 'Business intelligence', color: colors.skills_color_pink },
];

export const funFacts = [
  'My birthname is My Ngoc, but after coming to the western world then I changed it to Nancy based on a character from Stranger Things',
  'I have used the number 42 many many times for randomness, but first learned about the reference during my thesis presentation',
  'I have never read a fictional book, but just started reading The Hitchhiker’s Guide to the Galaxy',
  'I am an IB kid',
  'I really like squares',
  'I am allergic to pollen, but my bachelor thesis is to help bees find more of it',
] as const;

