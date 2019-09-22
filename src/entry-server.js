import createApp from './main';

export default context => new Promise((resolve, reject) => {
  const { app, router, store } = createApp();

  router.onReady(() => {
    const matchComponent = router.getMatchedComponents();

    if (!matchComponent.length) {
      reject({ code: '404' });
    }

    Promise.all(matchComponent.map((component) =>
      component.asyncData({
        store,
        route:router.currentRoute
      })
    )).then((res) => {
      context.state = store.state
      resolve(app)
    })
  });
});
