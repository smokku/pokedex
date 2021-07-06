import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextAggregateModelBase } from "./PokemonV2ItemflingeffecteffecttextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextAggregateModel */
export interface PokemonV2ItemflingeffecteffecttextAggregateModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextAggregateModel */
export { selectFromPokemonV2ItemflingeffecteffecttextAggregate, pokemonV2ItemflingeffecteffecttextAggregateModelPrimitives, PokemonV2ItemflingeffecteffecttextAggregateModelSelector } from "./PokemonV2ItemflingeffecteffecttextAggregateModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemflingeffecteffecttext"
 */
export const PokemonV2ItemflingeffecteffecttextAggregateModel = PokemonV2ItemflingeffecteffecttextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
