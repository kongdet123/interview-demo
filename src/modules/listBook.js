export const INSERT = 'listBook/INSERT'
export const DELETE = 'listBook/DELETE'
export const EDIT = 'listBook/EDIT'
export const UPDATE = 'listBook/UPDATE'

const initialState = []
  
  export default (state = initialState, action) => {
      console.log(state)
    switch (action.type) {
      case INSERT:
        return state.concat([action.book])
      case DELETE:
        return state.filter((book)=>book.id !== action.id)
      case EDIT:
        return state.map((book)=>book.id === action.id ? {...book,editing:!book.editing}:book)
      case UPDATE:
        return state.map((book)=>{
            if(book.id === action.book.id){
                return {
                    ...book,
                    image:action.book.image,
                    nameBook:action.book.nameBook,
                    writer:action.book.writer,
                    content:action.book.content,
                    dateOfCompletion:action.book.dateOfCompletion,
                    editing:!book.editing
                }
            }else{
                return book
            }
        })
      default:
        return state
    }
  }
