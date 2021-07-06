import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformAggregateFieldsModelBase } from "./PokemonV2PokemonformAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformAggregateFieldsModel */
export interface PokemonV2PokemonformAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonformAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformAggregateFieldsModel */
export { selectFromPokemonV2PokemonformAggregateFields, pokemonV2PokemonformAggregateFieldsModelPrimitives, PokemonV2PokemonformAggregateFieldsModelSelector } from "./PokemonV2PokemonformAggregateFieldsModel.base"

/**
 * PokemonV2PokemonformAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonform"
 */
export const PokemonV2PokemonformAggregateFieldsModel = PokemonV2PokemonformAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
