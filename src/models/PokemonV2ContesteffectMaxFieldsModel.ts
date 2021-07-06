import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectMaxFieldsModelBase } from "./PokemonV2ContesteffectMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectMaxFieldsModel */
export interface PokemonV2ContesteffectMaxFieldsModelType extends Instance<typeof PokemonV2ContesteffectMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectMaxFieldsModel */
export { selectFromPokemonV2ContesteffectMaxFields, pokemonV2ContesteffectMaxFieldsModelPrimitives, PokemonV2ContesteffectMaxFieldsModelSelector } from "./PokemonV2ContesteffectMaxFieldsModel.base"

/**
 * PokemonV2ContesteffectMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ContesteffectMaxFieldsModel = PokemonV2ContesteffectMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
