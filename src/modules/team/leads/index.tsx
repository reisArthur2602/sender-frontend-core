import { useParams } from "react-router";

const LeadsPage = () => {
  const { team_id } = useParams();
  return <div>LeadsPage {team_id}</div>;
};

export default LeadsPage;
