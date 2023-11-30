import ShowsCard from './ShowsCard';

const ShowsGrid = ({ shows }) => {
  console.log(shows, 'shows');
  return (
    <div>
      {shows.map(data => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          id={data.show.id}
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
