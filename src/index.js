import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from './components/video_list';

const API_KEY = "AIzaSyBND_nr8gqFs5zMaCOtL-KiaPwOsmHD6LA";

// Create a new component that will make some html.
// Take the components html and add it to the page, the DOM.

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos: videos });
        });
    }
    
    
    
    render () {
        return (
            <div>
                <SearchBar />
                <VideoList />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));