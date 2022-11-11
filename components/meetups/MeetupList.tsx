import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

interface IMeetupList {
  meetups: {
    id: number;
    image: string;
    title: string;
    description?: string;
    address: string;
  }[]
}

const MeetupList: React.FC<IMeetupList> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map(({ id, image, title, description, address}) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
