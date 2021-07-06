import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateAggregateFieldsModelBase } from "./PokemonV2GrowthrateAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateAggregateFieldsModel */
export interface PokemonV2GrowthrateAggregateFieldsModelType extends Instance<typeof PokemonV2GrowthrateAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateAggregateFieldsModel */
export { selectFromPokemonV2GrowthrateAggregateFields, pokemonV2GrowthrateAggregateFieldsModelPrimitives, PokemonV2GrowthrateAggregateFieldsModelSelector } from "./PokemonV2GrowthrateAggregateFieldsModel.base"

/**
 * PokemonV2GrowthrateAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_growthrate"
 */
export const PokemonV2GrowthrateAggregateFieldsModel = PokemonV2GrowthrateAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
