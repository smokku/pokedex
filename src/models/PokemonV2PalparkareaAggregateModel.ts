import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaAggregateModelBase } from "./PokemonV2PalparkareaAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaAggregateModel */
export interface PokemonV2PalparkareaAggregateModelType extends Instance<typeof PokemonV2PalparkareaAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaAggregateModel */
export { selectFromPokemonV2PalparkareaAggregate, pokemonV2PalparkareaAggregateModelPrimitives, PokemonV2PalparkareaAggregateModelSelector } from "./PokemonV2PalparkareaAggregateModel.base"

/**
 * PokemonV2PalparkareaAggregateModel
 *
 * aggregated selection of "pokemon_v2_palparkarea"
 */
export const PokemonV2PalparkareaAggregateModel = PokemonV2PalparkareaAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
