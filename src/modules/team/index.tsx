import { useParams } from "react-router";
import Headline from "../../shared/components/headline";
import Wrapper from "../../shared/components/wrapper";
import WelcomeModal from "./components/welcome-modal";

const TeamPage = () => {
  const { teamId } = useParams();
  return (
    <>
      <Wrapper>
        <Headline
          title="Painel"
          subtitle="Visão geral das métricas, atividades e status da sua conta em um só lugar."
        />
        <WelcomeModal />
        TeamPage {teamId}
      </Wrapper>
    </>
  );
};

export default TeamPage;
