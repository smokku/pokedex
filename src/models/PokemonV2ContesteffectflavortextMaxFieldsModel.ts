import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextMaxFieldsModelBase } from "./PokemonV2ContesteffectflavortextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextMaxFieldsModel */
export interface PokemonV2ContesteffectflavortextMaxFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextMaxFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextMaxFields, pokemonV2ContesteffectflavortextMaxFieldsModelPrimitives, PokemonV2ContesteffectflavortextMaxFieldsModelSelector } from "./PokemonV2ContesteffectflavortextMaxFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ContesteffectflavortextMaxFieldsModel = PokemonV2ContesteffectflavortextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
