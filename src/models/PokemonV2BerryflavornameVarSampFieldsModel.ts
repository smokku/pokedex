import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameVarSampFieldsModelBase } from "./PokemonV2BerryflavornameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameVarSampFieldsModel */
export interface PokemonV2BerryflavornameVarSampFieldsModelType extends Instance<typeof PokemonV2BerryflavornameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameVarSampFieldsModel */
export { selectFromPokemonV2BerryflavornameVarSampFields, pokemonV2BerryflavornameVarSampFieldsModelPrimitives, PokemonV2BerryflavornameVarSampFieldsModelSelector } from "./PokemonV2BerryflavornameVarSampFieldsModel.base"

/**
 * PokemonV2BerryflavornameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryflavornameVarSampFieldsModel = PokemonV2BerryflavornameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
