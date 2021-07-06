import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorAggregateFieldsModelBase } from "./PokemonV2BerryflavorAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorAggregateFieldsModel */
export interface PokemonV2BerryflavorAggregateFieldsModelType extends Instance<typeof PokemonV2BerryflavorAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorAggregateFieldsModel */
export { selectFromPokemonV2BerryflavorAggregateFields, pokemonV2BerryflavorAggregateFieldsModelPrimitives, PokemonV2BerryflavorAggregateFieldsModelSelector } from "./PokemonV2BerryflavorAggregateFieldsModel.base"

/**
 * PokemonV2BerryflavorAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_berryflavor"
 */
export const PokemonV2BerryflavorAggregateFieldsModel = PokemonV2BerryflavorAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
