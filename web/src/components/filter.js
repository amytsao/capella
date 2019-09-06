import React, { useState } from 'react'
import classnames from 'classnames'

import styles from './filter.module.css'

const Filter = () => {
  const containerClasses = classnames('container', 'mb-1', styles.container)
  const formClasses = classnames('form-horizontal', styles.form)

  const [filterState, setFilterState] = useState({
    productName: '',
    category: ''
  })

  const categories = []

  return (
    <div className={containerClasses}>
      <form className={formClasses} noValidate>
        <p className='mb-1'>Refine your results</p>
        <div className='columns text-center'>
          <div className='column col-4 col-xs-12'>
            <div className='form-group'>
              <div className='col-3 col-sm-12'>
                <label className='form-label' htmlFor='product-name'>
                  Product Name
                </label>
              </div>
              <div className='col-9 col-sm-12'>
                <input
                  className='form-input'
                  type='string'
                  id='product-name'
                  placeholder='Aluminum Pole'
                  value={filterState.productName}
                  onChange={event => setFilterState({ productName: String(event.target.value) })}
                />
              </div>
            </div>
          </div>
          <div className='column col-4 col-xs-12'>
            <div className='form-group'>
              <div className='col-3 col-sm-12'>
                <label className='form-label' htmlFor='category'>
                  Category
                </label>
              </div>
              <div className='col-9 col-sm-12'>
                <select
                  className='form-select'
                  id='category'
                  value={filterState.category}
                  onChange={event => setFilterState({ category: event.target.value })}
                >
                  <option value=''>Choose...</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filter
