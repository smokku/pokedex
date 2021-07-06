import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameAggregateFieldsModelBase } from "./PokemonV2PokemonformnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameAggregateFieldsModel */
export interface PokemonV2PokemonformnameAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonformnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameAggregateFieldsModel */
export { selectFromPokemonV2PokemonformnameAggregateFields, pokemonV2PokemonformnameAggregateFieldsModelPrimitives, PokemonV2PokemonformnameAggregateFieldsModelSelector } from "./PokemonV2PokemonformnameAggregateFieldsModel.base"

/**
 * PokemonV2PokemonformnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonformname"
 */
export const PokemonV2PokemonformnameAggregateFieldsModel = PokemonV2PokemonformnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
