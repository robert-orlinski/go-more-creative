import { Nav } from '../components/Nav';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { Footer } from '../components/Footer';
import { EntriesList } from '../components/EntriesList';

const Start = () => (
  <>
    <Nav />
    <MainWrapper>
      <MainTitle>here you can check all your past ideas!</MainTitle>
      <EntriesList />
    </MainWrapper>
    <Footer />
  </>
);

export default Start;
