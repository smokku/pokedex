import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupVarSampFieldsModelBase } from "./PokemonV2EgggroupVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupVarSampFieldsModel */
export interface PokemonV2EgggroupVarSampFieldsModelType extends Instance<typeof PokemonV2EgggroupVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupVarSampFieldsModel */
export { selectFromPokemonV2EgggroupVarSampFields, pokemonV2EgggroupVarSampFieldsModelPrimitives, PokemonV2EgggroupVarSampFieldsModelSelector } from "./PokemonV2EgggroupVarSampFieldsModel.base"

/**
 * PokemonV2EgggroupVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EgggroupVarSampFieldsModel = PokemonV2EgggroupVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
