import PropTypes from 'prop-types'

export function Container({ children }) {
  return (
    <div className='max-w-screen-xl mx-auto px-2'>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.element
}