export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'Content on the page has been updated. Reload?'
  );
  if (answer === true) {
    window.location.reload();
  }
};
