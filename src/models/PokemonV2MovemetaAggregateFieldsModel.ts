import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaAggregateFieldsModelBase } from "./PokemonV2MovemetaAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaAggregateFieldsModel */
export interface PokemonV2MovemetaAggregateFieldsModelType extends Instance<typeof PokemonV2MovemetaAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaAggregateFieldsModel */
export { selectFromPokemonV2MovemetaAggregateFields, pokemonV2MovemetaAggregateFieldsModelPrimitives, PokemonV2MovemetaAggregateFieldsModelSelector } from "./PokemonV2MovemetaAggregateFieldsModel.base"

/**
 * PokemonV2MovemetaAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movemeta"
 */
export const PokemonV2MovemetaAggregateFieldsModel = PokemonV2MovemetaAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
