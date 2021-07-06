import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameAggregateModelBase } from "./PokemonV2PalparkareanameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameAggregateModel */
export interface PokemonV2PalparkareanameAggregateModelType extends Instance<typeof PokemonV2PalparkareanameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameAggregateModel */
export { selectFromPokemonV2PalparkareanameAggregate, pokemonV2PalparkareanameAggregateModelPrimitives, PokemonV2PalparkareanameAggregateModelSelector } from "./PokemonV2PalparkareanameAggregateModel.base"

/**
 * PokemonV2PalparkareanameAggregateModel
 *
 * aggregated selection of "pokemon_v2_palparkareaname"
 */
export const PokemonV2PalparkareanameAggregateModel = PokemonV2PalparkareanameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
