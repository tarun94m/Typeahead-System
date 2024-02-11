export const getCountriesData = async (keyword) => {
    try{

        const resposne = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        const countriesArr = await resposne.json();

        if(resposne.status === 404) {
            console.log('Page or data not found!');
            return[];
        }

        return countriesArr;

    } catch(error) {
       console.error(error);
    }
}

export const submitData = () => {
    
}