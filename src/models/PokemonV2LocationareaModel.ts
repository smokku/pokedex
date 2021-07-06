import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaModelBase } from "./PokemonV2LocationareaModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaModel */
export interface PokemonV2LocationareaModelType extends Instance<typeof PokemonV2LocationareaModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaModel */
export { selectFromPokemonV2Locationarea, pokemonV2LocationareaModelPrimitives, PokemonV2LocationareaModelSelector } from "./PokemonV2LocationareaModel.base"

/**
 * PokemonV2LocationareaModel
 *
 * columns and relationships of "pokemon_v2_locationarea"
 */
export const PokemonV2LocationareaModel = PokemonV2LocationareaModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
