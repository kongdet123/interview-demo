import React, { Component } from 'react'
import { connect } from 'react-redux'
import './stype.css'
class ViewBook extends Component {
    handleDelete = () => {
        this.props.dispatch({
            type: 'listBook/DELETE',
            id:this.props.book.id
          })
    }
    handleEdit = () => {
        this.props.dispatch({
            type: 'listBook/EDIT',
            id:this.props.book.id
          })
    }
    render() {
        console.log(this.props.book.image)
        return (
            <div className="grid-item">
                <div className="imageDrop">
                {this.props.book.image ? 
                <img className="image" src={this.props.book.image} alt="image" />
                :<img className="image" src="https://sanin-japan.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" alt="image" />}
                <div class="dropdown">
                <button class="dropbtn"> V</button>
                <div class="dropdown-content">
                    <a href="#" onClick={this.handleEdit}>แก้ไข</a>
                    <a href="#" onClick={this.handleDelete}>ลบ</a>
                </div>  
                </div>
                </div>
                <div className="detail">
                <h1 className="nameBook">{this.props.book.nameBook}</h1>
                <p className="writer">ชื่ออผู้เขียน : {this.props.book.writer}</p>
                <p className="date">วันที่อ่านจบ : {this.props.book.dateOfCompletion.split('-')[2]+'/'+this.props.book.dateOfCompletion.split('-')[1]+'/'+this.props.book.dateOfCompletion.split('-')[0]}</p>
                <div className="content">{this.props.book.content}</div>
                </div>
            </div>
        )
    }
}

export default connect()(ViewBook)
