import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceVarianceFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceVarianceFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceVarianceFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceVarianceFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceVarianceFields, pokemonV2NaturebattlestylepreferenceVarianceFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceVarianceFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceVarianceFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2NaturebattlestylepreferenceVarianceFieldsModel = PokemonV2NaturebattlestylepreferenceVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
