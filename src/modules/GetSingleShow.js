/**
 * Fetches a single podcast show from the API based on the given podcastId.
 *
 * @param {string} podcastId - The ID of the podcast show to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the podcast show object.
 * @throws {Error} If there's an error fetching the data or the response is not OK.
 */
export default async function getSingleShow(podcastId) {
    try {
        const response = await fetch(`https://candid-cocada-e08649.netlify.app/id/${podcastId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const podcast = await response.json();
        return podcast;
    } catch (error) {
        console.error('Error in getSingleShow:', error);
        throw error;
    }
}
