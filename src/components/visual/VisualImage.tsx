import styled from 'styled-components';

const VisualImage = () => {
  return (
    <VisualSection>
      <VisualTitle></VisualTitle>
      <VisualContent></VisualContent>
    </VisualSection>
  );
};

export default VisualImage;

/* styled-components */
const VisualSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
`;
const VisualTitle = styled.h1``;
const VisualContent = styled.div``;
