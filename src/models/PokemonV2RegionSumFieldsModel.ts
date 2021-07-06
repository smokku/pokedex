import { Instance } from "mobx-state-tree"
import { PokemonV2RegionSumFieldsModelBase } from "./PokemonV2RegionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionSumFieldsModel */
export interface PokemonV2RegionSumFieldsModelType extends Instance<typeof PokemonV2RegionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionSumFieldsModel */
export { selectFromPokemonV2RegionSumFields, pokemonV2RegionSumFieldsModelPrimitives, PokemonV2RegionSumFieldsModelSelector } from "./PokemonV2RegionSumFieldsModel.base"

/**
 * PokemonV2RegionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2RegionSumFieldsModel = PokemonV2RegionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
