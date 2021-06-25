import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import majorCLassActions from "../../redux/actions/majorCLassActions";
import {Button, Input, Modal, Table} from "antd";
import {deleteStudent} from "../../services/StudentApiServices";
import {ExclamationCircleOutlined} from "@ant-design/icons";

function ListStudentInMajorClassComponent(props) {
    const [majorClass,setMajorClass] = useState({})
    const [isVisibleMajorClass,setIsVisibleMajorClass] = useState(false)
    // {props.match.params.id}
    useEffect(() => {
        console.log("props", props)
        props.getAllStudentsByIdClass(props.match.params.id)
    }, [])
    useEffect(() => {
        props.getMajorClassById(props.match.params.id,(data)=>{
            setMajorClass(data[0])
        })
    }, [props.listStudents])

    const deleteStudentFromClass = (id,majorClass) =>{
        Modal.confirm({
            title: 'Xoá',
            icon: <ExclamationCircleOutlined/>,
            content: 'Bạn có chắc xoá !',
            okText: 'Xác nhân',
            cancelText: 'Huỷ bỏ',
            onOk: () => {
                props.deleteStudentFromMajorClass(id,majorClass)
            },
            closable: true,
            maskClosable: true,
        });
    }

    const columns = [
        {
            title: 'MSV',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Họ',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Tên',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Hành động',
            dataIndex: 'id',
            key: 'id',
            render: (id) => (
                <div>
                    <Button onClick={()=>{deleteStudentFromClass(id,majorClass)}}>Xoá sinh viên khỏi lớp</Button>
                </div>
            )
        }
    ]

    return (
        <div className='wrap-student-in-major-class'>
            <div className='header-student-in-class'>Danh sách sinh viên lớp {majorClass.name} &nbsp;&nbsp; <button className={'btn-primary'} onClick={()=>{setIsVisibleMajorClass(true)}}>Thông tin lớp</button></div>
            <div className={'wrap-student-in-major-class-table'}>
                {
                    props.listStudentsResultSearch.length > 0 ?
                        <Table dataSource={props.listStudentsResultSearch} columns={columns}/> :
                        <Table dataSource={props.listStudents} columns={columns}/>
                }
            </div>
            <Modal title={'Thông tin lớp'} visible={isVisibleMajorClass} onOk={()=>{setIsVisibleMajorClass(false)}} onCancel={()=>{setIsVisibleMajorClass(false)}}>
                <label>Mã lớp</label>
                <Input name='maLop' readOnly={true} value={majorClass.id} ></Input>
                <label>Tên lớp</label>
                <Input name='tenLop' readOnly={true} value={majorClass.name}></Input>
                <label>Số lượng sinh viên</label>
                <Input name='soLuongSinhVien' readOnly={true} value={majorClass.totalStudent}></Input>
            </Modal>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listStudents: state.majorClass.listStudents,
        listStudentsResultSearch: state.majorClass.listStudentsResultSearch,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllStudentsByIdClass: (id) => {
            dispatch(majorCLassActions.action.getAllStudentsByIdClass(id))
        },
        getMajorClassById: (id,callback) => {
            dispatch(majorCLassActions.action.getMajorClassById(id,callback))
        },
        deleteStudentFromMajorClass: (id,majorClass) => {
            dispatch(majorCLassActions.action.deleteStudentFromMajorClass(id,majorClass))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListStudentInMajorClassComponent)