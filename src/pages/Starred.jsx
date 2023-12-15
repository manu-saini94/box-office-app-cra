import { useQuery } from 'react-query';
import ShowsGrid from '../components/shows/ShowsGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowByIds } from '../api/tvmaze';
import { TextCenter } from '../components/common/TextCenter';

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
    return <TextCenter>No Shows were Starred</TextCenter>;
  }
  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows} />;
  }
  if (starredShowsError) {
    return <TextCenter>Error Occured: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Shows are loading ....</TextCenter>;
};

export default Starred;
