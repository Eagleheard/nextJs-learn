import MeetupList from "../components/meetups/MeetupList";

const dummyInfo = [
  {
    id: 1,
    title: "A First Meetup",
    image: "https://www.swedishnomad.com/wp-content/images/2017/02/Places-to-visit-in-Japan.jpg",
    address: "Mount Fuji",
    description: "the greatest place",
  },
  {
    id: 2,
    title: "A Second Meetup",
    image: "https://www.swedishnomad.com/wp-content/images/2017/02/Places-to-visit-in-Japan.jpg",
    address: "Mount Fuji",
    description: "the greatest place",
  }
]

export default function Home() {
  return <MeetupList meetups={dummyInfo} />;
}
