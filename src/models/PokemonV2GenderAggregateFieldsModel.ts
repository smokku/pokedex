import { Instance } from "mobx-state-tree"
import { PokemonV2GenderAggregateFieldsModelBase } from "./PokemonV2GenderAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderAggregateFieldsModel */
export interface PokemonV2GenderAggregateFieldsModelType extends Instance<typeof PokemonV2GenderAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderAggregateFieldsModel */
export { selectFromPokemonV2GenderAggregateFields, pokemonV2GenderAggregateFieldsModelPrimitives, PokemonV2GenderAggregateFieldsModelSelector } from "./PokemonV2GenderAggregateFieldsModel.base"

/**
 * PokemonV2GenderAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_gender"
 */
export const PokemonV2GenderAggregateFieldsModel = PokemonV2GenderAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
