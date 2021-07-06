import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexVarPopFieldsModelBase } from "./PokemonV2LocationgameindexVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexVarPopFieldsModel */
export interface PokemonV2LocationgameindexVarPopFieldsModelType extends Instance<typeof PokemonV2LocationgameindexVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexVarPopFieldsModel */
export { selectFromPokemonV2LocationgameindexVarPopFields, pokemonV2LocationgameindexVarPopFieldsModelPrimitives, PokemonV2LocationgameindexVarPopFieldsModelSelector } from "./PokemonV2LocationgameindexVarPopFieldsModel.base"

/**
 * PokemonV2LocationgameindexVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LocationgameindexVarPopFieldsModel = PokemonV2LocationgameindexVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
