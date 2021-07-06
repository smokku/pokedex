import { Instance } from "mobx-state-tree"
import { PokemonV2RegionVarSampFieldsModelBase } from "./PokemonV2RegionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionVarSampFieldsModel */
export interface PokemonV2RegionVarSampFieldsModelType extends Instance<typeof PokemonV2RegionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionVarSampFieldsModel */
export { selectFromPokemonV2RegionVarSampFields, pokemonV2RegionVarSampFieldsModelPrimitives, PokemonV2RegionVarSampFieldsModelSelector } from "./PokemonV2RegionVarSampFieldsModel.base"

/**
 * PokemonV2RegionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2RegionVarSampFieldsModel = PokemonV2RegionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
