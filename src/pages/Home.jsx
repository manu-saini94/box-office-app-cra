import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ActorsGrid from '../components/actors/ActorsGrid';
import ShowsGrid from '../components/shows/ShowsGrid';
import { useQuery } from 'react-query';

const Home = () => {
  const [filter, setFilter] = useState(null);
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
    // try {
    //   setApiDataError(null);
    //   let result;
    //   if (searchOption === 'shows') {
    //     result = await searchForShows(q);
    //   } else {
    //     result = await searchForPeople(q);
    //   }
    //   setApiData(result);
    // } catch (error) {
    //   setApiDataError(error);
    // }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured:{apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>No Results</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
