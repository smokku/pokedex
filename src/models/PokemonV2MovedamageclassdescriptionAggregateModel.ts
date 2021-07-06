import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionAggregateModelBase } from "./PokemonV2MovedamageclassdescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionAggregateModel */
export interface PokemonV2MovedamageclassdescriptionAggregateModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionAggregateModel */
export { selectFromPokemonV2MovedamageclassdescriptionAggregate, pokemonV2MovedamageclassdescriptionAggregateModelPrimitives, PokemonV2MovedamageclassdescriptionAggregateModelSelector } from "./PokemonV2MovedamageclassdescriptionAggregateModel.base"

/**
 * PokemonV2MovedamageclassdescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_movedamageclassdescription"
 */
export const PokemonV2MovedamageclassdescriptionAggregateModel = PokemonV2MovedamageclassdescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
