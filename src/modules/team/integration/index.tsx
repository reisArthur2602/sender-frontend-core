import { useParams } from "react-router";

const IntegrationPage = () => {
  const { team_id } = useParams();

  return <div>IntegrationPage {team_id}</div>;
};

export default IntegrationPage;
