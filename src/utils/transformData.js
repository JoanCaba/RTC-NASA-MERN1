const transformData = (data, nasaApi) => {
  const resObject = {
    title: '',
    description: '',
    imageSrc: '',
    extraInfo: ''
  };
  //  title={title} description={explanation} imageSrc={hdurl} extraInformation={`© ${copyright} @ ${date}`}
  if (nasaApi === 'mars') {
    const { img_src, camera, earth_date } = data.photos[0];
    resObject.imageSrc = img_src;
    resObject.title = `Foto del ${earth_date} con la camara "${camera.full_name}"`;
    resObject.extraInfo = `© NASA @ ${earth_date}`;
    return resObject;
  }
  const { copyright, explanation, title, hdurl, date } = data;
  resObject.title = title;
  resObject.description = explanation;
  resObject.imageSrc = hdurl;
  resObject.extraInfo = `© ${copyright} @ ${date}`;
  return resObject;
};

export default transformData;
