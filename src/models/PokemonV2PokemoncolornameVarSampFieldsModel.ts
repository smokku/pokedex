import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameVarSampFieldsModelBase } from "./PokemonV2PokemoncolornameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameVarSampFieldsModel */
export interface PokemonV2PokemoncolornameVarSampFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameVarSampFieldsModel */
export { selectFromPokemonV2PokemoncolornameVarSampFields, pokemonV2PokemoncolornameVarSampFieldsModelPrimitives, PokemonV2PokemoncolornameVarSampFieldsModelSelector } from "./PokemonV2PokemoncolornameVarSampFieldsModel.base"

/**
 * PokemonV2PokemoncolornameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemoncolornameVarSampFieldsModel = PokemonV2PokemoncolornameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
