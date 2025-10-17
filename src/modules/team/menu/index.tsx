import { useParams } from "react-router";

const MenuPage = () => {
  const { team_id } = useParams();

  return <div>MenuPage {team_id}</div>;
};

export default MenuPage;
