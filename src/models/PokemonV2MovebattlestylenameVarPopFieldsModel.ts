import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameVarPopFieldsModelBase } from "./PokemonV2MovebattlestylenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameVarPopFieldsModel */
export interface PokemonV2MovebattlestylenameVarPopFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameVarPopFieldsModel */
export { selectFromPokemonV2MovebattlestylenameVarPopFields, pokemonV2MovebattlestylenameVarPopFieldsModelPrimitives, PokemonV2MovebattlestylenameVarPopFieldsModelSelector } from "./PokemonV2MovebattlestylenameVarPopFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovebattlestylenameVarPopFieldsModel = PokemonV2MovebattlestylenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
