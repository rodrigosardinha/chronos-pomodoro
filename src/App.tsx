import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Conteiner';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Container>
        <Heading>Testanto Heading</Heading>
        <section>LOGO</section>
      </Container>
      <Container>
        <section>MENU</section>
      </Container>
    </>
  );
}
