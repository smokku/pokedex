import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameModelBase } from "./PokemonV2ContesttypenameModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameModel */
export interface PokemonV2ContesttypenameModelType extends Instance<typeof PokemonV2ContesttypenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameModel */
export { selectFromPokemonV2Contesttypename, pokemonV2ContesttypenameModelPrimitives, PokemonV2ContesttypenameModelSelector } from "./PokemonV2ContesttypenameModel.base"

/**
 * PokemonV2ContesttypenameModel
 *
 * columns and relationships of "pokemon_v2_contesttypename"
 */
export const PokemonV2ContesttypenameModel = PokemonV2ContesttypenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
