

const initialState = {
  name:"I am home",
  age:''
}

export default function todos(state = initialState, action:any) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,name:action.name
      }
    default:
      return state
  }
}