import { useParams } from "react-router";
import Headline from "../../shared/components/headline";
import Wrapper from "../../shared/components/wrapper";

const CreateMenuPage = () => {
  const { menuId } = useParams();
  return (
    <Wrapper>
      <Headline title="Crie seu menu" type="section" />
      Menu Page {menuId}
    </Wrapper>
  );
};

export default CreateMenuPage;
