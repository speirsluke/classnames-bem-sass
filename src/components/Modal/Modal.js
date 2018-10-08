import React from "react";

class Modal extends React.Component {
  onClose(event) {
    this.props.onClose && this.props.onClose(event);
  }

  render() {
    if (!this.props.show) {
      return null;
    } else if (this.props.show) {
      return (
        <div className="backdrop">
          <div className="modal">{this.props.children}</div>
          <button
            onClick={event => {
              this.onClose(event);
            }}
          >
            close
          </button>
        </div>
      );
    }
  }
}

export default Modal;
