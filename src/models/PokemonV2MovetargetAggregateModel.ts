import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetAggregateModelBase } from "./PokemonV2MovetargetAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetAggregateModel */
export interface PokemonV2MovetargetAggregateModelType extends Instance<typeof PokemonV2MovetargetAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetAggregateModel */
export { selectFromPokemonV2MovetargetAggregate, pokemonV2MovetargetAggregateModelPrimitives, PokemonV2MovetargetAggregateModelSelector } from "./PokemonV2MovetargetAggregateModel.base"

/**
 * PokemonV2MovetargetAggregateModel
 *
 * aggregated selection of "pokemon_v2_movetarget"
 */
export const PokemonV2MovetargetAggregateModel = PokemonV2MovetargetAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
