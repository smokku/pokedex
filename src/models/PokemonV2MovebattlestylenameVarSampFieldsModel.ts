import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameVarSampFieldsModelBase } from "./PokemonV2MovebattlestylenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameVarSampFieldsModel */
export interface PokemonV2MovebattlestylenameVarSampFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameVarSampFieldsModel */
export { selectFromPokemonV2MovebattlestylenameVarSampFields, pokemonV2MovebattlestylenameVarSampFieldsModelPrimitives, PokemonV2MovebattlestylenameVarSampFieldsModelSelector } from "./PokemonV2MovebattlestylenameVarSampFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovebattlestylenameVarSampFieldsModel = PokemonV2MovebattlestylenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
