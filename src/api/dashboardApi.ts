import api from "./axiosConfig";

export const getDashboardData = async () => {
  const response = await api.get(
    "/analytics/dashboard"
  );

  return response.data;
};

export const getCommitFrequency =
  async () => {

    const response =
      await api.get(
        "/analytics/commit-frequency"
      );

    return response.data;
};
export const getLanguages =
  async () => {

    const response =
      await api.get(
        "/analytics/languages"
      );

    return response.data;
};

export const getMostActiveRepositories =
  async () => {

    const response =
      await api.get(
        "/analytics/most-active-repositories"
      );

    return response.data;
};
export const getContributionHeatmap = async () => {

  const response = await api.get(
    "/analytics/contribution-heatmap"
  );

  return response.data;
};
export const syncGithub = async () => {

  const response = await api.post(
    "/github/sync"
  );

  return response.data;
};