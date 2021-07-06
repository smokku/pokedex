import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectModelBase } from "./PokemonV2ContesteffectModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectModel */
export interface PokemonV2ContesteffectModelType extends Instance<typeof PokemonV2ContesteffectModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectModel */
export { selectFromPokemonV2Contesteffect, pokemonV2ContesteffectModelPrimitives, PokemonV2ContesteffectModelSelector } from "./PokemonV2ContesteffectModel.base"

/**
 * PokemonV2ContesteffectModel
 *
 * columns and relationships of "pokemon_v2_contesteffect"
 */
export const PokemonV2ContesteffectModel = PokemonV2ContesteffectModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
