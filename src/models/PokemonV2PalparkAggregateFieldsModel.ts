import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkAggregateFieldsModelBase } from "./PokemonV2PalparkAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkAggregateFieldsModel */
export interface PokemonV2PalparkAggregateFieldsModelType extends Instance<typeof PokemonV2PalparkAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkAggregateFieldsModel */
export { selectFromPokemonV2PalparkAggregateFields, pokemonV2PalparkAggregateFieldsModelPrimitives, PokemonV2PalparkAggregateFieldsModelSelector } from "./PokemonV2PalparkAggregateFieldsModel.base"

/**
 * PokemonV2PalparkAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_palpark"
 */
export const PokemonV2PalparkAggregateFieldsModel = PokemonV2PalparkAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
