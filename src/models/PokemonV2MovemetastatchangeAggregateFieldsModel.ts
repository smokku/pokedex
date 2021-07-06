import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeAggregateFieldsModelBase } from "./PokemonV2MovemetastatchangeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeAggregateFieldsModel */
export interface PokemonV2MovemetastatchangeAggregateFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeAggregateFieldsModel */
export { selectFromPokemonV2MovemetastatchangeAggregateFields, pokemonV2MovemetastatchangeAggregateFieldsModelPrimitives, PokemonV2MovemetastatchangeAggregateFieldsModelSelector } from "./PokemonV2MovemetastatchangeAggregateFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movemetastatchange"
 */
export const PokemonV2MovemetastatchangeAggregateFieldsModel = PokemonV2MovemetastatchangeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
