import { Instance } from "mobx-state-tree"
import { PokemonV2RegionVarianceFieldsModelBase } from "./PokemonV2RegionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionVarianceFieldsModel */
export interface PokemonV2RegionVarianceFieldsModelType extends Instance<typeof PokemonV2RegionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionVarianceFieldsModel */
export { selectFromPokemonV2RegionVarianceFields, pokemonV2RegionVarianceFieldsModelPrimitives, PokemonV2RegionVarianceFieldsModelSelector } from "./PokemonV2RegionVarianceFieldsModel.base"

/**
 * PokemonV2RegionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2RegionVarianceFieldsModel = PokemonV2RegionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
