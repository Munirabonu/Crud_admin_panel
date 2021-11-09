import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, Modal, Form, Row, Col, Input, Radio, message } from 'antd';
import { ceretePosts, deletePosts, editPosts, getPosts } from '../redux/action/branch.action';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';



function Branches() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsReducer.posts)

    const formRef = useRef(null)

    const [isEdit, setIsEdit] = useState(false)


    useEffect(() => {
        dispatch(getPosts())
    }, [getPosts])

    const handleEdit = posts => {
        setTimeout(() => {
            formRef.current.setFieldsValue({
                id: posts.id,
                name: posts.name,
                username: posts.username,
                email: posts.email,
                phone: posts.phone,
                address: posts.address_city,
                website: posts.website,
                company: posts.company_name
            })
        }, 100);
    }

    const info = () => {
        message.info('Something deleted')
    }

    const success = () => {
        message.success('Something added')
    }

    const onReset = () => {
        formRef.current.resetFields()
    }
    const columns = [
        {
            title: 'Id',
            width: 50,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Name',
            width: 120,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'userName',
            width: 120,
            dataIndex: 'username',
            key: 'usename',
            fixed: 'left',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'phone',
            width: 150,
        },
        {
            title: 'WebSite',
            dataIndex: 'website',
            key: 'website',
            width: 150,
        },
        {
            title: 'Company',
            dataIndex: 'company_name',
            key: 'company',
            width: 150,
            render: (text, record) => record.company.name
        },
        {
            title: 'City',
            dataIndex: 'address_city',
            key: 'city',
            width: 150,
            render: (text, record) => record.address.city
        },

        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, code) =>
                <Button
                    danger
                    onClick={() => {
                        dispatch(deletePosts(code.id))
                    }}
                >Delete</Button>
            ,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (post) => <Button
                type='primary'
                onClick={()=>{handleEdit(post)
                    setVisible(true)
                    setIsEdit(true)
                    
                }}
            >Edit</Button>

        },
    ];
    const onFinish = (values) => {
        const params = {
            active: values.active,
            id: values.id,
            name: values.name,
            username: values.username,
            email: values.email,
            company: values.company,
            address: values.address,
            phone: values.phone,
            website: values.website
        }
        !isEdit ? dispatch(ceretePosts(params)) : dispatch(editPosts(params))
    }


    return (
        <React.Fragment>
            <Button type='primary' className='bg-success mr-3'>
                <Link to='/'>Home</Link>
            </Button>
            <Button type="primary" onClick={() => {
                setVisible(true)
                setIsEdit(false)
            }
            } className='mb-5'>
                Create User
            </Button>
            <Modal
                title="User"
                centered
                visible={visible}
                onOk={() => {
                    setVisible(false)
                onReset()
                }}
                onCancel={() => setVisible(false)}
                width={1000}

            >
                <Form ref={formRef} onFinish={onFinish}>
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                label="Id"
                                name="id"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>

                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>

                            <Form.Item
                                label="User name"
                                name="username"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Phone number"
                                name="phone"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>
                            <Form.Item
                                label="WebSite"
                                name="website"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>

                            <Form.Item
                                label="Company name"
                                name="company"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>

                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>

                            <Form.Item
                                label="Активный"
                                name="active"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Radio.Group defaultValue={true} buttonStyle="solid">
                                    <Radio.Button value={true}>Активный</Radio.Button>
                                    <Radio.Button value={false}>Не активный</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col span={4}>
                            <div className="create_row">
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        onClick={() => { success() }}
                                    >
                                        {!isEdit ? 'Create' : 'Edit'}
                                    </Button>
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        danger
                                        htmlType="submit"
                                        onClick={() => { onReset() }}
                                    >
                                        Reset
                                    </Button>
                                </Form.Item>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Table
                columns={columns}
                scroll={{ x: 'calc(700px + 50%)', y: 240 }}
                bordered
                size="middle"
                sticky
                dataSource={posts}
                pagination={{ pageSize: 5 }}

            />
        
        </React.Fragment>
    )
}
export default Branches;