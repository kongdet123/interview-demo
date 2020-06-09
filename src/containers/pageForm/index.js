import React, { Component } from 'react';
import './stype.css'
import {connect} from "react-redux"
import { Layout} from 'antd';
const {Content} = Layout;

class PageFrom extends Component {
    state = {
        id:null,
        image:null,
        nameBook:null,
        writer:null,
        content:null,
        dateOfCompletion:null,
        editing:null
    }
    constructor(props){
        super(props);
        this.state.dateOfCompletion = getDateNow()
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let id;
        (this.props.listBook.length) ? id = this.props.listBook[this.props.listBook.length-1].id+1 : id=0
        let book = {
            id:id,
            image:this.state.image,
            nameBook:this.state.nameBook,
            writer:this.state.writer,
            content:this.state.content,
            dateOfCompletion:this.state.dateOfCompletion,
            editing:false
        }
        console.log(this.state.dateOfCompletion)
        this.props.setBook(book)
        this.setNameBook.value = ""
        this.setImage.value = ""
        this.setWriter.value = ""
        this.setContent.value = ""
        this.setDateOfCompletion = ""

        var close = document.getElementsByClassName("closebtn");
        for(let i=0;i<close.length;i++){
            setTimeout(function(){ close[i].parentElement.style.display = 'block' }, 100);
            // setTimeout(function(){ close[i].parentElement.style.opacity = "0"; 
            // setTimeout(function(){ close[i].parentElement.style.display = "none"; }, 300);}, 3000);
            close[i].onclick = function(){
                var div = this.parentElement;
                div.style.opacity = "0";
                setTimeout(function(){ div.style.display = "none"; }, 300);
            }
        }

    }
    handleChange = (e) =>   {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
  render(){
    return(
    <Layout className="layout">
      <Content>
        <div className="content-alert">
            <div class="alert success">
            <span class="closebtn">&times;</span>  
            <strong>บันทึกสำเร็จ!</strong> หนังสือได้บันทึกลงสโตร์เรียบร้อยแล้ว.
            </div>
        </div>
        <div className="container-book">
        <form onSubmit={this.handleSubmit}>
        <div className="line"><h1>บันทึกหนังสือ</h1></div>
        <div className="textNameBook"><label>ชื่อหนังสือ</label><input required type="text" id="nameBook" onChange={this.handleChange} ref={e => this.setNameBook = e} /></div>
        <div className="textImage"><label>URL</label><input type="url" id="image" onChange={this.handleChange} ref={e => this.setImage = e} /></div>
        <div className="textWriter"><label>ชื่อผู้เขียน</label><input required type="text" id="writer" onChange={this.handleChange} ref={e => this.setWriter = e} /></div>
        <div className="textContent"><label>เนื้อหา</label><textarea required rows="4" cols="50" id="content" onChange={this.handleChange} ref={e => this.setContent = e}></textarea></div>
        <div className="textDate"><label>วันที่อ่านจบ</label><input required type="date" id="dateOfCompletion" onChange={this.handleChange} ref={e => this.setDateOfCompletion = e} defaultValue={this.state.dateOfCompletion}/></div>
            <div className="buttonSubmit"><button type="submit" >บันทึก</button></div>
        </form>
        </div>
      </Content>
    </Layout>
  )}
}
const mapStateToProps=(state)=>{
    return {
        listBook:state.listBook
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        setBook:(book)=>{
            dispatch({
                type: 'listBook/INSERT',
                book:book
              })
        },
    }
}

export function getDateNow(){
    function appendLeadingZeroes(n){
        if(n <= 9){
          return "0" + n;
        }
        return n
      }
      let current_datetime = new Date()
      let formatted_date = current_datetime.getFullYear() + "-" + appendLeadingZeroes((current_datetime.getMonth() + 1)) + "-" + appendLeadingZeroes(current_datetime.getDate())
      return formatted_date
}
export default connect(mapStateToProps,mapDispatchToProps)(PageFrom)
