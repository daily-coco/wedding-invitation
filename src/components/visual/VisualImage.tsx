import { Text } from '../text/Text';
import {
  VisualSection,
  Content,
  Title,
  DateText,
  Place,
} from './VisualImage.styles';
interface VisualImageProps {
  imageUrl: string;
  title?: string;
  date?: string;
  place?: string;
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
      </Content>
    </VisualSection>
  );
};

export default VisualImage;
