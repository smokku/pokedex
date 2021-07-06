import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceStddevPopFields, pokemonV2NaturebattlestylepreferenceStddevPopFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2NaturebattlestylepreferenceStddevPopFieldsModel = PokemonV2NaturebattlestylepreferenceStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
