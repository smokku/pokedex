import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceVarPopFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceVarPopFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceVarPopFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceVarPopFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceVarPopFields, pokemonV2NaturebattlestylepreferenceVarPopFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceVarPopFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceVarPopFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2NaturebattlestylepreferenceVarPopFieldsModel = PokemonV2NaturebattlestylepreferenceVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
