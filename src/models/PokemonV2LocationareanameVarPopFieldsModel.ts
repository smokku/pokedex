import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameVarPopFieldsModelBase } from "./PokemonV2LocationareanameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameVarPopFieldsModel */
export interface PokemonV2LocationareanameVarPopFieldsModelType extends Instance<typeof PokemonV2LocationareanameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameVarPopFieldsModel */
export { selectFromPokemonV2LocationareanameVarPopFields, pokemonV2LocationareanameVarPopFieldsModelPrimitives, PokemonV2LocationareanameVarPopFieldsModelSelector } from "./PokemonV2LocationareanameVarPopFieldsModel.base"

/**
 * PokemonV2LocationareanameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LocationareanameVarPopFieldsModel = PokemonV2LocationareanameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
