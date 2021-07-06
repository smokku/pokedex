import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatAggregateFieldsModelBase } from "./PokemonV2NaturepokeathlonstatAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatAggregateFieldsModel */
export interface PokemonV2NaturepokeathlonstatAggregateFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatAggregateFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatAggregateFields, pokemonV2NaturepokeathlonstatAggregateFieldsModelPrimitives, PokemonV2NaturepokeathlonstatAggregateFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatAggregateFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_naturepokeathlonstat"
 */
export const PokemonV2NaturepokeathlonstatAggregateFieldsModel = PokemonV2NaturepokeathlonstatAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
