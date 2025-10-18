import { useParams } from "react-router";
import Headline from "../../shared/components/headline";
import Wrapper from "../../shared/components/wrapper";

const MenusPage = () => {
  const { teamId } = useParams();

  return (
    <Wrapper>
      <Headline
        title="Menus"
        subtitle="Crie e organize menus interativos para direcionar seus contatos e melhorar a experiência de atendimento"
      />
      MenuPage {teamId}
    </Wrapper>
  );
};

export default MenusPage;
