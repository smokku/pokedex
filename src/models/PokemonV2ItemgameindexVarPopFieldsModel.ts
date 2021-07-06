import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexVarPopFieldsModelBase } from "./PokemonV2ItemgameindexVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexVarPopFieldsModel */
export interface PokemonV2ItemgameindexVarPopFieldsModelType extends Instance<typeof PokemonV2ItemgameindexVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexVarPopFieldsModel */
export { selectFromPokemonV2ItemgameindexVarPopFields, pokemonV2ItemgameindexVarPopFieldsModelPrimitives, PokemonV2ItemgameindexVarPopFieldsModelSelector } from "./PokemonV2ItemgameindexVarPopFieldsModel.base"

/**
 * PokemonV2ItemgameindexVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemgameindexVarPopFieldsModel = PokemonV2ItemgameindexVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
