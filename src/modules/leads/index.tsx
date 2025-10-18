import { useParams } from "react-router";
import Headline from "../../shared/components/headline";
import Wrapper from "../../shared/components/wrapper";

const LeadsPage = () => {
  const { teamId } = useParams();
  return (
    <Wrapper>
      <Headline
        title="Contatos"
        subtitle="Acompanhe, organize e gerencie os contatos capturados em seus fluxos de automação."
      />
      LeadsPage {teamId}
    </Wrapper>
  );
};

export default LeadsPage;
