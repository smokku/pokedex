import { Instance } from "mobx-state-tree"
import { PokemonV2BerryAggregateFieldsModelBase } from "./PokemonV2BerryAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryAggregateFieldsModel */
export interface PokemonV2BerryAggregateFieldsModelType extends Instance<typeof PokemonV2BerryAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryAggregateFieldsModel */
export { selectFromPokemonV2BerryAggregateFields, pokemonV2BerryAggregateFieldsModelPrimitives, PokemonV2BerryAggregateFieldsModelSelector } from "./PokemonV2BerryAggregateFieldsModel.base"

/**
 * PokemonV2BerryAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_berry"
 */
export const PokemonV2BerryAggregateFieldsModel = PokemonV2BerryAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
