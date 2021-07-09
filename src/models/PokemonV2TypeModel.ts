import { Instance } from "mobx-state-tree"
import { PokemonV2TypeModelBase } from "./PokemonV2TypeModel.base"

/* The TypeScript type of an instance of PokemonV2TypeModel */
export interface PokemonV2TypeModelType extends Instance<typeof PokemonV2TypeModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeModel */
export { selectFromPokemonV2Type, pokemonV2TypeModelPrimitives, PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"

/**
 * PokemonV2TypeModel
 *
 * columns and relationships of "pokemon_v2_type"
 */
export const PokemonV2TypeModel = PokemonV2TypeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
