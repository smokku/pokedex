import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameSumFieldsModelBase } from "./PokemonV2RegionnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameSumFieldsModel */
export interface PokemonV2RegionnameSumFieldsModelType extends Instance<typeof PokemonV2RegionnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameSumFieldsModel */
export { selectFromPokemonV2RegionnameSumFields, pokemonV2RegionnameSumFieldsModelPrimitives, PokemonV2RegionnameSumFieldsModelSelector } from "./PokemonV2RegionnameSumFieldsModel.base"

/**
 * PokemonV2RegionnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2RegionnameSumFieldsModel = PokemonV2RegionnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
