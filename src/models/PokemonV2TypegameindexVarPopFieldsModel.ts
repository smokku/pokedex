import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexVarPopFieldsModelBase } from "./PokemonV2TypegameindexVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexVarPopFieldsModel */
export interface PokemonV2TypegameindexVarPopFieldsModelType extends Instance<typeof PokemonV2TypegameindexVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexVarPopFieldsModel */
export { selectFromPokemonV2TypegameindexVarPopFields, pokemonV2TypegameindexVarPopFieldsModelPrimitives, PokemonV2TypegameindexVarPopFieldsModelSelector } from "./PokemonV2TypegameindexVarPopFieldsModel.base"

/**
 * PokemonV2TypegameindexVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2TypegameindexVarPopFieldsModel = PokemonV2TypegameindexVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
