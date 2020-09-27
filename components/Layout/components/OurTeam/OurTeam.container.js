import React from 'react';
import {useSelector} from 'react-redux';
import OurTeam from './OurTeam';

function OurTeamContainer(props) {
    const teamMember = useSelector((state) => state.teamMembers)

    return <OurTeam teamMembers={teamMember}/>
}

export default OurTeamContainer; 