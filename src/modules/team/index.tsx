import { useParams } from "react-router";

const TeamPage = () => {
  const { team_id } = useParams();
  return <div>TeamPage {team_id}</div>;
};

export default TeamPage;
