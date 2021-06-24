import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Button, Modal, Table} from 'antd';
import majorCLassActions from "../../redux/actions/majorCLassActions";

function ModalMajorsClass(props) {

    useEffect(()=>{
        props.getListMajorClass((data)=>{
            console.log("listStudents",props.listStudents)
            console.log("listMajorClass",data)
        })
    },[props.msv])


    const columns = [
        {
            title: 'Mã lớp',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên lớp',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số lượng sinh viên',
            dataIndex: 'totalStudent',
            key: 'totalStudent',
        },
        {
            title: 'Hành động',
            dataIndex: 'id',
            key: 'id',
            render: (id) => (
                <div>
                    <Button onClick={() => {
                        addStudentToClass(id)
                    }}>Thêm vào lớp này</Button>&nbsp;&nbsp;
                    <Button onClick={() => {
                        alert("Thêm")
                    }}>Xem chi tiết lớp</Button>&nbsp;&nbsp;
                </div>
            )
        },
    ];

    const addStudentToClass = (id) =>{
        const cl = props.listMajorsClass.find(x=>x.id === id)
        props.addStudentToClass(props.msv,cl)
    }

    return(
        <div>
            <Modal title={`Thêm sinh viên vào lớp ( msv: ${props.msv} )`} width={'720px'} visible={props.isVisible} onCancel={()=>{props.setIsVisible()}}>
                <h3>Danh sách lớp</h3>
                <Table dataSource={props.listMajorsClass} columns={columns}/>
            </Modal>
        </div>
    )
}
function mapStateToProps(state) {
    return{
        listMajorsClass: state.majorClass.listMajorsClass,
        listStudents: state.student.listStudents,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getListMajorClass: (callBack) =>{
            dispatch(majorCLassActions.action.getListMajorClass(callBack))
        },
        addStudentToClass: (id,majorClass) =>{
            dispatch(majorCLassActions.action.addStudentToClass(id,majorClass))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalMajorsClass)