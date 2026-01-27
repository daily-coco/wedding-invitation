import { WEDDING_NOTICE_CONTENT } from '../../constants/wedding';
import { NoticeContent, NoticeTitle, NoticeWrapper } from './Notice.styled';

const Notice = () => {
  return (
    <NoticeWrapper>
      <NoticeTitle>안내사항</NoticeTitle>
      <NoticeContent>
        {WEDDING_NOTICE_CONTENT.map((item) => (
          <div>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </NoticeContent>
    </NoticeWrapper>
  );
};

export default Notice;
