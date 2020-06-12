import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    baseUrl = `https://rickandmortyapi.com/api/`;

    constructor(private http: HttpClient){

    }

    getPokemons(idxstart=0){
        if(idxstart){
        return this.http.get(`${this.baseUrl}/character?offset=${idxstart}`);
        } else {
            return this.http.get(`${this.baseUrl}/character`);
        }
    }

    getPokemon(name: string){
        return this.http.get(`${this.baseUrl}/character/${name}`);
    }
}
