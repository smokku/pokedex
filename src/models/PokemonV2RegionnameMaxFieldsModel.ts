import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameMaxFieldsModelBase } from "./PokemonV2RegionnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameMaxFieldsModel */
export interface PokemonV2RegionnameMaxFieldsModelType extends Instance<typeof PokemonV2RegionnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameMaxFieldsModel */
export { selectFromPokemonV2RegionnameMaxFields, pokemonV2RegionnameMaxFieldsModelPrimitives, PokemonV2RegionnameMaxFieldsModelSelector } from "./PokemonV2RegionnameMaxFieldsModel.base"

/**
 * PokemonV2RegionnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2RegionnameMaxFieldsModel = PokemonV2RegionnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
