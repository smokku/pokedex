import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionAggregateModelBase } from "./PokemonV2ItemattributedescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionAggregateModel */
export interface PokemonV2ItemattributedescriptionAggregateModelType extends Instance<typeof PokemonV2ItemattributedescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionAggregateModel */
export { selectFromPokemonV2ItemattributedescriptionAggregate, pokemonV2ItemattributedescriptionAggregateModelPrimitives, PokemonV2ItemattributedescriptionAggregateModelSelector } from "./PokemonV2ItemattributedescriptionAggregateModel.base"

/**
 * PokemonV2ItemattributedescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemattributedescription"
 */
export const PokemonV2ItemattributedescriptionAggregateModel = PokemonV2ItemattributedescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
