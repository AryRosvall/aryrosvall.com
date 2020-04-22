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

  try {
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response;

  } catch (e) {
    return e;

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

    const response = await sendData(url, method, email);
    return response;
  } catch (e) {
    return e;
  }
};

