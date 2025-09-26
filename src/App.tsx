import styled from 'styled-components';
import VisualImage from './components/visual/VisualImage';

function App() {
  return (
    <>
      <Wrapper>
        <VisualImage
          imageUrl={'/images/250925_wedding_ai1.png'}
          title={'저희 결혼합니다.'}
          date={'2027.4.13'}
          place={'한옥마을 야외 예식홀'}
        />
      </Wrapper>
    </>
  );
}
export default App;

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;
