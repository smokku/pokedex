import { Instance } from "mobx-state-tree"
import { PokemonV2LocationAggregateFieldsModelBase } from "./PokemonV2LocationAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationAggregateFieldsModel */
export interface PokemonV2LocationAggregateFieldsModelType extends Instance<typeof PokemonV2LocationAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationAggregateFieldsModel */
export { selectFromPokemonV2LocationAggregateFields, pokemonV2LocationAggregateFieldsModelPrimitives, PokemonV2LocationAggregateFieldsModelSelector } from "./PokemonV2LocationAggregateFieldsModel.base"

/**
 * PokemonV2LocationAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_location"
 */
export const PokemonV2LocationAggregateFieldsModel = PokemonV2LocationAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
