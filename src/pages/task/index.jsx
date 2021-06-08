import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "../../store/actions/infoActions";
const Home = () => {
  const [form] = Form.useForm();
  const info = useSelector((state) => state?.userInfo?.userInfo);
  const [edit, setEdit] = useState(null);
  console.log("edit", edit);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    form.validateFields().then((values) => {
      if (edit !== null) {
        let dubInfo = [...info];
        dubInfo[edit].task = values.task;
        message.success("item successfully updated");
        dispatch(userInfo(dubInfo));
        setEdit(null);
        form.resetFields();
      } else {
        message.success("todo successfully added");
        let dubInfo = [...info];
        dubInfo.push(values);
        dispatch(userInfo(dubInfo));
        form.resetFields();
      }
    });
  };
  const delItem = (index) => {
    let dubList = info.filter((sin, ind) => index !== ind);
    message.success("item successfully deleted");
    dispatch(userInfo(dubList));
  };
  const editItem = (index) => {
    setEdit(index);
    form.setFieldsValue({
      task: info[index].task,
    });
  };

  return (
    <>
      <div className="p-12">
        <Form name="basic" layout="inline" form={form} onFinish={onFinish}>
          <Form.Item
            label="todo"
            name="task"
            rules={[{ required: true, message: "Please input your todo!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {edit !== null ? "Edit " : " Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="m-8 w-1/5">
        <h1 className="font-bold">todo list</h1>
        <ul className="py-8">
          {info.map((sin, index) => (
            <div key={index}>
              {sin.task}{" "}
              <span
                className="mx-4 cursor-pointer"
                onClick={() => {
                  delItem(index);
                }}
              >
                <DeleteOutlined />
              </span>
              <span
                className="mx-4 cursor-pointer"
                onClick={() => {
                  editItem(index);
                }}
              >
                <Button>edit</Button>
              </span>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Home;
