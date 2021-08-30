import React, {useState, useContext} from 'react';
import {useChatContext} from 'stream-chat-react';

import {SearchIcon} from '../assets/SearchIcon';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const onSearch = (event) => {
        event.preventDefault();
        setLoading(true);
        const query = event.target.value;
        setQuery(query);
        getChannels(query);
    }
    
    const getChannels = async (query) =>{
        try{
            //fetch channels
        }catch(err){
            setQuery(`Failed to find channel ${query}`);
        }
    }

    return (
        <div className='channel-search__container'>
            <div className='channel-search__input__wrapper'>
                <div className='channle-search__input_icon'>
                    <SearchIcon/>
                </div>
                <input type='text' className='channel-search__input__text' placeholder='Search..' value={query} onChange={onSearch}/>
            </div>
           
        </div>
    )
}

export default ChannelSearch;