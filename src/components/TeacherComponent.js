import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
function TeacherComponent(props) {

    return(
        <div className='wrap-student'>
        <div className='header-student'>Quản lý giáo viên</div>
        </div>
    )
}
const mapStateToProps = state => {
    return{
    }
}
const mapDispatchToProps = dispatch => {
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TeacherComponent)