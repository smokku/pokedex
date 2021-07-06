import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameModelBase } from "./PokemonV2PokeathlonstatnameModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameModel */
export interface PokemonV2PokeathlonstatnameModelType extends Instance<typeof PokemonV2PokeathlonstatnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameModel */
export { selectFromPokemonV2Pokeathlonstatname, pokemonV2PokeathlonstatnameModelPrimitives, PokemonV2PokeathlonstatnameModelSelector } from "./PokemonV2PokeathlonstatnameModel.base"

/**
 * PokemonV2PokeathlonstatnameModel
 *
 * columns and relationships of "pokemon_v2_pokeathlonstatname"
 */
export const PokemonV2PokeathlonstatnameModel = PokemonV2PokeathlonstatnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
