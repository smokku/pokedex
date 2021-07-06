import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextVarPopFieldsModelBase } from "./PokemonV2MoveflavortextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextVarPopFieldsModel */
export interface PokemonV2MoveflavortextVarPopFieldsModelType extends Instance<typeof PokemonV2MoveflavortextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextVarPopFieldsModel */
export { selectFromPokemonV2MoveflavortextVarPopFields, pokemonV2MoveflavortextVarPopFieldsModelPrimitives, PokemonV2MoveflavortextVarPopFieldsModelSelector } from "./PokemonV2MoveflavortextVarPopFieldsModel.base"

/**
 * PokemonV2MoveflavortextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveflavortextVarPopFieldsModel = PokemonV2MoveflavortextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
