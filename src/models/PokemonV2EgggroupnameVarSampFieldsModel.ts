import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameVarSampFieldsModelBase } from "./PokemonV2EgggroupnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameVarSampFieldsModel */
export interface PokemonV2EgggroupnameVarSampFieldsModelType extends Instance<typeof PokemonV2EgggroupnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameVarSampFieldsModel */
export { selectFromPokemonV2EgggroupnameVarSampFields, pokemonV2EgggroupnameVarSampFieldsModelPrimitives, PokemonV2EgggroupnameVarSampFieldsModelSelector } from "./PokemonV2EgggroupnameVarSampFieldsModel.base"

/**
 * PokemonV2EgggroupnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EgggroupnameVarSampFieldsModel = PokemonV2EgggroupnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
