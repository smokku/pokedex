import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeModelBase } from "./PokemonV2ContesttypeModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeModel */
export interface PokemonV2ContesttypeModelType extends Instance<typeof PokemonV2ContesttypeModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeModel */
export { selectFromPokemonV2Contesttype, pokemonV2ContesttypeModelPrimitives, PokemonV2ContesttypeModelSelector } from "./PokemonV2ContesttypeModel.base"

/**
 * PokemonV2ContesttypeModel
 *
 * columns and relationships of "pokemon_v2_contesttype"
 */
export const PokemonV2ContesttypeModel = PokemonV2ContesttypeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
