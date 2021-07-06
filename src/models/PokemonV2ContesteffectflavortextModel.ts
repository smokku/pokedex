import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextModelBase } from "./PokemonV2ContesteffectflavortextModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextModel */
export interface PokemonV2ContesteffectflavortextModelType extends Instance<typeof PokemonV2ContesteffectflavortextModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextModel */
export { selectFromPokemonV2Contesteffectflavortext, pokemonV2ContesteffectflavortextModelPrimitives, PokemonV2ContesteffectflavortextModelSelector } from "./PokemonV2ContesteffectflavortextModel.base"

/**
 * PokemonV2ContesteffectflavortextModel
 *
 * columns and relationships of "pokemon_v2_contesteffectflavortext"
 */
export const PokemonV2ContesteffectflavortextModel = PokemonV2ContesteffectflavortextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
