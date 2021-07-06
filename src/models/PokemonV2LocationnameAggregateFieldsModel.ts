import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameAggregateFieldsModelBase } from "./PokemonV2LocationnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameAggregateFieldsModel */
export interface PokemonV2LocationnameAggregateFieldsModelType extends Instance<typeof PokemonV2LocationnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameAggregateFieldsModel */
export { selectFromPokemonV2LocationnameAggregateFields, pokemonV2LocationnameAggregateFieldsModelPrimitives, PokemonV2LocationnameAggregateFieldsModelSelector } from "./PokemonV2LocationnameAggregateFieldsModel.base"

/**
 * PokemonV2LocationnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_locationname"
 */
export const PokemonV2LocationnameAggregateFieldsModel = PokemonV2LocationnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
