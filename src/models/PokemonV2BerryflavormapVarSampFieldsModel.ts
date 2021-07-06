import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapVarSampFieldsModelBase } from "./PokemonV2BerryflavormapVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapVarSampFieldsModel */
export interface PokemonV2BerryflavormapVarSampFieldsModelType extends Instance<typeof PokemonV2BerryflavormapVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapVarSampFieldsModel */
export { selectFromPokemonV2BerryflavormapVarSampFields, pokemonV2BerryflavormapVarSampFieldsModelPrimitives, PokemonV2BerryflavormapVarSampFieldsModelSelector } from "./PokemonV2BerryflavormapVarSampFieldsModel.base"

/**
 * PokemonV2BerryflavormapVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryflavormapVarSampFieldsModel = PokemonV2BerryflavormapVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
