import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Upload,
  message,
  InputNumber,
} from "antd";
import { userInfo } from "../../../store/actions/infoActions";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
const Footer = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const info = useSelector((state) => state?.userInfo?.userInfo);
  console.log("info", info);
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const rules = [
    {
      required: true,
      message: "Please input your email",
    },
    {
      type: "email",
      message: "Please enter a valid email",
    },
  ];
  const onFinish = (values) => {
    form.validateFields().then((values) => {
      message.success("info successfully added");
      dispatch(userInfo(values));
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <footer>
      <div className="container py-12">
        <Row>
          {info ? (
            <div>user Info Added</div>
          ) : (
            <Col lg={11}>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row>
                  <Col lg={11} className="mx-2">
                    <Form.Item name="email" rules={rules || ""}>
                      <Input placeholder="Enter a valid email address" />
                    </Form.Item>
                  </Col>
                  <Col lg={11} className="mx-2">
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Enter your name",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col lg={11} className="mx-2">
                    <Form.Item
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: "Enter your address",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your address" />
                    </Form.Item>
                  </Col>
                  <Col lg={11} className="mx-2">
                    <Form.Item
                      name="phoneNumber"
                      rules={[
                        {
                          required: true,
                          message: "Enter your phone (e.g. +14155552675)",
                        },
                        {
                          type: "number",
                          message: "Please enter a valid number",
                        },
                      ]}
                    >
                      <InputNumber
                        min={0}
                        style={{ width: "100%" }}
                        placeholder="Enter your phone (e.g. +14155552675)"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col lg={22} className="mx-2">
                    <Form.Item name="message">
                      <TextArea placeholder="Enter your message" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="img"
                  rules={[
                    {
                      required: true,
                      message: "upload your image",
                    },
                  ]}
                >
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 1 && "+ Upload"}
                  </Upload>
                </Form.Item>{" "}
                <Form.Item>
                  <Button htmlType="submit" className="font-bold h-6 w-36">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          )}
          <Col lg={12}>{/* right side */}</Col>
        </Row>
      </div>
    </footer>
  );
};
export default Footer;
