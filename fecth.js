const url = 'https://api.waifu.pics/sfw/cringe'


export const fetchImage = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        return data.url;
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
}