import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextVarSampFieldsModelBase } from "./PokemonV2ItemflavortextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextVarSampFieldsModel */
export interface PokemonV2ItemflavortextVarSampFieldsModelType extends Instance<typeof PokemonV2ItemflavortextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextVarSampFieldsModel */
export { selectFromPokemonV2ItemflavortextVarSampFields, pokemonV2ItemflavortextVarSampFieldsModelPrimitives, PokemonV2ItemflavortextVarSampFieldsModelSelector } from "./PokemonV2ItemflavortextVarSampFieldsModel.base"

/**
 * PokemonV2ItemflavortextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemflavortextVarSampFieldsModel = PokemonV2ItemflavortextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
