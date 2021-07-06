import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceAggregateFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceAggregateFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceAggregateFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceAggregateFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceAggregateFields, pokemonV2NaturebattlestylepreferenceAggregateFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceAggregateFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceAggregateFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_naturebattlestylepreference"
 */
export const PokemonV2NaturebattlestylepreferenceAggregateFieldsModel = PokemonV2NaturebattlestylepreferenceAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
