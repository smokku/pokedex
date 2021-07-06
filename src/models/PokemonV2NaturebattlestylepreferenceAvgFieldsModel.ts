import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceAvgFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceAvgFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceAvgFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceAvgFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceAvgFields, pokemonV2NaturebattlestylepreferenceAvgFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceAvgFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceAvgFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2NaturebattlestylepreferenceAvgFieldsModel = PokemonV2NaturebattlestylepreferenceAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
