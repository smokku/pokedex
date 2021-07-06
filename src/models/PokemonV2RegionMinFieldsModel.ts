import { Instance } from "mobx-state-tree"
import { PokemonV2RegionMinFieldsModelBase } from "./PokemonV2RegionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionMinFieldsModel */
export interface PokemonV2RegionMinFieldsModelType extends Instance<typeof PokemonV2RegionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionMinFieldsModel */
export { selectFromPokemonV2RegionMinFields, pokemonV2RegionMinFieldsModelPrimitives, PokemonV2RegionMinFieldsModelSelector } from "./PokemonV2RegionMinFieldsModel.base"

/**
 * PokemonV2RegionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2RegionMinFieldsModel = PokemonV2RegionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
