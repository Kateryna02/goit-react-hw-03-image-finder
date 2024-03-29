



const apiKey = '42039867-09e41a1320e593858871044dc';
const getImages = async (page, perPage, query = '') => {
    const response = await fetch(
        ` https://pixabay.com/api/?&page=${page}&key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );
    const images = await response.json();
    return images.hits;
};

export default getImages;