import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionAggregateModelBase } from "./PokemonV2GrowthratedescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionAggregateModel */
export interface PokemonV2GrowthratedescriptionAggregateModelType extends Instance<typeof PokemonV2GrowthratedescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionAggregateModel */
export { selectFromPokemonV2GrowthratedescriptionAggregate, pokemonV2GrowthratedescriptionAggregateModelPrimitives, PokemonV2GrowthratedescriptionAggregateModelSelector } from "./PokemonV2GrowthratedescriptionAggregateModel.base"

/**
 * PokemonV2GrowthratedescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_growthratedescription"
 */
export const PokemonV2GrowthratedescriptionAggregateModel = PokemonV2GrowthratedescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
