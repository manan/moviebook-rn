import { urls, params } from '../utils';

const requestToken = ({ username, password }) => {
  const requestParams = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      [params.username]: username,
      [params.password]: password })
  }
  return fetch(urls.base_url + urls.token_auth, requestParams) // eslint-disable-line
}

const getData = (requestFunc, storeFunc, credentials, args) => {
  const { username, password, token } = credentials
  requestFunc({ token, args })
  .then(response => {
    if (response.ok) {
      response.json()
      .then(data => {
        storeFunc(data);
      })
    } else if (response.status === 401) {
      requestToken({ username, password })
      .then(tokenresponse => {
        if (tokenresponse.ok) {
          tokenresponse.json()
          .then(tokendata => {
            const { token_response } = params;
            requestFunc({ token: tokendata[token_response], args })
            .then(userresponse => userresponse.json())
            .then(userdata => {
              storeFunc(userdata);
            })
          })
        } else {
          console.log('SHOULD LOG  OUT')
        }
      })
    } else {
      console.log(response)
      console.log('SERVER SIDE ERROR!');
      // SHOULD NEVER REACH HERE, IF DOES, SERVER SIDE ISSUE
    }
  })
  .catch(() => console.log('SHOULD LOG  OUT'))
}

export { getData }
