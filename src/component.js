import React from "react";
import SmartModal from "./components/modal/SmartModal";

const Components = {
  modal: SmartModal
};

const Component = (block) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block.modalId,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block.modalId }
  );
};

export default Component;