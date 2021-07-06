import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameVarianceFieldsModelBase } from "./PokemonV2RegionnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameVarianceFieldsModel */
export interface PokemonV2RegionnameVarianceFieldsModelType extends Instance<typeof PokemonV2RegionnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameVarianceFieldsModel */
export { selectFromPokemonV2RegionnameVarianceFields, pokemonV2RegionnameVarianceFieldsModelPrimitives, PokemonV2RegionnameVarianceFieldsModelSelector } from "./PokemonV2RegionnameVarianceFieldsModel.base"

/**
 * PokemonV2RegionnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2RegionnameVarianceFieldsModel = PokemonV2RegionnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
