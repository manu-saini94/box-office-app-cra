import { useQuery } from 'react-query';
import ShowsGrid from '../components/shows/ShowsGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowByIds } from '../api/tvmaze';

const Starred = () => {
  const [starredShowIds] = useStarredShows();
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowIds],
    queryFn: () =>
      getShowByIds(starredShowIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  console.log('starred shows', starredShows);

  if (starredShows?.length === 0) {
    return <div>No Shows were Starred</div>;
  }
  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows} />;
  }
  if (starredShowsError) {
    return <div>Error Occured: {starredShowsError.message}</div>;
  }

  return <div>Shows are loading ....</div>;
};

export default Starred;
