import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameVarSampFieldsModelBase } from "./PokemonV2MovemetaailmentnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameVarSampFieldsModel */
export interface PokemonV2MovemetaailmentnameVarSampFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameVarSampFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameVarSampFields, pokemonV2MovemetaailmentnameVarSampFieldsModelPrimitives, PokemonV2MovemetaailmentnameVarSampFieldsModelSelector } from "./PokemonV2MovemetaailmentnameVarSampFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetaailmentnameVarSampFieldsModel = PokemonV2MovemetaailmentnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
