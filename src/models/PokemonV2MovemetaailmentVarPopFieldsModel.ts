import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentVarPopFieldsModelBase } from "./PokemonV2MovemetaailmentVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentVarPopFieldsModel */
export interface PokemonV2MovemetaailmentVarPopFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentVarPopFieldsModel */
export { selectFromPokemonV2MovemetaailmentVarPopFields, pokemonV2MovemetaailmentVarPopFieldsModelPrimitives, PokemonV2MovemetaailmentVarPopFieldsModelSelector } from "./PokemonV2MovemetaailmentVarPopFieldsModel.base"

/**
 * PokemonV2MovemetaailmentVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetaailmentVarPopFieldsModel = PokemonV2MovemetaailmentVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
