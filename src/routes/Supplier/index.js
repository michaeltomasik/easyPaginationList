import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'supplier',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Supplier = require('./containers/SupplierContainer').default
      const reducer = require('./modules/supplier').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'supplier', reducer })

      /*  Return getComponent   */
      cb(null, Supplier)

    /* Webpack named bundle   */
    }, 'supplier')
  }
})
