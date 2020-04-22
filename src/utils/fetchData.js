/* eslint-disable no-unused-vars */
export const getData = (url) => {
  const data = fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then(json => json)
    .catch(e => e);

  return data;
};

export const sendData = async (url, method, data) => {
  console.log('sendData -> data', data);
  console.log('sendData -> url', url);
  try {
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    console.log('sendData -> response', response);

  } catch (e) {
    console.log('sendData -> e', e);

  }
};

export const sendMessage = async (url, method, data) => {

  try {
    const subject = `[WEBPAGE] Message from ${data.name}`;
    const { name, ...emailData } = data;

    const email = {
      ...emailData,
      'to': 'ary.rosvall@gmail.com',
      'subject': subject,
    };
    console.log('sendMessage -> email', email);

    const response = await sendData(url, method, email);
    console.log('sendData -> response', response);

  } catch (e) {
    console.log('sendData -> e', e);
  }
};

