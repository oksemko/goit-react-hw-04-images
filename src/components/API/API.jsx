import axios from 'axios';

export const ServiceAPI = (q, page) => {
  const options = {
    params: {
      key: '28261012-775c2e5140cc374d66361da3d',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      q,
      page,
    },
  };

  return axios.get('https://pixabay.com/api/', options);
}
