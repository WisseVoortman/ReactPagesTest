import { SET_CURRENT_DATASOURCE } from '../actionTypes';


export default function datasourceReducer(state = [
  {
    name: 'Onderwijsregistratie',
    endpoint: 'http://localhost:8080/rdf4j-workbench/repositories/rio/query',
  }
], action) {
  switch (action.type) {
    //   case CREATE_POST: {
    //     const { type, ...post } = action
    //     return [...state, post]
    //   }

    //   case EDIT_POST: {
    //     const { type, id, ...newPost } = action
    //     return state.map((oldPost, index) =>
    //       action.id === index
    //         ? { ...oldPost, ...newPost }
    //         : oldPost
    //     )
    //   }

    default:
      return state
  }
}