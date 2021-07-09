import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameModelBase } from "./PokemonV2PokemonspeciesnameModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameModel */
export interface PokemonV2PokemonspeciesnameModelType extends Instance<typeof PokemonV2PokemonspeciesnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameModel */
export { selectFromPokemonV2Pokemonspeciesname, pokemonV2PokemonspeciesnameModelPrimitives, PokemonV2PokemonspeciesnameModelSelector } from "./PokemonV2PokemonspeciesnameModel.base"

/**
 * PokemonV2PokemonspeciesnameModel
 *
 * columns and relationships of "pokemon_v2_pokemonspeciesname"
 */
export const PokemonV2PokemonspeciesnameModel = PokemonV2PokemonspeciesnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
