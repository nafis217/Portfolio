export interface ResearchMetric {
  label: string;
  value: string;
  /** Optional context shown under the metric (dataset, baseline, etc.). */
  note?: string;
}

export interface ResearchProject {
  title: string;
  period: string;
  frameworkName: string;
  description: string;
  /** Dataset(s) the results were measured on. */
  dataset: string;
  /** Baseline the results are compared against. */
  baseline: string;
  metrics: ResearchMetric[];
  /** Optional links; shown only when set. */
  links?: {
    paper?: string;
    thesis?: string;
    repo?: string;
  };
}

export const RESEARCH_DATA: ResearchProject = {
  title: "Missing Data Handling with Multiple Imputation Technique",
  period: "July 2024 – May 2025",
  frameworkName: "SICE Imputation Framework (extending MICE)",
  description: "Designed and implemented a hybrid missing-data imputation framework called SICE, extending the traditional Multivariate Imputation by Chained Equations (MICE) model for robust statistical datasets.",
  // TODO: name the dataset(s) and missingness rate(s) used for the evaluation
  dataset: "TODO: dataset name(s) and % missing",
  // TODO: add plain-MICE RMSE (and other baselines) measured on the same data
  baseline: "TODO: plain MICE RMSE for comparison",
  metrics: [
    { label: "RMSE", value: "0.73", note: "Lower is better" },
    // TODO: confirm which metric the 0.95 refers to for each of these two
    { label: "Precision", value: "0.95" },
    { label: "Specificity", value: "0.95" },
  ],
  links: {
    // paper: "https://...",
    // thesis: "https://...",
    // repo: "https://github.com/nafis217/...",
  },
};
