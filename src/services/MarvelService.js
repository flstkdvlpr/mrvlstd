class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

   getAllCharacters = () => {
    return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=5dc84ad99cff8a771adeeb06a5413450');
   }

   getCharacter = (id) => {
    return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=5dc84ad99cff8a771adeeb06a5413450`);
   }
}

export default MarvelService;