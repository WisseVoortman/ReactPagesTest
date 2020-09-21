import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DataSourceDropdown from './DataSourceDropdown'


const mapStateToProps = (state, props) => {
  return {
    datasource: state.datasource,
    nodes: state.nodes
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({}, dispatch)

const ConnectedDataSourceDropdown = connect(mapStateToProps, mapDispatchToProps)(DataSourceDropdown)

export default ConnectedDataSourceDropdown