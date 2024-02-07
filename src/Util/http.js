import axios from "axios";

export const getLangingData = async () => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/landing`,
        Headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    const response = await axios(config)
    return response.data.data;
}

export const subscribeNewsLetter = async (email) => {

    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/newsletter`,
        data: {
            "email": email
        }
    };

    const response = await axios(config)
    return response.data.data;
}

export const getHomeServices = async (email) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/service`,
    };

    const response = await axios(config)
    return response.data.data;
}

export const getAwards = async (pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/awards?page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data.data;
}

export const getTestimonial = async (pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/testimonial?page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data.data;
}

export const getPartners = async (pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/partners?page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data.data;
}