import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexVarPopFieldsModelBase } from "./PokemonV2PokemongameindexVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexVarPopFieldsModel */
export interface PokemonV2PokemongameindexVarPopFieldsModelType extends Instance<typeof PokemonV2PokemongameindexVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexVarPopFieldsModel */
export { selectFromPokemonV2PokemongameindexVarPopFields, pokemonV2PokemongameindexVarPopFieldsModelPrimitives, PokemonV2PokemongameindexVarPopFieldsModelSelector } from "./PokemonV2PokemongameindexVarPopFieldsModel.base"

/**
 * PokemonV2PokemongameindexVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemongameindexVarPopFieldsModel = PokemonV2PokemongameindexVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
