import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatAggregateFieldsModelBase } from "./PokemonV2PokeathlonstatAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatAggregateFieldsModel */
export interface PokemonV2PokeathlonstatAggregateFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatAggregateFieldsModel */
export { selectFromPokemonV2PokeathlonstatAggregateFields, pokemonV2PokeathlonstatAggregateFieldsModelPrimitives, PokemonV2PokeathlonstatAggregateFieldsModelSelector } from "./PokemonV2PokeathlonstatAggregateFieldsModel.base"

/**
 * PokemonV2PokeathlonstatAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokeathlonstat"
 */
export const PokemonV2PokeathlonstatAggregateFieldsModel = PokemonV2PokeathlonstatAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
