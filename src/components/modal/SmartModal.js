import React from "react";
import { connect } from "react-redux";
import "./modal.css";

import { hideModal, registerModal } from "../../core/actionCreators";

function SmartModal(props) {
  const { hideModal, modals, block } = props;
  const modal = modals[block.modalId];

  const handleCancel = () => {
    block.handleCancel();
    hideModal(block.modalId);
  };

  if (!modal) {
    return "";
  }

  return (
    <div className={`modal-container ${modal.visible ? "open" : ""}`}>
      <div
        style={{
          height: block.height,
          width: block.width
        }}
        className="modal-content-wrapper"
      >
        <div className="modal-content">
          <button onClick={handleCancel} className="close-btn">
            x
          </button>
          {block.children}
        </div>
      </div>
    </div>
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
