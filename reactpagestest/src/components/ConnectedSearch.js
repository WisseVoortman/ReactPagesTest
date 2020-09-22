import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Search from './Search'
import { fetchTest } from '../redux/actions/index'


const mapStateToProps = (state, props) => {
  return {
    nodes: state.nodes,
    links: state.links
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ fetchTest }, dispatch)

const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search)

export default ConnectedSearch