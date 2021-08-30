import React from 'react'

import {AddChannel} from '../assets/AddChannel';

const TeamChannelList = (children, error=false, loading, type) => {
    if(error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error, please try again afer sometimes.
                </p>
            </div>
        ) : null
    }

    if(loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        )
    }
    console.log(type);
    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </p>
                {/* <AddChannel 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType} 
                    setIsEditing={setIsEditing}
                    type={type === 'team' ? 'team' : 'messaging'}
                    setToggleContainer={setToggleContainer}
                /> TODO Add channel*/}
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList;
