export interface ResearchProject {
  title: string;
  period: string;
  frameworkName: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export const RESEARCH_DATA: ResearchProject = {
  title: "Missing Data Handling with Multiple Imputation Technique",
  period: "July 2024 – May 2025",
  frameworkName: "SICE Imputation Framework (extending MICE)",
  description: "Designed and implemented a hybrid missing-data imputation framework called SICE, extending the traditional Multivariate Imputation by Chained Equations (MICE) model for robust statistical datasets.",
  metrics: [
    { label: "Root Mean Square Error (RMSE)", value: "0.73" },
    { label: "Precision / Specificity", value: "0.95" }
  ]
};
