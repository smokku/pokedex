import { Instance } from "mobx-state-tree"
import { PokemonV2GenderModelBase } from "./PokemonV2GenderModel.base"

/* The TypeScript type of an instance of PokemonV2GenderModel */
export interface PokemonV2GenderModelType extends Instance<typeof PokemonV2GenderModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderModel */
export { selectFromPokemonV2Gender, pokemonV2GenderModelPrimitives, PokemonV2GenderModelSelector } from "./PokemonV2GenderModel.base"

/**
 * PokemonV2GenderModel
 *
 * columns and relationships of "pokemon_v2_gender"
 */
export const PokemonV2GenderModel = PokemonV2GenderModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
