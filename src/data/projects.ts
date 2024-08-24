export type ProjectCategoryType = "web" | "app" | undefined;

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategoryType;
  image?: string;
};

export const PROJECTS: ProjectType[] = [
  { category: "web", title: "title all", description: "desc", id: "01916556-7fac-77ca-89e1-4a9faf2cea00" },
  { category: "web", title: "title web", description: "desc", id: "01916556-9081-7fab-a360-294f95b36e38" },
  { category: "app", title: "title app", description: "desc", id: "01916556-e53d-7d75-928e-e7c95e785a3e" },
];