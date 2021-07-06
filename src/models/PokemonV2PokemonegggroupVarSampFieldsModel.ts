import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupVarSampFieldsModelBase } from "./PokemonV2PokemonegggroupVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupVarSampFieldsModel */
export interface PokemonV2PokemonegggroupVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupVarSampFieldsModel */
export { selectFromPokemonV2PokemonegggroupVarSampFields, pokemonV2PokemonegggroupVarSampFieldsModelPrimitives, PokemonV2PokemonegggroupVarSampFieldsModelSelector } from "./PokemonV2PokemonegggroupVarSampFieldsModel.base"

/**
 * PokemonV2PokemonegggroupVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonegggroupVarSampFieldsModel = PokemonV2PokemonegggroupVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
