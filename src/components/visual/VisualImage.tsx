import { Text } from '../text/Text';
import {
  VisualSection,
  Content,
  DateText,
  Protagonist,
} from './VisualImage.styles';
interface VisualImageProps {
  imageUrl: string;
  title?: string;
  date?: string;
  place?: string;
  groom?: string;
  bride?: string;
  symbol?: string;
}

const VisualImage = ({ ...props }: VisualImageProps) => {
  return (
    <VisualSection $imageUrl={props.imageUrl}>
      <Content>
        {props.title && (
          <Text as='h1' variant='title.lg'>
            {props.title}
          </Text>
        )}
        {props.date && (
          <DateText as='time' variant='text.md'>
            {props.date}
          </DateText>
        )}
        {props.place && (
          <Text as='span' variant='text.md'>
            {props.place}
          </Text>
        )}
        <Protagonist>
          <Text as='span' variant='text.md'>
            {props.groom}
          </Text>
          <Text as='bride' variant='text.md'>
            {props.symbol ? props.symbol : '그리고'}
          </Text>
          <Text as='bride' variant='text.md'>
            {props.bride}
          </Text>
        </Protagonist>
      </Content>
    </VisualSection>
  );
};

export default VisualImage;
