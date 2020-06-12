import { Component, OnInit } from "@angular/core";
import { PokemonService } from "./pokemon.service";
import { BehaviorSubject } from "rxjs";


@Component({
    selector: "ns-pokemons",
    templateUrl: "./pokemon.component.html"
})
export class PokemonComponent implements OnInit {
    pokemons = [];
    idxstart = 0;

    constructor(private ps: PokemonService) {
        // this.pokemons$ = new BehaviorSubject([]);
     }

    ngOnInit(): void {
        this.ps.getPokemons().subscribe((response: any) => {
          this.pokemons = response.results
        //   response.results ambil data array object results
          console.log(this.pokemons)
        });
    }

    loadMore(){
        // this.idxstart+=20;
        // this.ps.getPokemons(this.idxstart).subscribe((response: any) => {
        //     this.pokemons.push( ... response.results);
        //     this.pokemons$.next(this.pokemons);
        //  });
    }
}