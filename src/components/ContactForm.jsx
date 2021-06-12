import React from 'react';
import '../css/ContactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      name: '',
      email: '',
      hasEmailError: false,
      title: '',
      content:'',
      hasContentError:false,
      
    };
  }

  handleNameChange(event) {
    const inputValue = event.target.value;
    this.setState({
      name: inputValue,
    });
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  handleTitleChange(event) {
    const inputValue = event.target.value;
    this.setState({
      title: inputValue,
    });
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          メールアドレスを入力してください
        </p>
      );
    }
    
    let contentErrorText 
    
      if (this.state.hasContentError) {
      contentErrorText = (
        <p className='contact-message-error'>
          お問い合わせ内容を入力してください
        </p>
      );
    }
    
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了　
           ※再度表示したい場合、F5でリロードしてください。
        </div>
      );
    } else {
      contactForm = (
        <form 
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdjlnLJHnSO2dstKSPh2tGYXtCZV3EBbuKXe2P1nw6ja0tOBg/formResponse"
        onSubmit={() => {this.handleSubmit()}} >
          <p>（必須）お名前</p>
          <input
            value={this.state.name}
            onChange={(event) => {this.handleNameChange(event)}}
            placeholder="name"
            name="entry.1265921791"
            required
          />

          <p>（必須）メールアドレス</p>
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
            placeholder="example@mail.co.jp"
            name="entry.380809658"
            required
          />
          {emailErrorText}

          <p>件名</p>
          <input
            value={this.state.title}
            onChange={(event) => {this.handleTitleChange(event)}}
            name="entry.1073051811"
          />

          <p>（必須）お問い合わせ内容</p>
          <textarea 
          value={this.state.content}   
          onChange={(event) => {this.handleContentChange(event)}}  
          placeholder="お問い合わせ内容をご記入ください" 
          name="entry.779576408"
          required         
          />
          {contentErrorText}
          
          <p><input
            type='submit'
            value='送信'
          /></p>
        </form>
      );
    }
    
    return (
      <div className='contact-form' id="Contact">
        <div className="container"> 
        <h2 className="title">
          Contact
         </h2>
        {contactForm}
        </div>
      </div>
    );
  }
}

export default ContactForm;
