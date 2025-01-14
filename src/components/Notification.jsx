const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div 
    className={message.type === 'error' ? 'error' : 'success'}
    data-testid={message.type === 'error' ? 'error-notification' : 'success-notification'}
    >
      {message.message}
    </div>
  )
}

export default Notification
