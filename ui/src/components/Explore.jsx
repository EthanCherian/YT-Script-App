import '../App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList, InfiniteHits } from 'react-instantsearch-hooks-web';
import { Hit } from './Hit';
import styled from 'styled-components';
import { NavBar } from './NavBar';

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');


export default function Explore() {
    return (
        <div>
            <NavBar />
            {/* <div id="search-header">
                <img id = "logo_1" src={require('./Youtube_Scripter_Logo.jpg')} alt="logo" />
            </div> */}
            <div id = "explore_info">
                <h1>
                    ABOUT THE APPLICATION
                </h1>
                <h5 id = "infotext">
                    Youtube Scripter is a service created by 4 friends to make your youtube experience better. 
                    It helps you find what you're looking for faster and in more ways than youtube ever could be itself. Want to get to a specific moment in a list of videos? Done. Want to filter by topics to make your searches more refined? Done. 
                    Scripter does all this to save you save time and effort that you could be using to... watch more youtube!

                    Thanks for using our website! 
                </h5>
            </div>
            {/* <h1>
                SCRAPE A PLAYLIST
            </h1> */}
            {/* <div style={{marginLeft: "20%", marginRight: "20%"}}>
                <div class="ais-Searchox-form">
                    <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search" className='ais-SearchBox-input' style={{height: "40px"}}/>
                    <button type="submit" className='ais-SearchBox-submit'>Submit</button>
                    </form>
                </div>
            </div> */}
            <p>
            </p>
            {/* <button id="github" onClick={() => window.location.href='https://github.com/EthanCherian/YT-Script-App'}>
                <h2>
                    GITHUB
                </h2>
            </button> */}
            {/* <div id = "options_bar">
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <button>
                                <h2>
                                    SCRAPING TOOL
                                </h2>
                            </button>
                        </td>
                        <td>
                            <button>
                                <h2 id = "github">
                                    GITHUB
                                </h2>
                            </button>
                        </td>
                        <td>
                            <button>
                                <h2>
                                    COMING SOON...
                                </h2>
                            </button>
                        </td>
                        <td>
                            <button id = "more_info">
                                    <h2>
                                        MORE INFO
                                    </h2>
                            </button>
                        </td>
                        </tr>
                    </tbody>
                </table>  
             </div> */}
        
        </div>

        
    );
}