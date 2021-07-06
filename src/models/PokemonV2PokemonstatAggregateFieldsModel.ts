import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatAggregateFieldsModelBase } from "./PokemonV2PokemonstatAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatAggregateFieldsModel */
export interface PokemonV2PokemonstatAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonstatAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatAggregateFieldsModel */
export { selectFromPokemonV2PokemonstatAggregateFields, pokemonV2PokemonstatAggregateFieldsModelPrimitives, PokemonV2PokemonstatAggregateFieldsModelSelector } from "./PokemonV2PokemonstatAggregateFieldsModel.base"

/**
 * PokemonV2PokemonstatAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonstat"
 */
export const PokemonV2PokemonstatAggregateFieldsModel = PokemonV2PokemonstatAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
