import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGrid';
import ShowsCard from './ShowsCard';

const ShowsGrid = ({ shows }) => {
  // const [starredShows, dispatchStarred] = useReducer(starredShowReducer, []);
  // const [starredShows, dispatchStarred] = usePersistenceReducer(
  //   starredShowReducer,
  //   [],
  //   'starredShows'
  // );

  const [starredShows, dispatchStarred] = useStarredShows();

  console.log(starredShows);

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };
  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          id={data.show.id}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowsGrid;
