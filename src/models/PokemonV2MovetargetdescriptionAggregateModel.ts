import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionAggregateModelBase } from "./PokemonV2MovetargetdescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionAggregateModel */
export interface PokemonV2MovetargetdescriptionAggregateModelType extends Instance<typeof PokemonV2MovetargetdescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionAggregateModel */
export { selectFromPokemonV2MovetargetdescriptionAggregate, pokemonV2MovetargetdescriptionAggregateModelPrimitives, PokemonV2MovetargetdescriptionAggregateModelSelector } from "./PokemonV2MovetargetdescriptionAggregateModel.base"

/**
 * PokemonV2MovetargetdescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_movetargetdescription"
 */
export const PokemonV2MovetargetdescriptionAggregateModel = PokemonV2MovetargetdescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
