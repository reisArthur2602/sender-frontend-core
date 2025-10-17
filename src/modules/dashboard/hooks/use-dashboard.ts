export const useDashboard = () => {
  const teams = [
    {
      id: 1,
      name: "Centro Cliníco Master",
    },
    {
      id: 2,
      name: "Claro",
    },
    {
      id: 3,
      name: "Galeão",
    },
  ];
  const loading = false;

  return {
    teams,
    loading,
  };
};
