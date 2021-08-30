import React, {Fragment} from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './import';
import ChatAppIcon from '../assets/chat-app-icon2.png';
import LogoutIcon from '../assets/logout.png';

//side bar
const SideBar = ()=>{
    return(
        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src={ChatAppIcon} alt='Chat App Icon' width='30'/>
                </div>
            </div>
            <div className='channel-list__sidebar__icon2'>
                <div className='icon1__inner'>
                    <img src={LogoutIcon} alt='Logout Icon' width='30'/>
                </div>
            </div>

        </div>
    );
}

//chat app header
const ChatAppHeader = ()=>{
    return (
        <div className='channel-list__header'>
            <p className='channel-list__header__text'>Chat App</p>
        </div>
    );
}

const ChannelListContainer = () => {
    return (
        <Fragment>
            <SideBar/>
            <div className='channel-list__list__wrapper'>
            <ChatAppHeader/>
            <ChannelSearch/>
            <ChannelList
                filters={{}}
                channelRenderFilterFn={()=>{}}
                List = {(listProps) => {
                    return (
                        <TeamChannelList {...listProps} type='team'/>
                    );
                }}
            />
            </div>
        </Fragment>
    )
}

export default ChannelListContainer;