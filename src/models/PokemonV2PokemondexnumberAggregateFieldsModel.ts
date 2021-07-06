import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberAggregateFieldsModelBase } from "./PokemonV2PokemondexnumberAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberAggregateFieldsModel */
export interface PokemonV2PokemondexnumberAggregateFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberAggregateFieldsModel */
export { selectFromPokemonV2PokemondexnumberAggregateFields, pokemonV2PokemondexnumberAggregateFieldsModelPrimitives, PokemonV2PokemondexnumberAggregateFieldsModelSelector } from "./PokemonV2PokemondexnumberAggregateFieldsModel.base"

/**
 * PokemonV2PokemondexnumberAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemondexnumber"
 */
export const PokemonV2PokemondexnumberAggregateFieldsModel = PokemonV2PokemondexnumberAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
