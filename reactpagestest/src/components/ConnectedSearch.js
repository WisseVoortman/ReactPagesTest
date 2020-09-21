import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Search from './Search'


const mapStateToProps = (state, props) => {
  return {
    nodes: state.nodes,
    links: state.links
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({}, dispatch)

const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search)

export default ConnectedSearch