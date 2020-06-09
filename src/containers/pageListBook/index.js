import React, { Component } from 'react';
import { Layout} from 'antd';
import { connect } from 'react-redux'
import ViewBook from './ViewBook';
import PageFromEdit from '../pageForm/pageFormEdit'
import './stype.css'
const {Content} = Layout;

class PageListBook extends Component {
  
  render(){
    let container = Array();
    this.props.listBook.map((book)=> {
      if(book.editing == true){
        container.push(
          this.props.listBook.map((book) => book.editing ? <PageFromEdit book={book} key={book.id} />: null )
        )
      }else{
        container.push(<ViewBook key={book.id} book={book} />)
      }
    })
    return(
    <Layout className="layout">
      <Content>
      <div className="title"><h1> รายการหนังสือ </h1></div>
        <div className="content-listBook">
        {container.length != 0 ? <div className="grid-container">{container}</div> : <h1 className="emptyBook">ไม่มีรายการหนังสือ</h1>}
        
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

export default connect(mapStateToProps,mapDispatchToProps)(PageListBook)
