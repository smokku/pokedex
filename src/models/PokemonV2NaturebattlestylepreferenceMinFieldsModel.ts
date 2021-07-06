import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceMinFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceMinFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceMinFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceMinFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceMinFields, pokemonV2NaturebattlestylepreferenceMinFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceMinFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceMinFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2NaturebattlestylepreferenceMinFieldsModel = PokemonV2NaturebattlestylepreferenceMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
