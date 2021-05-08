import React from "react";
import { connect } from "react-redux";
import { Modal } from "antd";

import { hideModal, registerModal } from "../../core/actionCreators";
import SmartDiv from "../SmartDiv/SmartDiv";


function SmartModal(props) {

  const { hideModal, modalId, modals, children } = props;
  const modal = modals[modalId];

  const handleCancel = () => {
    hideModal(modalId);
  }

  const handleOk = () => {
    hideModal(modalId);
  }

  if (!modal) {
    return "";
  }


  return (
    <Modal
      centered={true}
      title="Basic Modal"
      mask={false}
      width="max-content"
      style={{ pointerEvents: "all" }}
      onCancel={() => handleCancel()}
      onOk={handleOk}
      visible={modal.visible}
    >
      <SmartDiv>
        {children}
      </SmartDiv>
    </Modal>
  );
}


const mapStateToProps = (state) => ({
  modals: state.modals.modals
});

const mapDispatchToProps = (dispatch) => ({
  registerModal: (id) => dispatch(registerModal(id)),
  hideModal: (id) => dispatch(hideModal(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SmartModal);
