import axios from "axios";

export const getLangingData = async () => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/landing`
    };

    const response = await axios(config)
    return response.data;
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
    return response.data;
}

export const getHomeServices = async () => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/service`,
    };

    const response = await axios(config)
    return response.data;
}

export const getAwards = async (pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/awards?page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data;
}

export const getTestimonial = async (pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/testimonial?page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data;
}

export const getPartners = async (pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/partners?page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data;
}

export const getProjects = async (pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/project?page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data;
}

export const getCaseStudies = async (home, pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/case-study?home_page=${home}&page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data;
}

export const getCaseDetails = async (case_id) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/case-study/${case_id}`,
    };

    const response = await axios(config)
    return response.data;
}

export const getNews = async (home, pageNum) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/news?home_page=${home}&page=${pageNum}`,
    };

    const response = await axios(config)
    return response.data;
}

export const getNewsDetails = async (news_id) => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/news/${news_id}`,
    };

    const response = await axios(config)
    return response.data;
}

export const getSiteContacts = async () => {

    const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/api/site-contacts`,
    };

    const response = await axios(config)
    return response.data;
}