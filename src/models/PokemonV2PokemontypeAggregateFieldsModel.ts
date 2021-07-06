import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeAggregateFieldsModelBase } from "./PokemonV2PokemontypeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeAggregateFieldsModel */
export interface PokemonV2PokemontypeAggregateFieldsModelType extends Instance<typeof PokemonV2PokemontypeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeAggregateFieldsModel */
export { selectFromPokemonV2PokemontypeAggregateFields, pokemonV2PokemontypeAggregateFieldsModelPrimitives, PokemonV2PokemontypeAggregateFieldsModelSelector } from "./PokemonV2PokemontypeAggregateFieldsModel.base"

/**
 * PokemonV2PokemontypeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemontype"
 */
export const PokemonV2PokemontypeAggregateFieldsModel = PokemonV2PokemontypeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
