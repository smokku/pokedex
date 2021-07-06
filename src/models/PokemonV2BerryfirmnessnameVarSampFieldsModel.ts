import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameVarSampFieldsModelBase } from "./PokemonV2BerryfirmnessnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameVarSampFieldsModel */
export interface PokemonV2BerryfirmnessnameVarSampFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameVarSampFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameVarSampFields, pokemonV2BerryfirmnessnameVarSampFieldsModelPrimitives, PokemonV2BerryfirmnessnameVarSampFieldsModelSelector } from "./PokemonV2BerryfirmnessnameVarSampFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2BerryfirmnessnameVarSampFieldsModel = PokemonV2BerryfirmnessnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
