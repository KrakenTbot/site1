import s from './MeetYourTeam.module.css';
import React from 'react'
import { connect } from 'react-redux';

const MeetYourTeam = (props) => {
  return (
    <div className={s.container}>
        <div className={s.block}>
            <h1>Meet Your Team</h1>
            <p>Eckhart Consulting Members</p>
            <div className={s.gridBlock}>
                {props.object}
            </div>
        </div>
    </div>
  )
}

function mapStateToProps(state) {
    return {
        object: state.block
    }
}

export default connect(mapStateToProps)(MeetYourTeam);
