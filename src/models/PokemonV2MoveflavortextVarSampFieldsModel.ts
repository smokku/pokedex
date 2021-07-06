import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextVarSampFieldsModelBase } from "./PokemonV2MoveflavortextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextVarSampFieldsModel */
export interface PokemonV2MoveflavortextVarSampFieldsModelType extends Instance<typeof PokemonV2MoveflavortextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextVarSampFieldsModel */
export { selectFromPokemonV2MoveflavortextVarSampFields, pokemonV2MoveflavortextVarSampFieldsModelPrimitives, PokemonV2MoveflavortextVarSampFieldsModelSelector } from "./PokemonV2MoveflavortextVarSampFieldsModel.base"

/**
 * PokemonV2MoveflavortextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveflavortextVarSampFieldsModel = PokemonV2MoveflavortextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
