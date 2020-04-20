const getData = (url) => {
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

export default getData;
