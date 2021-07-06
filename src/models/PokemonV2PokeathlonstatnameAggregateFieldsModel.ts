import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameAggregateFieldsModelBase } from "./PokemonV2PokeathlonstatnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameAggregateFieldsModel */
export interface PokemonV2PokeathlonstatnameAggregateFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameAggregateFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameAggregateFields, pokemonV2PokeathlonstatnameAggregateFieldsModelPrimitives, PokemonV2PokeathlonstatnameAggregateFieldsModelSelector } from "./PokemonV2PokeathlonstatnameAggregateFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokeathlonstatname"
 */
export const PokemonV2PokeathlonstatnameAggregateFieldsModel = PokemonV2PokeathlonstatnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
