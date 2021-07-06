import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameVarPopFieldsModelBase } from "./PokemonV2MovemetaailmentnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameVarPopFieldsModel */
export interface PokemonV2MovemetaailmentnameVarPopFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameVarPopFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameVarPopFields, pokemonV2MovemetaailmentnameVarPopFieldsModelPrimitives, PokemonV2MovemetaailmentnameVarPopFieldsModelSelector } from "./PokemonV2MovemetaailmentnameVarPopFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetaailmentnameVarPopFieldsModel = PokemonV2MovemetaailmentnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
