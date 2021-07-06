import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectAggregateModelBase } from "./PokemonV2ItemflingeffectAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectAggregateModel */
export interface PokemonV2ItemflingeffectAggregateModelType extends Instance<typeof PokemonV2ItemflingeffectAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectAggregateModel */
export { selectFromPokemonV2ItemflingeffectAggregate, pokemonV2ItemflingeffectAggregateModelPrimitives, PokemonV2ItemflingeffectAggregateModelSelector } from "./PokemonV2ItemflingeffectAggregateModel.base"

/**
 * PokemonV2ItemflingeffectAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemflingeffect"
 */
export const PokemonV2ItemflingeffectAggregateModel = PokemonV2ItemflingeffectAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
