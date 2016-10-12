import { connect } from 'react-redux'
import { getSuppliers } from '../modules/supplier'

import Supplier from '../components/Supplier'

const mapDispatchToProps = {
  getSuppliers
}

const mapStateToProps = (state) => ({
  supplier : state.supplier
})

export default connect(mapStateToProps, mapDispatchToProps)(Supplier)
