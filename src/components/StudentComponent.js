import React, {useEffect, useState} from "react";
import {connect, useDispatch} from 'react-redux'
import {Header} from "antd/es/layout/layout";
import {Button, Card, Input, Modal, Select, Table} from "antd";
import 'antd/dist/antd.css';
import studentActions from "../redux/actions/studentActions";
import {ExclamationCircleOutlined} from '@ant-design/icons';
import notification from '../components/notification'
import {useHistory} from "react-router";
import loginActions from "../redux/actions/loginActions";
import ModalMajorsClass from "./majorsClass/ModalMajorsClass";
const { Option } = Select;
function StudentComponent(props) {

    const [isModalVisibleChange, setIsModalVisibleChange] = useState(false)
    const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [id, setId] = useState("")
    const [idClick, setIdClick] = useState('')

    //
    const [isVisibleModalMajorsClass,setIsVisibleModalMajorsClass] = useState(false)

    let history = useHistory()


    useEffect(() => {
        console.log("AAA")
        props.getAllStudents()
    }, [])

    const handleOkChange = () => {
        props.updateStudent({
            id: idClick,
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            address: address,
        })
        setIsModalVisibleChange(false)
    }

    const handleOkAdd = () => {
        if (id.split(' ').join('') === "") {
            notification('error', "Kiểm tra lại thông tin sinh viên")
        } else {
            props.addNewStudent({
                id: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                address: address,
            })
            setId('')
            setFirstName('')
            setLastName('')
            setEmail('')
            setGender('')
            setAddress('')
            setIsModalVisibleAdd(false)
        }
    }
    const handleCancel = () => {
        setIdClick('')
        setFirstName('')
        setLastName('')
        setEmail('')
        setGender('')
        setAddress('')
        setIsModalVisibleAdd(false)
        setIsModalVisibleChange(false)
    }

    const studentClick = (id) => {
        let s = props.listStudents.find(x => x.id === id)
        setIdClick(id)
        setFirstName(s.firstName)
        setLastName(s.lastName)
        setEmail(s.email)
        setGender(s.gender)
        setAddress(s.address)
        setIsModalVisibleChange(true)
    }

    function deleteConfirm(id) {
        Modal.confirm({
            title: 'Xoá',
            icon: <ExclamationCircleOutlined/>,
            content: 'Bạn có chắc xoá !',
            okText: 'Xác nhân',
            cancelText: 'Huỷ bỏ',
            onOk: () => {
                props.deleteStudent(id)
            },
            closable: true,
            maskClosable: true,
        });
    }

    const showModalMajorsClass = (id) => {
        setIdClick(id)
        setIsVisibleModalMajorsClass(true)
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
                    <Button onClick={() => {
                        studentClick(id)
                    }}>Sửa</Button>&nbsp;&nbsp;
                    <Button onClick={() => {
                        deleteConfirm(id)
                    }}>Xoá</Button>&nbsp;&nbsp;
                    {
                        JSON.parse(localStorage.getItem("currentUser")).role === "ADMIN" ? <Button onClick={() => {
                            showModalMajorsClass(id)
                        }}>Thêm vào lớp</Button> : <></>
                    }
                </div>
            )
        },
    ];

    const onChangeStudent = (e) => {
        switch (e.target.name) {
            case 'ho':
                setFirstName(e.target.value)
                break
            case 'ten':
                setLastName(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'diachi':
                setAddress(e.target.value)
                break
            case 'gioitinh':
                setGender(e.target.value)
                break
            case 'msv':
                setId(e.target.value)
                break
            default:
                break
        }
    }

    const openModalAddStudent = () => {
        setIsModalVisibleAdd(true)
    }

    const onChangeSearch = (e) => {
        props.searchStudent(e.target.value)
    }

    const handleChangeGander = (value) =>{
        setGender(value)
    }
    const logout =() =>{
        props.logout()
        history.replace('/login')
    }
    return (
        <div className='wrap-student'>
            <div className='header-student'>Quản lý sinh viên</div>
            <div className='header-student' style={{display: 'flex', justifyContent: 'center'}}>
                <button className='btn-add' onClick={()=>{logout()}}>Logout</button>&nbsp;&nbsp;
                <button className='btn-add' onClick={() => {
                    openModalAddStudent()
                }}>Thêm sinh viên
                </button>
                &nbsp;&nbsp;
                <Input.Search allowClear style={{width: '40%'}} defaultValue="" placeholder='Tìm theo mã sinh viên hoặc email' onChange={(e) => {
                    onChangeSearch(e)
                }}/>
            </div>

            <div className='wrap-student-table'>
                {
                    props.listStudentsResultSearch.length > 0 ? <Table dataSource={props.listStudentsResultSearch} columns={columns}/> : <Table dataSource={props.listStudents} columns={columns}/>

                }
            </div>
            <Modal title="Chỉnh sửa thông tin sinh viên" visible={isModalVisibleChange} onOk={() => {
                handleOkChange()
            }} onCancel={() => {
                handleCancel()
            }}>
                <label>Họ</label>
                <Input name='ho' value={firstName} onChange={(e) => {
                    onChangeStudent(e)
                }}></Input>
                <label>Tên</label>
                <Input name='ten' value={lastName} onChange={(e) => {
                    onChangeStudent(e)
                }}></Input>
                <label>Email</label>
                <Input name='email' value={email} onChange={(e) => {
                    onChangeStudent(e)
                }}></Input>
                <label>Giới tính</label><br />
                <Select defaultValue={gender} onChange={(value)=>{handleChangeGander(value)}}>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="hide">hide</Option>
                </Select><br />
                <label>Địa chỉ</label>
                <Input name='diachi' value={address} onChange={(e) => {
                    onChangeStudent(e)
                }}></Input>
            </Modal>

            <Modal title="Thông tin sinh viên" visible={isModalVisibleAdd} onOk={() => {
                handleOkAdd()
            }} onCancel={() => {
                handleCancel()
            }}>
                <form>
                    <label>MSV</label>
                    <Input name='msv' required={true} onChange={(e) => {
                        onChangeStudent(e)
                    }}></Input>
                    <label>Họ</label>
                    <Input name='ho' onChange={(e) => {
                        onChangeStudent(e)
                    }}></Input>
                    <label>Tên</label>
                    <Input name='ten' onChange={(e) => {
                        onChangeStudent(e)
                    }}></Input>
                    <label>Email</label>
                    <Input name='email' onChange={(e) => {
                        onChangeStudent(e)
                    }}></Input>
                    <label>Giới tính</label><br />
                    <Select defaultValue='hide' onChange={(value)=>{handleChangeGander(value)}}>
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="hide">hide</Option>
                    </Select><br />
                    <label>Địa chỉ</label>
                    <Input name='diachi' onChange={(e) => {
                        onChangeStudent(e)
                    }}></Input>
                </form>
            </Modal>
            <ModalMajorsClass msv={idClick} isVisible={isVisibleModalMajorsClass} setIsVisible={()=>{setIsVisibleModalMajorsClass(false)}} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listStudents: state.student.listStudents,
        listStudentsResultSearch: state.student.listStudentsResultSearch,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllStudents: () => {
            dispatch(studentActions.action.getAllStudents())
        },
        updateStudent: (student) => {
            dispatch(studentActions.action.updateStudent(student))
        },
        addNewStudent: (student) => {
            dispatch(studentActions.action.addNewStudent(student))
        },
        deleteStudent: (id) => {
            dispatch(studentActions.action.deleteStudent(id))
        },
        searchStudent: (s) => {
            dispatch(studentActions.action.searchStudent(s))
        },
        logout:()=>{
            dispatch(loginActions.action.logout())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent)