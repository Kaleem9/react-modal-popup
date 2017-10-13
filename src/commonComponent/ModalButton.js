import React, { Component } from 'react';
import './css/ModalButton.css';

class ModalButton extends Component {

  openModalFunction(){
    console.log(this.props);
    console.log("kuch aur..");
    this.refs.modalRef.className += " modal-show ";
  }

  closeModel(){
  //  alert("close func");
     this.refs.modalRef.classList.remove("modal-show");
  }

  pleasePreventDefault(e) {
    // purpose of creating the func is to preventing a call for closeModal() of parent div
    e.stopPropagation();
  }

    render() {
      console.log(this.props);
      console.log("kuch aur..");

      return(<div id={this.props.id}>
              <button  id={this.props.id} className={this.props.customButtonClass?this.props.customButtonClass:''}
               onClick={this.openModalFunction.bind(this)}
               >{this.props.buttonName}</button>

                <div className="modal-container" ref="modalRef" onClick={this.closeModel.bind(this)} id="modalContainerId">
                  <div className={"modal modal-hide modal-show " + this.props.customModalClass} id="modalId" onClick={this.pleasePreventDefault.bind(this)}>
                    <div className="modal-header display-flex">
                      <div className="modal-title">
                        {this.props.ModalTitle}
                      </div>
                      <div className="modal-close">
                      <button className={this.props.customCloseButtonClass?this.props.customCloseButtonClass:""} onClick={this.closeModel.bind(this)} >X</button></div>
                      </div>

                      <div className="modal-body">
                       {this.props.ModalBodyContent}
                      </div>

                      <div className="modal-footer">
                        {this.props.ModalFooterContent}
                      </div>
                  </div>
                </div>
            </div>
      );
    }
}

export default ModalButton;
