import React, { Component } from 'react';
import './stype.css'
import {connect} from "react-redux"
import { Layout} from 'antd';
const {Content} = Layout;

class PageFromEdit extends Component {
    state = {
        id:this.props.book.id,
        image:this.props.book.image,
        nameBook:this.props.book.nameBook,
        writer:this.props.book.writer,
        content:this.props.book.content,
        dateOfCompletion:this.props.book.dateOfCompletion,
        editing:this.props.book.editing
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let book = {
            id:this.props.book.id,
            image:this.state.image,
            nameBook:this.state.nameBook,
            writer:this.state.writer,
            content:this.state.content,
            dateOfCompletion:this.state.dateOfCompletion,
            editing:false
        }
        this.props.updateBook(book)

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
      <div className="container-book-edit">
        <form onSubmit={this.handleSubmit}>
        <div className="line"><h1>แก้ไขหนังสือ</h1></div>
        <div className="textNameBook"><label>ชื่อหนังสือ</label><input type="text" id="nameBook" onChange={this.handleChange} defaultValue={this.props.book.nameBook} /></div>
        <div className="textImage"><label>URL</label><input type="text" id="image" onChange={this.handleChange} defaultValue={this.props.book.image}/></div>
        <div className="textWriter"><label>ชื่อผู้เขียน</label><input type="text" id="writer" onChange={this.handleChange} defaultValue={this.props.book.writer}/></div>
        <div className="textContent"><label>เนื้อหา</label><textarea required rows="4" cols="50" id="content" onChange={this.handleChange} defaultValue={this.props.book.content}></textarea></div>
        <div className="textDate"><label>วันที่อ่านจบ</label><input type="date" id="dateOfCompletion" onChange={this.handleChange} defaultValue={this.props.book.dateOfCompletion}/></div>
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
        updateBook:(book)=>{
            dispatch({
                type: 'listBook/UPDATE',
                book:book
              })
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PageFromEdit)
