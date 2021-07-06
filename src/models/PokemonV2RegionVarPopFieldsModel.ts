import { Instance } from "mobx-state-tree"
import { PokemonV2RegionVarPopFieldsModelBase } from "./PokemonV2RegionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionVarPopFieldsModel */
export interface PokemonV2RegionVarPopFieldsModelType extends Instance<typeof PokemonV2RegionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionVarPopFieldsModel */
export { selectFromPokemonV2RegionVarPopFields, pokemonV2RegionVarPopFieldsModelPrimitives, PokemonV2RegionVarPopFieldsModelSelector } from "./PokemonV2RegionVarPopFieldsModel.base"

/**
 * PokemonV2RegionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2RegionVarPopFieldsModel = PokemonV2RegionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
