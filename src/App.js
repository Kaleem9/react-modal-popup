import React, { Component } from 'react';
import logo from './logo.svg';
import ModalButton from './commonComponent/ModalButton';
import './App.css';

class App extends Component {

addContent(){
  let textforbody = <code>Lorem Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis laudantium quibusdam quidem corporis architecto veritatis. Ex facilis minima beatae sunt perspiciatis placeat. Quasi corporis odio eaque voluptatibus ratione magnam nulla? Amet cum maiores consequuntur totam dicta! Inventore adipisicing vel vero odio modi doloremque? Vitae porro impedit ea minima laboriosam quisquam neque. Perspiciatis omnis obcaecati consequatur sunt deleniti similique facilis sequi. Ipsum harum vitae modi reiciendis officiis. Quas laudantium laudantium modi corporis nihil provident consectetur omnis, natus nulla distinctio illum corporis. Sit ex earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum illum architecto aspernatur perspiciatis error fuga illum, tempora harum earum, a dolores. Animi facilis inventore harum dolore accusamus fuga provident molestiae eum! Odit dicta error dolorem sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat officia culpa sint! Beatae voluptates voluptatem.</code>;

  return textforbody;

}

addContentForFooter(){
  let textforfooter = <i>This is Footer.</i>;
  return textforfooter;

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> React Modal Popup

          </h2>
          <code className="App-intro">A Fully Customizable Modal.</code>
        </div>
        <div className="App-intro">
          <div className="intro">Can add components dynamically to
          <ol>
          <li>Header</li>
          <li>Body</li>
          <li>Footer</li>
          </ol>
          </div>

          <ModalButton buttonName="demo" ModalBodyContent={this.addContent()} ModalFooterContent={this.addContentForFooter()} ModalTitle={<code class="myTitle">Add Your Title!</code>} customButtonClass="my-button-class"  customCloseButtonClass="btn-close" />
        </div>
      </div>
    );
  }
}

export default App;
