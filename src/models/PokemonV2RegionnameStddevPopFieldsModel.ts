import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameStddevPopFieldsModelBase } from "./PokemonV2RegionnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameStddevPopFieldsModel */
export interface PokemonV2RegionnameStddevPopFieldsModelType extends Instance<typeof PokemonV2RegionnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameStddevPopFieldsModel */
export { selectFromPokemonV2RegionnameStddevPopFields, pokemonV2RegionnameStddevPopFieldsModelPrimitives, PokemonV2RegionnameStddevPopFieldsModelSelector } from "./PokemonV2RegionnameStddevPopFieldsModel.base"

/**
 * PokemonV2RegionnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2RegionnameStddevPopFieldsModel = PokemonV2RegionnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
