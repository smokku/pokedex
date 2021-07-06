import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboMaxFieldsModelBase } from "./PokemonV2ContestcomboMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboMaxFieldsModel */
export interface PokemonV2ContestcomboMaxFieldsModelType extends Instance<typeof PokemonV2ContestcomboMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboMaxFieldsModel */
export { selectFromPokemonV2ContestcomboMaxFields, pokemonV2ContestcomboMaxFieldsModelPrimitives, PokemonV2ContestcomboMaxFieldsModelSelector } from "./PokemonV2ContestcomboMaxFieldsModel.base"

/**
 * PokemonV2ContestcomboMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ContestcomboMaxFieldsModel = PokemonV2ContestcomboMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
