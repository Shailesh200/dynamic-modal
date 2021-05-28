import React, { useState } from 'react';
import "./App.css";
import { Button, Layout } from "antd";
import { Typography } from "antd";
import { connect } from "react-redux";
import { InputNumber } from "antd";

import Components from "./component";

import { showModal } from "./core/actionCreators";

function App(props) {
  const { Title, Text } = Typography;
  const { Header } = Layout;
  const { showModal } = props;

  const [listOfModals, setListOfModals] = useState([]);


  const ModalContent = (props) => {
    const [height, setHeight] = useState(300);
    const [width, setWidth] = useState(300);
    function onHeightChange(value) {
      setHeight(value);
    }
    function onWidthChange(value) {
      setWidth(value);
    }
    return (
      <div>
        <Title level={4}>SmartModal {props.modalId}</Title>
        <div className="modal-footer">
          <div className="dimension-container">
            <Text mark>Enter height of new modal</Text>
            <InputNumber
              defaultValue={300}
              onChange={onHeightChange}
            />
          </div>
          <div className="dimension-container">
            <Text mark>Enter width of new modal</Text>
            <InputNumber
              defaultValue={300}
              onChange={onWidthChange}
            />
          </div>
          {props.children}
          <Text mark>You can Open New Modal:</Text>
          <div>
            <Button
              onClick={() =>
                createModalComp(
                  (parseInt(props.modalId, 10) + 1).toString(),
                  height,
                  width
                )
              }
            >
              Open new modal
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const removeModal = () => {
    let currentListOfModals = listOfModals;
    currentListOfModals.pop();
    setListOfModals([...currentListOfModals]);
  };

  const createModalComp = (modalId, height, width) => {
    let currentListOfModals = listOfModals;
    let modalObj = {
      modalId,
      component: "modal",
      height: height,
      width: width,
      handleCancel: removeModal,
      children: <ModalContent modalId={modalId}><p>Hello</p></ModalContent>
    };
    currentListOfModals.push(modalObj);
    setListOfModals([...currentListOfModals]);
    showModal(modalId);
  };

  
  return (
    <div className="app-container">
      <Header>
        <Title className="heading" level={2}>
          Dynamic Stack Modal - Example
        </Title>
      </Header>
      <div className="App">
        {listOfModals.map((block) => Components(block))}
        <Button onClick={() => createModalComp("1", 300, 400)} type="primary">
          Open Modal 1
        </Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showModal: (id) => dispatch(showModal(id))
});
export default connect(null, mapDispatchToProps)(App);
