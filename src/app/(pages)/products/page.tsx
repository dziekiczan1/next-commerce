import React from 'react'

import { Gutter } from '../../_components/Gutter'
import Filters from './Filters'

import classes from './index.module.scss'

const Product = () => {
  return (
    <div className={classes.container}>
      <Gutter>
        <Filters />
      </Gutter>
    </div>
  )
}

export default Product
