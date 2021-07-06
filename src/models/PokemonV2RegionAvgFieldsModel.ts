import { Instance } from "mobx-state-tree"
import { PokemonV2RegionAvgFieldsModelBase } from "./PokemonV2RegionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionAvgFieldsModel */
export interface PokemonV2RegionAvgFieldsModelType extends Instance<typeof PokemonV2RegionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionAvgFieldsModel */
export { selectFromPokemonV2RegionAvgFields, pokemonV2RegionAvgFieldsModelPrimitives, PokemonV2RegionAvgFieldsModelSelector } from "./PokemonV2RegionAvgFieldsModel.base"

/**
 * PokemonV2RegionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2RegionAvgFieldsModel = PokemonV2RegionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
