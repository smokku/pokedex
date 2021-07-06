import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessVarSampFieldsModelBase } from "./PokemonV2BerryfirmnessVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessVarSampFieldsModel */
export interface PokemonV2BerryfirmnessVarSampFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessVarSampFieldsModel */
export { selectFromPokemonV2BerryfirmnessVarSampFields, pokemonV2BerryfirmnessVarSampFieldsModelPrimitives, PokemonV2BerryfirmnessVarSampFieldsModelSelector } from "./PokemonV2BerryfirmnessVarSampFieldsModel.base"

/**
 * PokemonV2BerryfirmnessVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryfirmnessVarSampFieldsModel = PokemonV2BerryfirmnessVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
