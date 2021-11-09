import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, Modal, Form, Row, Col, Input, Radio, message } from 'antd';
import { ceretePosts, deletePosts, editPosts, getPosts } from '../redux/action/branch.action';
import { useDispatch, useSelector } from "react-redux";
import { createComments, deleteComments, editcomments, getComments } from '../redux/action/comment.action';
import { Link } from 'react-router-dom';



function Comment() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const comments = useSelector(state => state.reducerComment.comments)

    const formRef = useRef(null)

    const [isEdit, setIsEdit] = useState(false)


    useEffect(() => {
        dispatch(getComments())
    }, [getComments])

    const handleEdit = posts => {
        setTimeout(() => {
            formRef.current.setFieldsValue({
                id: posts.id,
                name: posts.name,
                email: posts.email,
                body: posts.body,
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
            width: 30,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 100,
        },
        {
            title: 'Comment',
            dataIndex: 'body',
            key: 'body',
            width: 250,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 50,
            render: (text, code) =>
                <Button
                    danger
                    onClick={() => {
                        dispatch(deleteComments(code.id))
                    }}
                >Delete</Button>
            ,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 50,
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
            body: values.body,
            email: values.email,

        }
        !isEdit ? dispatch(createComments(params)) : dispatch(editcomments(params))
    }


    return (
        <React.Fragment>
            <Button type='primary' className='bg-success'>
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

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>
                            <Form.Item
                                label="Comment"
                                name="body"
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
                                        onClick={() => { success() 
                                        }}
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
                dataSource={comments}
                pagination={{ pageSize: 5 }}

            />
        
        </React.Fragment>
    )
}
export default Comment;