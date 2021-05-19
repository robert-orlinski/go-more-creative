import { Nav } from '../components/Nav';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';

const Start = () => (
  <>
    <Nav />
    <MainWrapper theme="center">
      <MainTitle>
        tell me your 10 ideas for <span className="highlight">the morning routine:</span>
      </MainTitle>
      <Form />
    </MainWrapper>
    <Footer />
  </>
);

export default Start;
