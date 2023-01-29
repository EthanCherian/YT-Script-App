
import React from 'react';
import { Hits, Highlight } from 'react-instantsearch-hooks-web';

export function Hit({ hit }) {

    // const handleDiv = (e) => {
    //     return e.innerHTML;
    // }

    // var text = <div>{hit.text}</div>;

    // var actualText = handleDiv(text);

    // console.log(hit.text);
    // console.log(actualText);

    // var text = hit.text;

    // text.
    // var text = text.replace("&#39;", "'");

    return (
        <div id="hitCard">
            <table>
                <tbody>
                <tr>
                <td>
                    <div id="hitImageArea">
                        <div id = "vid_thumbnail">
                            <iframe width = "100%" height = "100%" src={"https://www.youtube.com/embed/"+hit.video_id+"?start="+hit.start_sec} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <p>{hit.name}</p>
                        <h4 id = "red_ribbon">TRANSCRIPT FROM:</h4>
                        <p>{hit.start} - {hit.end}</p>
                        {/* <p><h2>TIMESTAMP</h2></p> */}
                    </div>
                </td>
                <td>
                    <div id = "match">
                        <h3>
                            FOUND TEXT MATCH:
                        </h3>
                    </div>
                    <div id="hitTranscript">
                        {/* <Highlight attribute="categories" hit={hit} /> */}
                        "{hit.text.replace("&#39;", "'").replace("  &amp;", "&")}"
                    </div>
                    <div>
                        <h4>
                            Category(ies):
                        </h4>
                        <div id = "cat">
                            <p>{hit.categories[0]}</p>
                        </div>
                    </div>
                </td>
                {/* <td>
                    <h4>
                        MORE INFORMATION
                    </h4>
                    <body>
                        More information about the transcript or video as a whole.
                    </body>

                </td> */}
                </tr>
                </tbody>
            </table>

            {/* <table>
                <tbody>
                <tr>
                <td>EMBEDDED VID</td>
                <td>TRANSCRIPT TITLE</td>
                <td>MORE INFO</td>
                </tr>
                <tr>
                <td>CHANNEL INFO</td>
                <td>TRANSCRIPT PART</td>
                <td>INFORMATION</td>
                </tr>
                <tr>
                <td>TIMESTAMP</td>
                <td>TAGS</td>
                <td>YEAR</td>
                </tr>
                </tbody>
            </table> */}
            
            {/* <p>
              {hit.video_id} {hit.start} - {hit.text}
            </p> */}
        </div>
    );
}