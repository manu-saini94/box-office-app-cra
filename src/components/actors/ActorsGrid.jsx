import { FlexGrid } from '../common/FlexGrid';
import ActorsCard from './ActorsCard';

const ActorsGrid = ({ actors }) => {
  console.log(actors, 'actors');
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not-found-image.png'
          }
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
