import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionAggregateFieldsModelBase } from "./PokemonV2PokemonevolutionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionAggregateFieldsModel */
export interface PokemonV2PokemonevolutionAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionAggregateFieldsModel */
export { selectFromPokemonV2PokemonevolutionAggregateFields, pokemonV2PokemonevolutionAggregateFieldsModelPrimitives, PokemonV2PokemonevolutionAggregateFieldsModelSelector } from "./PokemonV2PokemonevolutionAggregateFieldsModel.base"

/**
 * PokemonV2PokemonevolutionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonevolution"
 */
export const PokemonV2PokemonevolutionAggregateFieldsModel = PokemonV2PokemonevolutionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
