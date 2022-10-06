import { CardComponent } from '../../components/CardComponent/CardComponent';

export const Card = () => {
    const cardProps = [
        {
            title: "Brief",
            subtitle: 'Complete brief writing or simple guidence on what to include, we\'ve got your covered.',
            img: 'https://cdn-icons-png.flaticon.com/512/3940/3940154.png'
        },
        {
            title: "Search",
            subtitle: 'In-depth agency search covering; criteria matching, door knoking and due-dilligence vetting.',
            img: 'https://cdn-icons-png.flaticon.com/512/2170/2170024.png'
        },
        {
            title: "Pitch",
            subtitle: 'Comprehensive pitch managment, including comms, diary managment and pitch hosting.',
            img: 'https://cdn-icons-png.flaticon.com/512/5128/5128950.png'
        }
    ]
    console.log(cardProps.title);
    return (
        <div>
            <CardComponent cardProps={cardProps} />
        </div>
    );
}
