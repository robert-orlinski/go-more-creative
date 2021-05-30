import { Nav } from '../components/Nav';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';

const Start = () => (
  <>
    <Nav />
    <MainWrapper theme="center">
      <MainTitle>here you can check all your past ideas!</MainTitle>
    </MainWrapper>
    <Footer />
  </>
);

export default Start;
