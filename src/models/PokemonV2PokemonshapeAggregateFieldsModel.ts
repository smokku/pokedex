import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeAggregateFieldsModelBase } from "./PokemonV2PokemonshapeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeAggregateFieldsModel */
export interface PokemonV2PokemonshapeAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonshapeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeAggregateFieldsModel */
export { selectFromPokemonV2PokemonshapeAggregateFields, pokemonV2PokemonshapeAggregateFieldsModelPrimitives, PokemonV2PokemonshapeAggregateFieldsModelSelector } from "./PokemonV2PokemonshapeAggregateFieldsModel.base"

/**
 * PokemonV2PokemonshapeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonshape"
 */
export const PokemonV2PokemonshapeAggregateFieldsModel = PokemonV2PokemonshapeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
