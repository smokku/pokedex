import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleVarSampFieldsModelBase } from "./PokemonV2MovebattlestyleVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleVarSampFieldsModel */
export interface PokemonV2MovebattlestyleVarSampFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleVarSampFieldsModel */
export { selectFromPokemonV2MovebattlestyleVarSampFields, pokemonV2MovebattlestyleVarSampFieldsModelPrimitives, PokemonV2MovebattlestyleVarSampFieldsModelSelector } from "./PokemonV2MovebattlestyleVarSampFieldsModel.base"

/**
 * PokemonV2MovebattlestyleVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovebattlestyleVarSampFieldsModel = PokemonV2MovebattlestyleVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
