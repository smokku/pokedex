import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameStddevFieldsModelBase } from "./PokemonV2RegionnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameStddevFieldsModel */
export interface PokemonV2RegionnameStddevFieldsModelType extends Instance<typeof PokemonV2RegionnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameStddevFieldsModel */
export { selectFromPokemonV2RegionnameStddevFields, pokemonV2RegionnameStddevFieldsModelPrimitives, PokemonV2RegionnameStddevFieldsModelSelector } from "./PokemonV2RegionnameStddevFieldsModel.base"

/**
 * PokemonV2RegionnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2RegionnameStddevFieldsModel = PokemonV2RegionnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
