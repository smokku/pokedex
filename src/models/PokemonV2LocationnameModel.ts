import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameModelBase } from "./PokemonV2LocationnameModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameModel */
export interface PokemonV2LocationnameModelType extends Instance<typeof PokemonV2LocationnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameModel */
export { selectFromPokemonV2Locationname, pokemonV2LocationnameModelPrimitives, PokemonV2LocationnameModelSelector } from "./PokemonV2LocationnameModel.base"

/**
 * PokemonV2LocationnameModel
 *
 * columns and relationships of "pokemon_v2_locationname"
 */
export const PokemonV2LocationnameModel = PokemonV2LocationnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
