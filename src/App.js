import { Button, Layout } from 'antd';
import './App.css';
import { connect } from 'react-redux';
import { Typography } from 'antd';

import SmartModal from './components/modal/SmartModal';
import { hideModal, showModal } from './core/actionCreators';

function App(props) {
  const { Title, Text } = Typography;
  const { Header } = Layout;

  const { showModal, hideModal, modals } = props;


  const showCloseModalButton = () => {
    let listOfModals = Object.values(modals)

    return (
      <div>
        {
          listOfModals.map((modal) => {
            if (modal.visible) {
              return (
                <Button key={'show-' + modal.id} onClick={() => hideModal(modal.id)}>
                  Close Modal {modal.id}
                </Button>
              )
            }
            return null;
          })
        }
      </div>
    )
  }

  return (
    <div className="app-container">
      <Header>
        <Title className="heading" level={2}>Treebo Hotels - Assignment</Title>
      </Header>
      <div className="App">

        <SmartModal modalId={"1"}>
          <Title level={4}>SmartModal 1</Title>
          <div className="modal-content">
            <p>Let the user resize both the height and the width of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
          </div>
          <div className="modal-footer">
            <Text mark>You can Open New Modal:</Text>
            <div>
              <Button onClick={() => showModal("2")}>
                Open Modal 2
            </Button>
            </div>
            <Text mark>Or you can close opened Modals:</Text>
            {showCloseModalButton()}
          </div>
        </SmartModal>
        <SmartModal modalId={"2"}>
          <Title level={4}>SmartModal 2</Title>
          <div className="modal-content">
            <p>Let the user resize both the height and the width of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
          </div>
          <div className="modal-footer">
            <Text mark>You can Open New Modal:</Text>
            <div>
              <Button onClick={() => showModal("3")}>
                Open Modal 3
            </Button>
            </div>
            <Text mark>Or you can close opened Modals:</Text>
            {showCloseModalButton()}
          </div>
        </SmartModal>

        <SmartModal modalId={"3"}>
          <Title level={4}>SmartModal 3</Title>
          <div className="modal-content">
            <p>Let the user resize both the height and the width of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
          </div>
          <div className="modal-footer">
            <Text mark>You can Open New Modal:</Text>
            <div>
              <Button onClick={() => showModal("4")}>
                Open Modal 4
            </Button>
            </div>
            <Text mark>Or you can close opened Modals:</Text>
            {showCloseModalButton()}
          </div>
        </SmartModal>

        <SmartModal modalId={"4"}>
          <Title level={4}>SmartModal 4</Title>
          <div className="modal-content">
            <p>Let the user resize both the height and the width of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
          </div>
          <div className="modal-footer">
            <Text mark>You can close opened Modals:</Text>
            {showCloseModalButton()}
          </div>
        </SmartModal>
        <Button onClick={() => showModal("1")} type="primary">Open Modal 1</Button>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  modals: state.modals.modals
});



const mapDispatchToProps = (dispatch) => ({
  showModal: (id) => dispatch(showModal(id)),
  hideModal: (id) => dispatch(hideModal(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
