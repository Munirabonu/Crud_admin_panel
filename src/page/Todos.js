import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, Modal, Form, Row, Col, Input, Radio, message } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { createTodos, deleteTodos, editTodos, getTodos } from '../redux/action/todos.action';
import { Link } from 'react-router-dom';



function Todos() {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()
    const todos = useSelector(state => state.reducerTodos.todos)

    const formRef = useRef(null)

    const [isEdit, setIsEdit] = useState(false)


    useEffect(() => {
        dispatch(getTodos())
    }, [getTodos])

    const handleEdit = todos => {
        setTimeout(() => {
            formRef.current.setFieldsValue({
                id: todos.id,
                title: todos.title,
                completed: todos.completed
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
            title: 'Title',
            width: 120,
            dataIndex: 'title',
            key: 'title',
            fixed: 'left',
        },
        {
            title: 'Completed',
            width: 120,
            dataIndex: 'completed',
            key: 'completed',
            fixed: 'left',
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
                        dispatch(deleteTodos(code.id))
                    }}
                >Delete</Button>
            ,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (todos) => <Button
                type='primary'
                onClick={() => {
                    handleEdit(todos)
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
            title: values.title,
            completed: values.completed
        }
        !isEdit ? dispatch(createTodos(params)) : dispatch(editTodos(params))
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
                Create Todos
            </Button>
            <Modal
                title="Todos"
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
                                label="Title"
                                name="title"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="input with clear icon" allowClear />
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Completed"
                                name="completed"
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
                                        onClick={() => {
                                            success()
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
                dataSource={todos}
                pagination={{ pageSize: 5 }}

            />

        </React.Fragment>
    )
}
export default Todos;