function notify(message) {
  console.log('todo')
  document.addEventListener('DOMContentLoaded', () => {
    const notificationDiv = document.getElementById('notification');
    const notifyButton = document.getElementById('notifyButton');
  
    function showNotification(message) {
        notificationDiv.textContent = message;
        notificationDiv.style.display = 'block';
    }
  
    notificationDiv.addEventListener('click', () => {
        notificationDiv.style.display = 'none';
    });
  
    notifyButton.addEventListener('click', () => {
        showNotification('This is your notification message!');
    });
  });
}