import '../App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList, InfiniteHits, Stats } from 'react-instantsearch-hooks-web';
import { Hit } from './Hit';
import styled from 'styled-components';
import { NavBar } from './NavBar';
// import { , Stats } from "react-instantsearch-dom"
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
// import logo from './Youtube'
import logo from './Youtube_Scripter_Logo.jpg';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "enter key", // Be sure to use a Search API Key
    nodes: [
      {
        host: 'enter host', // where xxx is the ClusterID of your Typesense Cloud cluster
        port: '443',
        protocol: 'https'
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "text",
    // filter_by: `video_id: [${IDS}]`,
    group_by: 'video_id',
    group_limit: 6,
    sort_by: 'start_sec:asc'
    // filter_by: `video_id: ["BoHO04xVeU0", "RjEdmrxjIHQ"]`
  },
})
const searchClient = typesenseInstantsearchAdapter.searchClient;
// const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

export default function Home() {

    return (
      <div className='homePage'>
        {/* <h1>HELLO WORLD</h1> */}
        <NavBar />
        {/** use this to reach back-end*/}
        {/* <InstantSearch searchClient={searchClient} indexName="instant_search"> */}
        <InstantSearch searchClient={searchClient} indexName="transcripts">
          <div id = "search-header">
            <h1>
                WELCOME TO YOUTUBE SCRIPTER!
            </h1>
            <div id = "searchbar">
              <SearchBox searchAsYouType={false} showLoadingIndicator={true}/>
              <Stats></Stats>
              {/* <h5>{}</h5> */}
            </div>
          </div>
          <div id = 'mainSection'>
            <div id = 'filterSection'>
              <RefinementList attribute='categories'/>
            </div>
            <div id = 'results'>
              <InfiniteHits id = 'infinitehits' hitComponent={Hit} showPrevious={false}></InfiniteHits>
            </div>
          </div>
        </InstantSearch>


        
        {/* <InstantSearch searchClient={searchClient} indexName="transcripts">

          <SearchBox searchAsYouType={false}/>
          <Stats />
          <Hits hitComponent={Hit} />
        </InstantSearch> */}
      </div>
    );
  }


