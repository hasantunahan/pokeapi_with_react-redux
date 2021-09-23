import store from '../../redux/store/store';

export async function API_SERVICES(path, callback, error) {
  try {
    fetch(`${store.getState('config').base.config.BASE_URL}${path}`)
      .then(res => res.json())
      .then(data => callback(data))
      .catch(err => error(err));
  } catch (error) {
    error(error);
  }
}
