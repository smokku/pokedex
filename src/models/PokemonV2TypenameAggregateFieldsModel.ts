import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameAggregateFieldsModelBase } from "./PokemonV2TypenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameAggregateFieldsModel */
export interface PokemonV2TypenameAggregateFieldsModelType extends Instance<typeof PokemonV2TypenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameAggregateFieldsModel */
export { selectFromPokemonV2TypenameAggregateFields, pokemonV2TypenameAggregateFieldsModelPrimitives, PokemonV2TypenameAggregateFieldsModelSelector } from "./PokemonV2TypenameAggregateFieldsModel.base"

/**
 * PokemonV2TypenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_typename"
 */
export const PokemonV2TypenameAggregateFieldsModel = PokemonV2TypenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
