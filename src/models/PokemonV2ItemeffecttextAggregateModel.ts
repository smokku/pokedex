import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextAggregateModelBase } from "./PokemonV2ItemeffecttextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextAggregateModel */
export interface PokemonV2ItemeffecttextAggregateModelType extends Instance<typeof PokemonV2ItemeffecttextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextAggregateModel */
export { selectFromPokemonV2ItemeffecttextAggregate, pokemonV2ItemeffecttextAggregateModelPrimitives, PokemonV2ItemeffecttextAggregateModelSelector } from "./PokemonV2ItemeffecttextAggregateModel.base"

/**
 * PokemonV2ItemeffecttextAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemeffecttext"
 */
export const PokemonV2ItemeffecttextAggregateModel = PokemonV2ItemeffecttextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
