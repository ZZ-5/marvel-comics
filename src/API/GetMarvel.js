import axios from "axios";

export default class GetMarvel {
    static async getComics(limit, offset) {
        try {
            const response = await axios.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=212b62d6647c2e4268a437ca6f045f7f&hash=eece64f0c199ca32a0246cd6dbfab6a2', {
                params: {
                    limit,
                    offset
                }
            })

            return response.data
        } catch (error) {
            console.log(error);
        }

    }

    static async getEvents(limit, offset) {
        try {
            const response = await axios.get('http://gateway.marvel.com/v1/public/events?ts=1&apikey=212b62d6647c2e4268a437ca6f045f7f&hash=eece64f0c199ca32a0246cd6dbfab6a2', {
                params: {
                    limit,
                    offset
                }
            })

            return response.data
        } catch (error) {
            console.log(error);
        }

    }

    static async getCharacters(limit, offset, nameStartsWith) {
        try {
            const response = await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=212b62d6647c2e4268a437ca6f045f7f&hash=eece64f0c199ca32a0246cd6dbfab6a2', {
                params: {
                    limit,
                    offset,
                    nameStartsWith
                }
            })

            return response.data
        } catch (error) {
            console.log(error);
        }

    }

}
