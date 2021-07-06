import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryVarSampFieldsModelBase } from "./PokemonV2MovemetacategoryVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryVarSampFieldsModel */
export interface PokemonV2MovemetacategoryVarSampFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryVarSampFieldsModel */
export { selectFromPokemonV2MovemetacategoryVarSampFields, pokemonV2MovemetacategoryVarSampFieldsModelPrimitives, PokemonV2MovemetacategoryVarSampFieldsModelSelector } from "./PokemonV2MovemetacategoryVarSampFieldsModel.base"

/**
 * PokemonV2MovemetacategoryVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetacategoryVarSampFieldsModel = PokemonV2MovemetacategoryVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
