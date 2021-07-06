import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentVarSampFieldsModelBase } from "./PokemonV2MovemetaailmentVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentVarSampFieldsModel */
export interface PokemonV2MovemetaailmentVarSampFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentVarSampFieldsModel */
export { selectFromPokemonV2MovemetaailmentVarSampFields, pokemonV2MovemetaailmentVarSampFieldsModelPrimitives, PokemonV2MovemetaailmentVarSampFieldsModelSelector } from "./PokemonV2MovemetaailmentVarSampFieldsModel.base"

/**
 * PokemonV2MovemetaailmentVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetaailmentVarSampFieldsModel = PokemonV2MovemetaailmentVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
