import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    baseUrl = `https://rickandmortyapi.com/api`;

    constructor(private http: HttpClient){

    }
    getPokemons(){
            return this.http.get(`${this.baseUrl}/character`);
    }

    getPokemon(name: string){
        return this.http.get(`${this.baseUrl}/character/${name}`);
    }
}