import { Instance } from "mobx-state-tree"
import { PokemonV2LocationVarPopFieldsModelBase } from "./PokemonV2LocationVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationVarPopFieldsModel */
export interface PokemonV2LocationVarPopFieldsModelType extends Instance<typeof PokemonV2LocationVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationVarPopFieldsModel */
export { selectFromPokemonV2LocationVarPopFields, pokemonV2LocationVarPopFieldsModelPrimitives, PokemonV2LocationVarPopFieldsModelSelector } from "./PokemonV2LocationVarPopFieldsModel.base"

/**
 * PokemonV2LocationVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LocationVarPopFieldsModel = PokemonV2LocationVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
