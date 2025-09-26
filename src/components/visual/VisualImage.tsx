import styled from 'styled-components';

interface VisualImageProps {
  imageUrl: string;
  title?: string;
  date?: string;
  place?: string;
}

const VisualImage = ({ imageUrl, title, date, place }: VisualImageProps) => {
  return (
    <VisualSection style={{ backgroundImage: `url(${imageUrl})` }}>
      <Content>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Place>{place}</Place>
      </Content>
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
  background-position: center center;
`;
const Title = styled.h1``;
const Date = styled.h2``;
const Content = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
`;
const Place = styled.span``;
