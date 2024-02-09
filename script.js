import { getCountriesData } from "./utils/fetchData.js";

class Typeahead{
    constructor(){
        this.searchInput=document.getElementById('search-input-box');

        this.results=document.getElementById('results');

        this.searchInput.addEventListener('input', (event)=>{this.handleSuggestions(event)});
    }

    async handleSuggestions(event){
        const keyword= event.target.value.trim();

        if(!keyword.length){
            this.clearResults();
            return;
        }

        const countryNameArr = await this.handleSearch(keyword);

        this.populateSuggestions(countryNameArr);

    }

    async handleSearch(keyword){

        const countriesNameArr = await getCountriesData(keyword);
        

        const countryNameArr= countriesNameArr.map((country)=>{
            country.name.common
        });

        return countryNameArr;

    }    

    populateSuggestions(countryNameArr){
        if(countryNameArr && countryNameArr.length){
            const fragment= document.createDocumentFragment();

            countryNameArr.forEach((countryName)=>{
                const resultItem =document.createElement('li');

                resultItem.className = 'result-item';

                resultItem.textContent = countryName;
            });

            
        }
        else{

        }

    }

    clearResults(){

    }
}

new Typeahead();